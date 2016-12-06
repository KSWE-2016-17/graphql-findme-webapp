import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
    getProfile(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findById(profileId);
    }

    getUser(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.findById(userId);
    }

    allProfiles() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findAll();
    }

    removeReportedMark(profileId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileId)
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

    deleteUser(userId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userId)
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

    removeProfile(profileId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileId)
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
