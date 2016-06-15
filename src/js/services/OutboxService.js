import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class OutboxService {
    findMsgFromMe(from, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findByFrom(from, {
            success: function (data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
            },
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }

    resolveUserName(id, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        usrDao.findById(id, {
            success: function (data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
            },
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }
}
