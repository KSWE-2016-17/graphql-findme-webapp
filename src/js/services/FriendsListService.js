import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.profileDAO = new CouchDbApi.ProfileDAO(connection);
        this.friendDAO = new CouchDbApi.FriendDAO(connection);
    }

    allFriends(profileId) {
        return this.friendDAO.findByProfileId(profileId);
    }

    getCurrentProfile() {
        return this.profileDAO.findByUserId(localStorage.getItem("sessionUserId"));
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
                if (data && data[0]) {
                    data[0].reported = "true";

                    this.profileDAO.update(data[0])
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

        this.friendDAO.findById(friendListId)
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

                    this.friendDAO.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("friendshit not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    handleFriendRequest(friendListId, profileId, accept) {
        let deferred = q.defer();

        this.friendDAO.findById(friendListId)
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

                    this.friendDAO.update(data[0])
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

        this.friendDAO.findByProfileId(ownerProfileId)
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

                        this.friendDAO.update(data[0])
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    }
                } else {
                    let newFriendslist = {
                        "doctype": "friends",
                        "profile_id": ownerProfileId,
                        "friends": [{id: friendProfileId, status: friendshipStatus}]
                    };

                    this.friendDAO.create(newFriendslist)
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
