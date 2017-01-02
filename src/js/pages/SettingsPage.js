import React from "react";

import NavigationComponent from "../components/NavigationComponent";

import UserService from "../services/UserService";
import ProfilService from "../services/ProfilService";

export default class SettingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.deleteProfile = this.deleteProfile.bind(this);

        this.userService = new UserService();
        this.profileService = new ProfilService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Einstellungen</h1>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Privatsphäre</strong>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="btn btn-primary" type="button">
                                    <span className="glyphicon glyphicon-floppy"></span> Speichern
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Sonstiges</strong>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Lorem ipsum</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lorem ipsum
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="btn btn-primary" type="button">
                                    <span className="glyphicon glyphicon-floppy"></span> Speichern
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <strong>Profil löschen</strong>
                    </div>

                    <div className="panel-body">
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input id="accept-deletion" type="checkbox" onClick={this.onAcceptDeletionClick}/>
                                    Profillöschung bestätigen
                                </label>
                            </div>
                        </div>

                        <button id="btn-delete-profile" className="btn btn-danger disabled"
                                type="button" onClick={this.deleteProfile}>
                            <span className="glyphicon glyphicon-trash"></span> Profil löschen
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    onAcceptDeletionClick() {
        let deletionAccepted = $("#accept-deletion").is(":checked");

        $("#btn-delete-profile").toggleClass("disabled", !deletionAccepted);
    }

    deleteProfile() {
        let userId = localStorage.getItem("sessionUserId");
        let profileId = localStorage.getItem("sessionProfileId");
        let deletionAccepted = $("#accept-deletion").is(":checked");

        if (deletionAccepted) {
            this.profileService.findById(profileId)
                .then((data) => {
                    return this.profileService.removeProfile(data);
                })
                .then((data) => {
                    return this.userService.findById(userId);
                })
                .then((data) => {
                    return this.userService.removeUser(data);
                })
                .catch((error) => {
                    console.log(error);
                })
                .done();
        }
    }
}
