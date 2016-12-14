import CouchDbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.profileDAO = new CouchDbApi.ProfileDAO(connection);
    }

    register(user) {
        return this.userDAO.create(user);
    }

    findIdByName(login) {
        return this.userDAO.findByLogin(login);
    }

    removeProfil(profile) {
        return this.profileDAO.remove(profile);
    }
}
