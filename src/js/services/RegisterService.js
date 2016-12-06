import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    register(user) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.create(user);
    }

    findIdByName(login) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.findByLogin(login);
    }

    removeProfil(profile) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.remove(profile);
    }
}
