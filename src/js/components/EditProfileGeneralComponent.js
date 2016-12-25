import React from "react";

import ProfileService from "../services/ProfilService";

export default class EditProfileGeneralComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);

        this.profileService = new ProfileService();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Grundlegendes</h2>
                    </div>
                </div>

                <div className="row">
                    <form>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="status">Familienstatus</label>
                                <select id="status" className="form-control" name="status">
                                    <option value="0">Single</option>
                                    <option value="1">Geschieden</option>
                                    <option value="2">Verheiratet</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="children">Kinder</label>
                                <input id="children" type="text" className="form-control" name="children"
                                       placeholder="Kinderanzahl"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="privacy">Privatsphäre</label>
                                <select id="privacy" className="form-control" name="privacy">
                                    <option value="0">Privat</option>
                                    <option value="1">Für Freunde</option>
                                    <option value="2">Öffentlich</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="hair">Haarfarbe</label>
                                <select id="hair" className="form-control" name="hair">
                                    <option value="0">Rot</option>
                                    <option value="1">Blond</option>
                                    <option value="2">Brünette</option>
                                    <option value="3">Schwarz</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="eye">Augenfarbe</label>
                                <select id="eye" className="form-control" name="eye">
                                    <option value="0">Blau</option>
                                    <option value="1">Grün</option>
                                    <option value="2">Braun</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="figure">Statur</label>
                                <select id="figure" className="form-control" name="figure">
                                    <option value="0">Dünn</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Schrank</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <button type="button" className="btn btn-primary" onClick={this.updateGeneralInfo}>
                                    Speichern
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                $("#status").val(data[0].familystatus);
                $("#privacy").val(data[0].privacy.friends);
                $("#children").val(data[0].children);
                $("#hair").val(data[0].haircolor);
                $("#eye").val(data[0].eyecolor);
                $("#figure").val(data[0].figure);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateGeneralInfo() {
        this.profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                data[0].familystatus = $("#status").val();
                data[0].privacy.friends = $("#privacy").val();
                data[0].privacy.pictures = $("#privacy").val();

                if ($("#children").val() !== "") {
                    data[0].children = $("#children").val();
                }

                data[0].haircolor = $("#hair").val();
                data[0].eyecolor = $("#eye").val();
                data[0].figure = $("#figure").val();

                this.profileService.updateProfile(data[0])
                    .catch((err) => {
                        console.log(err);
                    });

            })
            .catch((err) => {
                console.log(err);
            });
    }
}
