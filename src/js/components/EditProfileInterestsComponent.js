import React from "react";
import _ from "lodash";

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
                                {(() => {
                                    let result = [];

                                    _.times(10, (i) => {
                                        result.push(
                                            <div className="col-md-2" key={Math.random()}>
                                                <div className="form-group">
                                                    <input id={"interest" + i} type="text" className="form-control"
                                                           placeholder="Interesse eingeben"/>
                                                </div>
                                            </div>
                                        );
                                    });

                                    return result;
                                })()}
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
            .then((data) => {
                let aboutme = data[0].aboutme;
                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts .length >= 2 ? aboutmeParts[1].split("+") : [];

                for (let i = 0; i < 10; i++) {
                    let selector = "#interest" + i;

                    if (i < interests.length) {
                        $(selector).val(interests[i + 1]);
                    }
                }
            })
            .catch((err) => {
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
            .then((data) => {
                let aboutme = data[0].aboutme;
                let aboutmeParts = aboutme.split("{");

                data[0].aboutme = aboutmeParts[0] + "{" + interestsBuffer;

                profileService.updateProfile(data[0])
                    .then((data) => {
                        console.log("SUCCESS");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
