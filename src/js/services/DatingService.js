import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class DatingService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.profileDAO = dm.getDao(CouchDbApi.ProfileDAO);
    }

    findAll() {
        return this.profileDAO.findAll();
    }

    findIdByName(login) {
        return this.userDAO.findByLogin(login);
    }
}
