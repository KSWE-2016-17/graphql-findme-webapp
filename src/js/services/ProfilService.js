import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ProfilService {
    createProfile(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.create(obj);
    }

    getProfile(id, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findById(id);
    }

    findByLogin(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findByLogin(obj);
    }

    findById(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findById(obj);
    }

    linkProfile(uid, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findByUserId(uid)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        localStorage.setItem("sessionProfileId", data[0]._id);
                        console.log("daoinc");
                        console.log(data[0]._id);
                        console.log("daodone");
                        callbacks.success(data);
                    } else {
                        console.log("bengel");
                    }

                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        console.log("linkprofileerrrro");
                        callbacks.error("create user fail");
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            });
    }

    findProfileByUserId(uid) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        return msgDao.findByUserId(uid);
    }

    updateProfile(obj) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        return msgDao.update(obj);
    }

    remove(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.remove(obj);
    }

    getAdminRight(uid) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.UserDAO);

        return msgDao.findById(uid);
    }
}
