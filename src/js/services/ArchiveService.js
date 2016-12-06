import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    findMsgToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findByTo(profileId);
    }

    findArchFromMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findArchivedFrom(profileId);
    }

    findArchToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findArchivedTo(profileId);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        return usrDao.findById(userId);
    }
}
