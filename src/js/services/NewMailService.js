import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    sendMail(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        return msgDao.create(obj);
    }

    resolveUserName(login, callbacks) {
        let dd = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dd.getDao(CouchDbApi.UserDAO);

        return usrDao.findByLogin(login);
    }
}
