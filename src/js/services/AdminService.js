import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
    constructor() {
        this.getProfile = this.getProfile.bind(this);
        this.getUser = this.getUser.bind(this);
        this.allProfiles = this.allProfiles.bind(this);
        this.removeReportedMark = this.removeReportedMark.bind(this);
        this.removeProfile = this.removeProfile.bind(this);
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

    allProfiles() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findAll();
    }

    removeReportedMark(profileID, callback) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                data[0].reported = false;

                profileDao.update(data[0])
                    .then((data) => {
                        if (callback && typeof callback.success === "function") {
                            callback.success();
                        }
                    });
            });
    }

    deleteUser(userID, callback) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userID)
            .then((data) => {
                if (data && data[0]) {
                    userDao.remove(data[0])
                        .then((data) => {
                            if (callback && typeof callback.success === "function") {
                                callback.success();
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                } else {
                    console.log("no user data for id: " + userID);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    removeProfile(profileID, callback) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                if (data && data[0]) {
                    profileDao.remove(data[0])
                        .then((data) => {
                            if (callback && typeof callback.success === "function") {
                                callback.success();
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                } else {
                    console.log("no profile data for id: " + profileID);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
}
