import React from "react";

import ProfileService from "../services/ProfilService";

export default class EditProfileDescriptionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateAboutmeDescription = this.updateAboutmeDescription.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Profilbeschreibung</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="aboutme">Über mich</label>
                                <input id="aboutme" type="text" name="aboutme" className="form-control"
                                       placeholder="Breit gebaut, braun gebrannt, 100 Kilo Hantelbank"/>
                            </div>

                            <div className="form-group">
                                <button type="button" className="btn btn-primary"
                                        onClick={this.updateAboutmeDescription}>
                                    Speichern
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let profileService = new ProfileService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                $("#aboutme").val(data[0].aboutme.split("{")[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateAboutmeDescription() {
        let profileService = new ProfileService();

        let aboutmeDescription = $("#aboutme").val();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                let aboutme = data[0].aboutme;
                let aboutmeParts = aboutme.split("{");

                data[0].aboutme = aboutmeDescription + "{" + aboutmeParts[1];

                profileService.updateProfile(data[0])
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
