import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
    getProfile(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findById(profileId);
    }

    getUser(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findById(userId);
    }

    allProfiles() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findAll();
    }

    removeReportedMark(profileId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        profileDAO.findById(profileId)
            .then((data) => {
                if (data && data[0]) {
                    data[0].reported = false;

                    profileDAO.update(data[0])
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
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        userDAO.findById(userId)
            .then((data) => {
                if (data && data[0]) {
                    userDAO.remove(data[0])
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
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        profileDAO.findById(profileId)
            .then((data) => {
                if (data && data[0]) {
                    profileDAO.remove(data[0])
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
