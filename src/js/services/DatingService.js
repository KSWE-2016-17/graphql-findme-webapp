import CouchDbApi from "findme-react-couchdb-api";
import connSettings from "../../conn-settings";

export default class DatingService {
    findAll(callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
        profileDao.findAll(callbacks,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("findAll profiles fail");
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

    findIdByName(login,callbacks){
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);
        userDao.findByLogin(login,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("user resolving fail");
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
    
}