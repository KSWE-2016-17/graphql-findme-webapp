import q from "q";
import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class LoginService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
    }

    login(login, password) {
        let deferred = q.defer();

        this.userDAO.findByLogin(login)
            .then((data) => {
                if (data && data[0].password === password) {
                    localStorage.setItem("sessionUserId", data[0]._id);

                    deferred.resolve(data[0]);
                } else {
                    deferred.reject("wrong username or password");
                }
            })
            .catch(deferred.reject)
            .done();

        return deferred.promise;
    }
}
