import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    findMsgFromMe(from) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.findByFrom(from);
    }

    removeMsg(obj, uid) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.remove(obj, uid);
    }

    updateMsg(obj) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.createOrUpdate(obj);
    }

    findMsgFromMeUndeleted(from) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        return msg2Dao.findUndeleteFrom(from);
    }

    resolveUserName(id) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        return usrDao.findById(id);
    }
}
