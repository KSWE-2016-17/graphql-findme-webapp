import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ProfilService {
    createProfile(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.create(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
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

    getProfile(id, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(id)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("finding failed");
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

    findByLogin(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findByLogin(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("findUserByLogin fail");
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

    findById(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("findUserByLogin fail");
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

    linkProfile(uid, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        console.log("linkprofile");
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
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        msgDao.findByUserId(uid)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    updateProfile(obj) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        msgDao.update(obj)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    remove(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.remove(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("delete user fail");
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

    getAdminRight(uid) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.UserDAO);

        msgDao.findById(uid)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }
}
