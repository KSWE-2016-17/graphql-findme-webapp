import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.messageDAO = dm.getDao(CouchDbApi.MessageDAO);
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
