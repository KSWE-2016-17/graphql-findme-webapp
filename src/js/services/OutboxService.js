import CouchDbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.messageDAO = new CouchDbApi.MessageDAO(connection);
    }

    findMsgFromMe(profileId) {
        return this.messageDAO.findByFrom(profileId);
    }

    removeMsg(message) {
        return this.messageDAO.remove(message);
    }

    updateMsg(message) {
        return this.messageDAO.createOrUpdate(message);
    }

    findMsgFromMeUndeleted(profileId) {
        return this.messageDAO.findUndeleteFrom(profileId);
    }

    resolveUserName(userId) {
        return this.userDAO.findById(userId);
    }
}
