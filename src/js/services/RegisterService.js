import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
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
