import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    findMsgFromMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findByFrom(profileId);
    }

    removeMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.remove(message);
    }

    updateMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.createOrUpdate(message);
    }

    findMsgFromMeUndeleted(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.findUndeleteFrom(profileId);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        return usrDao.findById(userId);
    }
}
