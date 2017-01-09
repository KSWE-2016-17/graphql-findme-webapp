import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.profileDAO = new DbApi.ProfileDAO(connection);
        this.messageDAO = new DbApi.MessageDAO(connection);
    }

    findMsgToMe(profileId) {
        return this.messageDAO.findByTo(profileId);
    }

    removeMsg(message) {
        return this.messageDAO.remove(message);
    }

    findMsgToMeUndeleted(profileId) {
        return this.messageDAO.findUndeleteTo(profileId);
    }

    updateMsg(message) {
        return this.messageDAO.createOrUpdate(message);
    }

    resolveUserName(profileId) {
        return this.profileDAO.findById(profileId);
    }
}
