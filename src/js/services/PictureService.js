import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class PictureService {
    getPictureData(profileid) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.PictureDAO);

        msgDao.findByProfile(profileid)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    findProfileByUserId(uid) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.ProfileDAO);

        msgDao.findByUserId(uid)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }
}
