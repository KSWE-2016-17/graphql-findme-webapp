import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    findMsgToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findByTo(profileId);
    }

    findArchFromMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findArchivedFrom(profileId);
    }

    findArchToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.findArchivedTo(profileId);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findById(userId);
    }
}
