import CouchDbApi from "findme-react-couchdb-api";
import connSettings from "../../conn-settings";

export default class ProfilService {

    createProfile(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
        profileDao.create(obj,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("create user fail");
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

    findByLogin(obj){
        profileDao.findByLogin(obj,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("findUserByLogin fail");
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

    findById(obj){
        profileDao.findById(obj,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("findUserByLogin fail");
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

    delete(obj){
        profileDao.delete(obj,  {
            success: function(data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("delete user fail");
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