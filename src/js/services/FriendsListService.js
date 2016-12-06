import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
    allFriends(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDAO = dm.getDao(CouchDbApi.FriendDAO);

        return friendDAO.findByProfileId(profileId);
    }

    getCurrentProfile() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findByUserId(localStorage.getItem("sessionUserId"));
    }

    getProfile(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findById(profileId);
    }

    getUser(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findById(userId);
    }

    reportUser(profileId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        profileDAO.findById(profileId)
            .then((data) => {
                if (data && data[0]) {
                    data[0].reported = "true";

                    profileDAO.update(data[0])
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

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDAO = dm.getDao(CouchDbApi.FriendDAO);

        friendDAO.findById(friendListId)
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

                    friendDAO.update(data[0])
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
        let self = this;

        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDAO = dm.getDao(CouchDbApi.FriendDAO);

        friendDAO.findById(friendListId)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id == profileId) {
                            friendsList[i].status = accept == true ? 1 : 2;
                        }
                    }

                    data[0].friends = friendsList;

                    self.newFriendsListEntry(profileId, data[0].profile_id, 1);

                    friendDAO.update(data[0])
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

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDAO = dm.getDao(CouchDbApi.FriendDAO);

        friendDAO.findByProfileId(ownerProfileId)
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

                        friendDAO.update(data[0])
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    }
                } else {
                    let newFriendslist = {
                        "doctype": "friends",
                        "profile_id": ownerProfileId,
                        "friends": [{id: friendProfileId, status: friendshipStatus}]
                    };

                    friendDAO.create(newFriendslist)
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    isFriend(friendId) {
        let self = this;

        let deferred = q.defer();

        self.getCurrentProfile()
            .then(function (data) {
                if (data && data[0]) {
                    let currentProfileID = data[0]._id;
                    self.allFriends(currentProfileID)
                        .then(function (data) {
                            if (data && data[0]) {
                                let friendsList = data[0].friends;
                                let isHeAFriend = false;
                                for (let i = 0; i < friendsList.length; i++) {
                                    if (friendsList[i].id == friendId) {
                                        if ((friendsList[i].status == 1) || (friendsList[i].status == "1")) {
                                            isHeAFriend = true;
                                            console.log("profile " + friendId + " is a friend of the current session user!");
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
