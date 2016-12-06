import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    findMsgFromMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findByFrom(profileId);
    }

    removeMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.remove(message);
    }

    updateMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.createOrUpdate(message);
    }

    findMsgFromMeUndeleted(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findUndeleteFrom(profileId);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findById(userId);
    }
}
