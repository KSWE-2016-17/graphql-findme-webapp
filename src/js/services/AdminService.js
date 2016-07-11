import q from "q";
import _ from "lodash";

import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class AdminService {
	
	constructor() {
		this.getProfile = this.getProfile.bind(this);
		this.getUser = this.getUser.bind(this);
		this.allProfiles = this.allProfiles.bind(this);
		this.removeReportedMark = this.removeReportedMark.bind(this);
		this.deleteProfile = this.deleteProfile.bind(this);
    }
	
	getProfile(profileID) {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findById(profileID)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
	}
	
	getUser(userID) {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let userDao = dm.getDao(CouchDbApi.UserDAO);

        userDao.findById(userID)
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
	}
	
	allProfiles() {
		let defer = q.defer();

        let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);

        profileDao.findAll()
            .then(defer.resolve)
            .catch(defer.reject);

        return defer.promise;
    }
	
	removeReportedMark(profileID, callback) {
		let self = this;
		let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
		
        profileDao.findById(profileID, {
            success: function(data) {
                data[0].reported = false;
				
				profileDao.update(data[0], {
					success: function() {
						if (callback && typeof callback.success === "function") {
							callback.success();
						}
					}
				});
            }
        });
	}
	
	deleteProfile(profileID, callback) {
		let self = this;
		let dm = new CouchDbApi.DaoManager(connSettings);
        let profileDao = dm.getDao(CouchDbApi.ProfileDAO);
		
        profileDao.findById(profileID, {
            success: function(data) {
				profileDao.delete(data[0], {
					success: function() {
						if (callback && typeof callback.success === "function") {
							callback.success();
						}
					},
					error: function(err) {
						console.error(err);
					}
				});
            },
			error: function(err) {
                console.error(err);
			}
        });
	}
}