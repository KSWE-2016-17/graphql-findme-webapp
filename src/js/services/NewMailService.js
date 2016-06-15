import CouchDbApi from "findme-react-couchdb-api";
import connSettings from "../../conn-settings";

export default class InboxService {
    sendMail(obj, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.create(obj, {
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

    resolveUserName(login,callbacks){
        let dd = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dd.getDao(CouchDbApi.UserDAO);

        usrDao.findByLogin(login, {
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