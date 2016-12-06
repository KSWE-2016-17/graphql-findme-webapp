import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class ArchiveService {
    findMsgToMe(to) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findByTo(to)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    findArchFromMe(from) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findArchivedFrom(from)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    findArchToMe(to) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findArchivedTo(to)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    resolveUserName(id) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dm.getDao(CouchDbApi.UserDAO);

        usrDao.findById(id)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }
}
