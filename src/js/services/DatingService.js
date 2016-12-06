import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class DatingService {
    findAll() {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDAO = dm.getDao(CouchDbApi.ProfileDAO);

        return profileDAO.findAll();
    }

    findIdByName(login) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findByLogin(login);
    }
}
