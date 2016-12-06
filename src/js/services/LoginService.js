import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class LoginService {
    login(login, password, callbacks) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findByLogin(login)
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

    linkprofile(uid, callbacks) {
        let deferred = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let proDao = dm.getDao(CouchDbApi.ProfileDAO);

        proDao.findByUserId(uid)
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

    findProfileByUserId(uid) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        return msgDao.findByUserId(uid);
    }
}
