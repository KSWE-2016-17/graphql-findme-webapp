import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class FriendsListService {
    allFriends(callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let friendDao = dm.getDao(CouchDbApi.FriendDAO);
		//console.log("session user id: " + localStorage.getItem("sessionUser")._id); // for debugging. the value is undefined all the time...
        friendDao.findByProfileId(localStorage.getItem("sessionUser")._id, { // for some reason this localStorage query doesn't return a value
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
						//console.log("friend id #1: " + data[0].friends[0].id); // for debugging.
                        callbacks.success(data[0].friends);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("error");
                    }
                }
            },
            error: function(err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }
	
	endFrienship(friend_id, callbacks) {
		/*
		should do something like:
		  - remove the friend with the corresponding ID from the Friends.friends map
		*/
        // not implemented
    }
	
	acceptFriendRequest(friend_id, callbacks) {
		/*
		should do something like:
		  - change the friend status in the Friends.friends map to 1
		*/
        // not implemented
    }
	
	declineFriendRequest(friend_id, callbacks) {
        /*
		should do something like:
		  - change the friend status in the Friends.friends map to 2
		*/
        // not implemented
    }
}