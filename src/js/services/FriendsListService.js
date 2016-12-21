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

    endFrienship(friendListId, profileId) {
        let deferred = q.defer();

        this.friendRequestDAO.findById(friendListId)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;
                    let newFriendsList = [];

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id != profileId) {
                            newFriendsList.push(friendsList[i]);
                        }
                    }

                    data[0].friends = newFriendsList;

                    this.friendRequestDAO.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("friendshit not found");
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


    handleFriendRequest(friendListId, profileId, accept) {
        let deferred = q.defer();

        this.friendRequestDAO.findById(friendListId)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id == profileId) {
                            friendsList[i].status = accept == true ? 1 : 2;
                        }
                    }

                    data[0].friends = friendsList;

                    this.newFriendsListEntry(profileId, data[0].profile_id, 1);

                    this.friendRequestDAO.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("friendshit not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    newFriendsListEntry(ownerProfileId, friendProfileId, friendshipStatus) {
        let deferred = q.defer();

        this.friendRequestDAO.findByProfileId(ownerProfileId)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;
                    let isAlreadyAFriend = false;

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id == friendProfileId) {
                            isAlreadyAFriend = true;
                        }
                    }

                    if (isAlreadyAFriend == false) {
                        friendsList.push({id: friendProfileId, status: friendshipStatus});
                        data[0].friends = friendsList;

                        this.friendRequestDAO.update(data[0])
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    }
                } else {
                    let newFriendslist = {
                        "doctype": "friends",
                        "profile_id": ownerProfileId,
                        "friends": [{id: friendProfileId, status: friendshipStatus}]
                    };

                    this.friendRequestDAO.create(newFriendslist)
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    isFriend(friendId) {
        let deferred = q.defer();

        this.getCurrentProfile()
            .then((data) => {
                if (data && data[0]) {
                    let currentProfileID = data[0]._id;
                    this.allFriends(currentProfileID)
                        .then((data) => {
                            if (data && data[0]) {
                                let friendsList = data[0].friends;
                                let isHeAFriend = false;
                                for (let i = 0; i < friendsList.length; i++) {
                                    if (friendsList[i].id == friendId) {
                                        if ((friendsList[i].status == 1) || (friendsList[i].status == "1")) {
                                            isHeAFriend = true;
                                            break;
                                        }
                                    }
                                }
                                if (isHeAFriend == true) {
                                    deferred.resolve("yes");
                                } else {
                                    deferred.resolve("no");
                                }
                            } else {
                                deferred.reject("no friendship found");
                            }
                        })
                        .catch(deferred.reject);
                } else {
                    deferred.reject("current user's profile not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }
}
