import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.messageDAO = dm.getDao(CouchDbApi.MessageDAO);
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
