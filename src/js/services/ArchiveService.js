import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.profileDAO = new DbApi.ProfileDAO(connection);
        this.messageDAO = new DbApi.MessageDAO(connection);
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

    resolveUserName(profileId) {
        return this.profileDAO.findById(profileId);
    }
}
