import q from "q";
import _ from "lodash";

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
    }
	
    allFriends(profileID) {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        friendDao.findByProfileId(profileID)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }
	
	getCurrentProfile() {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

		profileDao.findByUserId(localStorage.getItem("sessionUserId"))
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
	}
	
	getProfile(profileID) {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
	}
	
	getUser(userID) {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userID)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
	}
	
	reportUser(profileID) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID,  {
            success: function(data) {
                if (data) {
					if (data[0]) {
						data[0].reported = "true";
						profileDao.update(data[0], {});
					}
					else {
						console.log("no profile data recieved. id: " + profileID);
					}
                }
				else {
					console.log("no profile data recieved. id: " + profileID);
				}
            },
			error: function(err) {
                console.error(err);
			}
        });
	}
	
	endFrienship(friendsListID, profileID, callback) {
		let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);

        friendDao.findById(friendsListID,  {
            success: function(data) {
                let friendsList = data[0].friends;
				let newFriendsList = [];
				
				for (let i = 0; i < friendsList.length; i++) {
					if (friendsList[i].id != profileID) {
						newFriendsList.push(friendsList[i]);
					}
				}
				
				data[0].friends = newFriendsList;
				
				friendDao.update(data[0], {
					success: function() {
						if (callback && typeof callback.success === "function") {
							callback.success();
						}
					}
				});
            }
        });
    }
	
	handleFriendRequest(friendsListID, profileID, accept, callback) {
		let self = this;
		let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);
		
        friendDao.findById(friendsListID,  {
            success: function(data) {
                let friendsList = data[0].friends;
				
				for (let i = 0; i < friendsList.length; i++) {
					if (friendsList[i].id == profileID) {
						friendsList[i].status = accept == true ? 1 : 2;
					}
				}
				
				data[0].friends = friendsList;

				self.newFriendsListEntry(profileID, data[0].profile_id, 1, {});
				
				friendDao.update(data[0], {
					success: function() {
						if (callback && typeof callback.success === "function") {
							callback.success();
						}
					}
				});
            }
        });
    }
	
	newFriendsListEntry(ownerProfileID, friendProfileID, friendshipStatus, callback) {
		let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);
		
		friendDao.findByProfileId(ownerProfileID,  {
            success: function(data) {
                if (data) {
					if (data[0]) {
						let friendsList = data[0].friends;
						let isAlreadyAFriend = false;
						
						for (let i = 0; i < friendsList.length; i++) {
							if (friendsList[i].id == friendProfileID) {
								isAlreadyAFriend = true;
								console.log("profile " + friendProfileID + " already exists in profile-" + ownerProfileID + "'s friends list");
							}
						}
						
						if (isAlreadyAFriend == false) {
							
							friendsList.push({id:friendProfileID, status:friendshipStatus});
							data[0].friends = friendsList;
							
							friendDao.update(data[0], {
								success: function() {
									if (callback && typeof callback.success === "function") {
										callback.success();
									}
								}
							});
						}
					}
					else {
						var newFriendslist = {
							"doctype" : "friends",
							"profile_id" : ownerProfileID,
							"friends" : [{id:friendProfileID, status:friendshipStatus}]
						}

						friendDao.create(newFriendslist, {
							success: function() {
								if (callback && typeof callback.success === "function") {
									callback.success();
								}
							}
						});
					}
                }
            }
        });
	}
}