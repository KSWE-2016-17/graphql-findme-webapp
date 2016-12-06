import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
    constructor() {
        this.getProfile = this.getProfile.bind(this);
        this.getUser = this.getUser.bind(this);
        this.allProfiles = this.allProfiles.bind(this);
        this.removeReportedMark = this.removeReportedMark.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
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

    allProfiles() {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findAll()
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    removeReportedMark(profileID, callback) {
        let self = this;
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
        let self = this;
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userID)
            .then((data) => {
                if (data && data[0]) {
                    userDao.delete(data[0])
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

    deleteProfile(profileID, callback) {
        let self = this;
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                if (data && data[0]) {
                    profileDao.delete(data[0])
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
