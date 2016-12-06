import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.messageDAO = dm.getDao(CouchDbApi.MessageDAO);
    }

    sendMail(message) {
        return this.messageDAO.create(message);
    }

    resolveUserName(login) {
        return this.userDAO.findByLogin(login);
    }
}
