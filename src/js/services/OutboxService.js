import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.profileDAO = new DbApi.ProfileDAO(connection);
        this.messageDAO = new DbApi.MessageDAO(connection);
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

    resolveUserName(profileId) {
        return this.profileDAO.findById(profileId);
    }
}
