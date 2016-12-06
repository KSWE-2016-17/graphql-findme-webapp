import q from "q";
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    findMsgToMe(to) {
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findByTo(to)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    deleteMsg(obj,uid){
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        msg2Dao.delete(obj,uid)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    findMsgToMeUndeleted(to){
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);

        msg2Dao.findUndeleteTo(to)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }

    updateMsg(obj){
        let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let msg2Dao = dm.getDao(CouchDbApi.MessageDAO);
        console.debug("ARCHIVDDAO");
        msg2Dao.createOrUpdate(obj)
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
