import CouchDbApi from "findme-react-couchdb-api";
import connSettings from "../../conn-settings";
import q from "q";

export default class ProfilService {
    createProfile(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
        profileDao.create(obj, {
            success: function (data) {
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
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }

        getProfile(id, callbacks)
        {
            let dm = new CouchDbApi.DaoManager(connSettings);
            let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
            profileDao.findById(id, {
                success: function (data) {
                    if (data) {
                        if (callbacks && typeof callbacks.success === "function") {
                            callbacks.success(data);
                        }
                    } else {
                        if (callbacks && typeof callbacks.error === "function") {
                            callbacks.error("finding failed");
                        }
                    }
                },
                error: function (err) {
                    console.error(err);
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error(err);
                    }
                }
            });
        }
/*
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
        });*/




    linkProfile(uid, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
        console.log("linkprofile");
        profileDao.findByUserId(uid, {
            success: function (data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        localStorage.setItem("sessionProfileId",data[0]._id);
                        localStorage.setItem("sessionProfile",data[0]);
                        console.log("daoinc");
                        console.log(data[0]._id);
                        console.log("daodone");
                        callbacks.success(data);
                    }else{
                        console.log("bengel");
                    }

                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        console.log("linkprofileerrrro");
                        callbacks.error("create user fail");
                    }
                }
            },
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
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


}