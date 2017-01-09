import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class UserService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
    }

    findById(userId) {
        return this.userDAO.findById(userId);
    }

    findByLogin(login) {
        return this.userDAO.findByLogin(login);
    }

    createUser(user) {
        return this.userDAO.create(user);
    }

    removeUser(user) {
        return this.userDAO.remove(user);
    }
}
