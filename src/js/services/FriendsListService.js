import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
    constructor() {
        this.allFriends = this.allFriends.bind(this);
        this.getCurrentProfile = this.getCurrentProfile.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.getUser = this.getUser.bind(this);
        this.reportUser = this.reportUser.bind(this);
        this.endFrienship = this.endFrienship.bind(this);
        this.handleFriendRequest = this.handleFriendRequest.bind(this);
        this.newFriendsListEntry = this.newFriendsListEntry.bind(this);
        this.isFriend = this.isFriend.bind(this);
    }

    allFriends(profileID) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        return friendDao.findByProfileId(profileID);
    }

    getCurrentProfile() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findByUserId(localStorage.getItem("sessionUserId"));
    }

    getProfile(profileID) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findById(profileID);
    }

    getUser(userID) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.findById(userID);
    }

    reportUser(profileID) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                if (data && data[0]) {
                    data[0].reported = "true";

                    profileDao.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("profile not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    endFrienship(friendsListID, profileID) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        friendDao.findById(friendsListID)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;
                    let newFriendsList = [];

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id != profileID) {
                            newFriendsList.push(friendsList[i]);
                        }
                    }

                    data[0].friends = newFriendsList;

                    friendDao.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("friendshit not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    handleFriendRequest(friendsListID, profileID, accept) {
        let self = this;

        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        friendDao.findById(friendsListID)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id == profileID) {
                            friendsList[i].status = accept == true ? 1 : 2;
                        }
                    }

                    data[0].friends = friendsList;

                    self.newFriendsListEntry(profileID, data[0].profile_id, 1);

                    friendDao.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("friendshit not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    newFriendsListEntry(ownerProfileID, friendProfileID, friendshipStatus) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        friendDao.findByProfileId(ownerProfileID)
            .then((data) => {
                if (data && data[0]) {
                    let friendsList = data[0].friends;
                    let isAlreadyAFriend = false;

                    for (let i = 0; i < friendsList.length; i++) {
                        if (friendsList[i].id == friendProfileID) {
                            isAlreadyAFriend = true;
                        }
                    }

                    if (isAlreadyAFriend == false) {
                        friendsList.push({id: friendProfileID, status: friendshipStatus});
                        data[0].friends = friendsList;

                        friendDao.update(data[0])
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    }
                } else {
                    let newFriendslist = {
                        "doctype": "friends",
                        "profile_id": ownerProfileID,
                        "friends": [{id: friendProfileID, status: friendshipStatus}]
                    };

                    friendDao.create(newFriendslist)
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    isFriend(friendID) {
        let self = this;

        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);

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
                                    if (friendsList[i].id == friendID) {
                                        if ((friendsList[i].status == 1) || (friendsList[i].status == "1")) {
                                            isHeAFriend = true;
                                            console.log("profile " + friendID + " is a friend of the current session user!");
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
