import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ProfilService {
    createProfile(profile) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.create(profile);
    }

    getProfile(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findById(profileId);
    }

    findByLogin(login) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findByLogin(login);
    }

    findById(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findById(profileId);
    }

    linkProfile(userId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        profileDAO.findByUserId(userId)
            .then((data) => {
                if (data && data[0]) {
                    localStorage.setItem("sessionProfileId", data[0]._id);

                    deferred.resolve(data);
                } else {
                    deferred.reject("create user fail");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    findProfileByUserId(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findByUserId(userId);
    }

    updateProfile(profile) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.update(profile);
    }

    remove(profile) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.remove(profile);
    }

    getAdminRight(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDAO = dm.getDao(CouchDbApi.UserDAO);

        return msgDAO.findById(userId);
    }
}
