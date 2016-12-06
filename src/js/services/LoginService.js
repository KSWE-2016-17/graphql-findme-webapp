import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class LoginService {
    login(login, password) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        userDAO.findByLogin(login)
            .then((data) => {
                if (data && data[0].password === password) {
                    localStorage.setItem("sessionUserId", data[0]._id);

                    deferred.resolve(data);
                } else {
                    deferred.reject("wrong username or password");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    linkprofile(userId) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        profileDAO.findByUserId(userId)
            .then((data) => {
                if (data && data[0]) {
                    localStorage.setItem("sessionProfileId", data[0]._id);

                    deferred.resolve(data);
                } else {
                    deferred.reject("profile not found");
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
}
