import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.messageDAO = new CouchDbApi.MessageDAO(connection);
    }

    sendMail(message) {
        return this.messageDAO.create(message);
    }

    resolveUserName(login) {
        return this.userDAO.findByLogin(login);
    }
}
