import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class DatingService {
    findAll(callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDao.findAll();
    }

    findIdByName(login, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        return userDao.findByLogin(login);
    }
}
