import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class DatingService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.profileDAO = new CouchDbApi.ProfileDAO(connection);
    }

    findAll() {
        return this.profileDAO.findAll();
    }

    findIdByName(login) {
        return this.userDAO.findByLogin(login);
    }
}
