import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class RegisterService {
    constructor() {
        let dm = new CouchDbApi.DaoManager(connSettings);

        this.userDAO = dm.getDao(CouchDbApi.UserDAO);
        this.profileDAO = dm.getDao(CouchDbApi.ProfileDAO);
    }

    register(user) {
        return this.userDAO.create(user);
    }

    findIdByName(login) {
        return this.userDAO.findByLogin(login);
    }

    removeProfil(profile) {
        return this.profileDAO.remove(profile);
    }
}
