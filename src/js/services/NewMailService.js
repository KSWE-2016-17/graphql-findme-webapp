import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    sendMail(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.create(obj)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            });
    }

    resolveUserName(login, callbacks) {
        let dd = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dd.getDao(CouchDbApi.UserDAO);

        usrDao.findByLogin(login)
            .then((data) => {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            });
    }
}
