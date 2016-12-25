import q from "q";
import DbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class ProfilService {
    constructor() {
        let connection = new DbApi.Connection(connSettings);

        this.userDAO = new DbApi.UserDAO(connection);
        this.profileDAO = new DbApi.ProfileDAO(connection);
    }

    createProfile(profile) {
        return this.profileDAO.create(profile);
    }

    getProfile(profileId) {
        return this.profileDAO.findById(profileId);
    }

    findByLogin(login) {
        return this.profileDAO.findByLogin(login);
    }

    findById(profileId) {
        return this.profileDAO.findById(profileId);
    }

    findProfileByUserId(userId) {
        return this.profileDAO.findByUserId(userId);
    }

    updateProfile(profile) {
        return this.profileDAO.update(profile);
    }

    remove(profile) {
        return this.profileDAO.remove(profile);
    }

    getAdminRight(userId) {
        return this.userDAO.findById(userId);
    }
}
