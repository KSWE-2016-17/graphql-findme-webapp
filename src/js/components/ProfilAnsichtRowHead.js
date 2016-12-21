import React from "react";

import ProfileImage from "./ProfileImage";

import ProfilService from "../services/ProfilService";

export default class ProfilAnsichtRowHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <ProfileImage/>

                        <a className="btn btn-primary" style={{"marginTop": "2rem"}} role="button">
                            <span className="glyphicon glyphicon-picture"></span> Profilfoto auswählen
                        </a>
                    </div>
                    <div className="col-md-10">
                        {(() => {
                            if (this.state.isAdmin) {
                                return (
                                    <a className="btn btn-danger pull-right" href="#/reports" role="button">
                                        <span className="glyphicon glyphicon-screenshot"></span> Beschwerden
                                    </a>
                                );
                            }
                        })()}
                        <a className="btn btn-primary pull-right" href="#/edit" role="button">
                            <span className="glyphicon glyphicon-pencil"></span> "Über mich" bearbeiten
                        </a>

                        <h1>{this.state.profileName}</h1>
                        <p>{this.state.aboutme}</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let profileService = new ProfilService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                localStorage.setItem("sessionProfileId", data[0]._id);

                let state = {};

                let parts = data[0].aboutme.split("{");

                if (parts.length > 1) {
                    state.aboutme = parts[0];
                } else {
                    state.aboutme = data[0].aboutme;
                }

                state.profileName = data[0].firstname;

                this.setState(state);
            })
            .catch((err) => {
                console.log(err);
            });

        profileService.getAdminRight(localStorage.getItem("sessionUserId"))
            .then((data) => {
                if (data && data[0] && (data[0].role == 2)) {
                    this.setState({
                        isAdmin: true
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
