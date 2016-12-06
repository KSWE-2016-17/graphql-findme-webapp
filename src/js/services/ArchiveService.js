import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.messageDAO = dm.getDao(CouchDbApi.MessageDAO);
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
