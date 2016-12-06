import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    findMsgToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findByTo(profileId);
    }

    removeMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.remove(message);
    }

    findMsgToMeUndeleted(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findUndeleteTo(profileId);
    }

    updateMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.createOrUpdate(message);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findById(userId);
    }
}
