import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.messageDAO = new DbApi.messageDAO(connection);
    }

    findMsgToMe(profileId) {
        return this.messageDAO.findByTo(profileId);
    }

    findArchFromMe(profileId) {
        return this.messageDAO.findArchivedFrom(profileId);
    }

    findArchToMe(profileId) {
        return this.messageDAO.findArchivedTo(profileId);
    }

    resolveUserName(userId) {
        return this.userDAO.findById(userId);
    }
}
