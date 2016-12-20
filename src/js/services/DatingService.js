import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class DatingService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
    }

    findAll() {
        return this.profileDAO.findAll();
    }

    findIdByName(login) {
        return this.userDAO.findByLogin(login);
    }
}
