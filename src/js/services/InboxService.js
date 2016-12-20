import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
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

    resolveUserName(userId) {
        return this.userDAO.findById(userId);
    }
}
