import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    register(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.create(obj);
    }

    findIdByName(login, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.findByLogin(login);
    }

    removeProfil(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.remove(obj);
    }
}
