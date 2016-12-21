import q from "q";
import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
        this.friendRequestDAO = new DbApi.FriendRequestDAO(connection);
    }

    getFriendsOfProfile(profileId) {
        return this.profileDAO.findById(profileId)
            .then((data) => {
                let promises = [];

                data.friends_ids.forEach((friendId) => {
                    promises.push(this.profileDAO.findById(friendId));
                });

                return q.all(promises);
            })
            .then((promiseResults) => {
                let friends = [];

                promiseResults.forEach((promiseResult) => {
                    friends.push(promiseResult);
                });

                return friends;
            });
    }

    getFriendRequestsOfProfile(profileId) {
        let deferred = q.defer();

        let friendRequests = [];

        this.friendRequestDAO.findByFrom(profileId)
            .then((data) => {
                data.forEach((friendRequest) => {
                    friendRequests.push(friendRequest);
                });

                return this.friendRequestDAO.findByTo(profileId);
            })
            .then((data) => {
                data.forEach((friendRequest) => {
                    friendRequests.push(friendRequest);
                });

                deferred.resolve(friendRequests);
            })
            .catch(deferred.reject)
            .done();

        return deferred.promise;
    }

    getCurrentProfile() {
        return this.profileDAO.findById(localStorage.getItem("sessionProfileId"));
    }

    getProfile(profileId) {
        return this.profileDAO.findById(profileId);
    }

    getUser(userId) {
        return this.userDAO.findById(userId);
    }

    reportUser(profileId) {
        let deferred = q.defer();

        this.profileDAO.findById(profileId)
            .then((data) => {
                if (data) {
                    data.reported = true;

                    this.profileDAO.update(data)
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("profile not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    acceptFriendRequest(profileId) {
        return this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    data.friends_ids.push(profileId);

                    return q.all([
                        this.friendRequestDAO.findByTo(data._id),
                        this.profileDAO.update(data)
                    ]);
                }
            })
            .then((data) => {
                let foundFriendRequest;

                data[0].forEach((friendRequest) => {
                    if (friendRequest.from_id === profileId) {
                        foundFriendRequest = friendRequest;
                    }
                });

                if (foundFriendRequest) {
                    return this.friendRequestDAO.remove(foundFriendRequest);
                }
            });
    }

    rejectFriendRequest(profileId) {
        return this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    return this.friendRequestDAO.findByTo(data._id);
                }
            })
            .then((data) => {
                let foundFriendRequest;

                data.forEach((friendRequest) => {
                    if (friendRequest.from_id === profileId) {
                        foundFriendRequest = friendRequest;
                    }
                });

                if (foundFriendRequest) {
                    return this.friendRequestDAO.remove(foundFriendRequest);
                }
            });
    }

    cancelFriendRequest(profileId) {
        return this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    return this.friendRequestDAO.findByFrom(data._id);
                }
            })
            .then((data) => {
                let foundFriendRequest;

                data.forEach((friendRequest) => {
                    if (friendRequest.to_id === profileId) {
                        foundFriendRequest = friendRequest;
                    }
                });

                if (foundFriendRequest) {
                    return this.friendRequestDAO.remove(foundFriendRequest);
                }
            });
    }

    dismissFriendship(profileId) {
        return this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    let index = data.friends_ids.indexOf(profileId);

                    if (index !== -1) {
                        data.friends_ids.splice(index, 1);

                        return this.profileDAO.update(data);
                    }
                }
            });
    }

    createFriendRequest(profileId) {
        return this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    return this.friendRequestDAO.create({
                        from_id: data._id,
                        to_id: profileId
                    });
                }
            });
    }

    isFriend(profileId) {
        let deferred = q.defer();

        this.getCurrentProfile()
            .then((data) => {
                if (data) {
                    deferred.resolve(data.friends_ids.indexOf(profileId) !== -1);
                } else {
                    deferred.reject("current user's profile not found");
                }
            })
            .catch(deferred.reject)
            .done();

        return deferred.promise;
    }
}
