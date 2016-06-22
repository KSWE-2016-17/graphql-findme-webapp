import q from "q";
import _ from "lodash";

import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
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

        profileDao.findByUserId(profileID,  {
            success: function(data) {
                if (data) {
                    data[0].reported = "true";
					profileDao.update(data[0], {
					});
                }
            }
        });
	}
	
	endFrienship(friendsListID, profileID) {
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
				});
            }
        });
    }
	
	handleFriendRequest(friendsListID, profileID, accept) {
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
				
				friendDao.update(data[0], {
				});
            }
        });
    }
}