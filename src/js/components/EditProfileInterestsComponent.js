import React from "react";

import ProfileService from "../services/ProfilService";

export default class EditProfileInterestsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateInterests = this.updateInterests.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Interessen</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest0" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest1" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest2" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest3" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest4" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest5" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest6" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest7" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest8" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="interest9" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-success"
                                                onClick={this.updateInterests}>
                                            <span className="glyphicon glyphicon-ok"></span> Hinzufügen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <a href="#/profile" type="button" className="btn btn-primary btn-lg btn-block">
                            <span className="glyphicon glyphicon-chevron-left"></span> Zurück zum Profil
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let profileService = new ProfileService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let aboutme = data[0].aboutme;
                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts[1].split("+");

                for (let i = 0; i < 10; i++) {
                    let selector = "#interest" + i;

                    if (i < interests.length) {
                        $(selector).val(interests[i + 1]);
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    updateInterests() {
        let profileService = new ProfileService();

        let interestsBuffer = "#";

        for (let i = 0; i < 10; i++) {
            let selector = "#interest" + i;

            if ($(selector).val() !== "") {
                interestsBuffer += "+" + $(selector).val();
            }
        }

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let aboutme = data[0].aboutme;
                let aboutmeParts = aboutme.split("{");

                data[0].aboutme = aboutmeParts[0] + "{" + interestsBuffer;

                profileService.updateProfile(data[0])
                    .then(function (data) {
                        console.log("SUCCESS");
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
