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
                            <span className="glyphicon glyphicon-edit"></span> "Über mich" bearbeiten
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

        let state = {};

        profileService.findById(this.props.profileId)
            .then((data) => {
                let parts = data.aboutme.split("{");

                if (parts.length > 1) {
                    state.aboutme = parts[0];
                } else {
                    state.aboutme = data.aboutme;
                }

                state.profileName = data.firstname;

                return profileService.getAdminRight(data.user_id);
            })
            .then((data) => {
                if (data && data[0] && (data[0].role == 2)) {
                    state.isAdmin = true;
                }

                this.setState(state);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
