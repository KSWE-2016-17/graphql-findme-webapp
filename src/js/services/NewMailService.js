import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.messageDAO = new DbApi.MessageDAO(connection);
    }

    sendMail(message) {
        return this.messageDAO.create(message);
    }

    resolveUserName(login) {
        return this.userDAO.findByLogin(login);
    }
}
