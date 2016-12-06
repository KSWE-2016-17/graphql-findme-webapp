import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    register(user) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.create(user);
    }

    findIdByName(login) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findByLogin(login);
    }

    removeProfil(profile) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.remove(profile);
    }
}
