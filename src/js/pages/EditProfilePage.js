import _ from "lodash";
import React from "react";

import NavigationComponent from "../components/NavigationComponent";

import ProfileService from "../services/ProfilService";

export default class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.updateAboutmeDescription = this.updateAboutmeDescription.bind(this);
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
        this.updateInterests = this.updateInterests.bind(this);

        this.profileService = new ProfileService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Profil bearbeiten</h1>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Profilbeschreibung</strong>
                    </div>

                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="aboutme">Über mich</label>
                            <input id="aboutme" type="text" name="aboutme" className="form-control"
                                   placeholder="Beschreibung"/>
                        </div>

                        <button type="button" className="btn btn-primary"
                                onClick={this.updateAboutmeDescription}>
                            <span className="glyphicon glyphicon-floppy-disk"></span> Speichern
                        </button>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Allgemeines</strong>
                    </div>

                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="status">Familienstatus</label>
                            <select id="status" className="form-control">
                                <option value="0">Single</option>
                                <option value="1">Geschieden</option>
                                <option value="2">Verheiratet</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="children">Kinder</label>
                            <input id="children" className="form-control" type="number" placeholder="Kinderanzahl"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="privacy">Privatsphäre</label>
                            <select id="privacy" className="form-control">
                                <option value="0">Privat</option>
                                <option value="1">Für Freunde</option>
                                <option value="2">Öffentlich</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hair">Haarfarbe</label>
                            <select id="hair" className="form-control">
                                <option value="0">Rot</option>
                                <option value="1">Blond</option>
                                <option value="2">Brünette</option>
                                <option value="3">Schwarz</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="eye">Augenfarbe</label>
                            <select id="eye" className="form-control">
                                <option value="0">Blau</option>
                                <option value="1">Grün</option>
                                <option value="2">Braun</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="figure">Statur</label>
                            <select id="figure" className="form-control">
                                <option value="0">Dünn</option>
                                <option value="1">Normal</option>
                                <option value="2">Schrank</option>
                            </select>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.updateGeneralInfo}>
                            <span className="glyphicon glyphicon-floppy-disk"></span> Speichern
                        </button>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Interessen</strong>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            {(() => {
                                let elements = [];

                                _.times(12, (i) => {
                                    elements.push(
                                        <div className="col-md-2" key={Math.random()}>
                                            <div className="form-group">
                                                <input id={"interest" + i} className="form-control" type="text"
                                                       placeholder="Interesse"/>
                                            </div>
                                        </div>
                                    );
                                });

                                return elements;
                            })()}
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.updateInterests}>
                            <span className="glyphicon glyphicon-floppy-disk"></span> Speichern
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.profileService.findById(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                $("#aboutme").val(data.aboutme.split("{")[0]);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();

        this.profileService.findById(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                $("#status").val(data.familystatus);
                $("#privacy").val(data.privacy.friends);
                $("#children").val(data.children);
                $("#hair").val(data.haircolor);
                $("#eye").val(data.eyecolor);
                $("#figure").val(data.figure);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();

        this.profileService.findById(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                let aboutme = data.aboutme;
                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts.length >= 2 ? aboutmeParts[1].split("+") : [];

                for (let i = 0; i < 12; i++) {
                    let selector = "#interest" + i;

                    if (i < interests.length) {
                        $(selector).val(interests[i + 1]);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    updateAboutmeDescription() {
        let aboutmeDescription = $("#aboutme").val();

        this.profileService.findById(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                let aboutme = data.aboutme;
                let aboutmeParts = aboutme.split("{");

                data.aboutme = aboutmeDescription + "{" + aboutmeParts[1];

                return this.profileService.updateProfile(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    updateGeneralInfo() {
        this.profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                data.familystatus = $("#status").val();
                data.privacy.friends = $("#privacy").val();
                data.privacy.pictures = $("#privacy").val();

                if ($("#children").val() !== "") {
                    data.children = $("#children").val();
                }

                data.haircolor = $("#hair").val();
                data.eyecolor = $("#eye").val();
                data.figure = $("#figure").val();

                return this.profileService.updateProfile(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    updateInterests() {
        let interestsBuffer = "#";

        for (let i = 0; i < 12; i++) {
            let selector = "#interest" + i;

            if ($(selector).val() !== "") {
                interestsBuffer += "+" + $(selector).val();
            }
        }

        this.profileService.findById(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                let aboutme = data.aboutme;
                let aboutmeParts = aboutme.split("{");

                data.aboutme = aboutmeParts + "{" + interestsBuffer;

                return this.profileService.updateProfile(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }
}
