import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.profileDAO = dm.getDao(CouchDbApi.ProfileDAO);
    }

    getProfile(profileId) {
        return this.profileDAO.findById(profileId);
    }

    getUser(userId) {
        return this.userDAO.findById(userId);
    }

    allProfiles() {
        return this.profileDAO.findAll();
    }

    removeReportedMark(profileId) {
        let deferred = q.defer();

        this.profileDAO.findById(profileId)
            .then((data) => {
                if (data && data[0]) {
                    data[0].reported = false;

                    this.profileDAO.update(data[0])
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

        this.userDAO.findById(userId)
            .then((data) => {
                if (data && data[0]) {
                    this.userDAO.remove(data[0])
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
