import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    register(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.create(obj)
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

    findIdByName(login, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findByLogin(login)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("user resolving fail");
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

    deleteProfil(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.delete(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("delete profil fail");
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
}
