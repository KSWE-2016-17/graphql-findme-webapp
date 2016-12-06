import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    sendMail(message) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let messageDAO = dm.getDao(CouchDbApi.MessageDAO);

        return messageDAO.create(message);
    }

    resolveUserName(login) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDAO = dm.getDao(CouchDbApi.UserDAO);

        return userDAO.findByLogin(login);
    }
}
