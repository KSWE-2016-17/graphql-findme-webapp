import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    findMsgToMe(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findByTo(profileId);
    }

    removeMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.remove(message);
    }

    findMsgToMeUndeleted(profileId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.findUndeleteTo(profileId);
    }

    updateMsg(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.createOrUpdate(message);
    }

    resolveUserName(userId) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        return usrDao.findById(userId);
    }
}
