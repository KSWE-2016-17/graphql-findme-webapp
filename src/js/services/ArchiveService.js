import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.messageDAO = new CouchDbApi.messageDAO(connection);
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
