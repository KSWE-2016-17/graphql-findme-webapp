import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class LoginService {
    login(login, password, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);
        userDao.findByLogin(login, {
            success: function(data) {
                if (data && data[0].password === password) {
                    if (callbacks && typeof callbacks.success === "function") {
                        localStorage.setItem("sessionUserId", data[0]._id);
                        callbacks.success(data);
                    }
                } else {
                    if (callbacks && typeof callbacks.error === "function") {
                        callbacks.error("wrong username or password");
                    }
                }
            },
            error: function(err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }
}