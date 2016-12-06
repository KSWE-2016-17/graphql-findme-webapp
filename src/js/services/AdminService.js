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
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                if (data && data[0]) {
                    data[0].reported = false;

                    profileDao.update(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("profile not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    deleteUser(userID, callback) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userID)
            .then((data) => {
                if (data && data[0]) {
                    userDao.remove(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("user not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    removeProfile(profileID, callback) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then((data) => {
                if (data && data[0]) {
                    profileDao.remove(data[0])
                        .then(deferred.resolve)
                        .catch(deferred.reject);
                } else {
                    deferred.reject("profile not found");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }
}
