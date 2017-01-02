import q from "q";
import React from "react";

import ProfileImageComponent from "./ProfileImageComponent";

import ProfilService from "../services/ProfilService";
import FriendsListService from "../services/FriendsListService";

export default class ProfilAnsichtRowHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOwnProfile: this.props.profileId === localStorage.getItem("sessionProfileId"),
            isAdmin: false,
            isFriend: false,
            profileName: "",
            aboutme: ""
        };

        this.reportUser = this.reportUser.bind(this);
        this.sendFriendRequest = this.sendFriendRequest.bind(this);

        this.profileService = new ProfilService();
        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <ProfileImageComponent/>

                        <div style={{"marginTop": "2rem"}}>
                            {(() => {
                                let elements = [];

                                if (this.state.isOwnProfile === true) {
                                    elements.push(
                                        <button key={Math.random()} type="button" className="btn btn-primary">
                                            <span className="glyphicon glyphicon-picture"></span> Profilfoto auswählen
                                        </button>
                                    );
                                } else {
                                    if (!this.state.isFriend) {
                                        elements.push(
                                            <button key={Math.random()} type="button" className="btn btn-primary"
                                                    onClick={this.sendFriendRequest}>
                                                <span className="glyphicon glyphicon-plus"></span> Anfrage senden
                                            </button>
                                        );
                                    }

                                    elements.push(
                                        <a key={Math.random()} className="btn btn-primary" href="#/mails/new"
                                           type="button">
                                            <span className="glyphicon glyphicon-envelope"></span> Nachricht senden
                                        </a>
                                    );
                                }

                                return elements;
                            })()}
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="pull-right">
                            {(() => {
                                if (this.state.isAdmin === true) {
                                    return (
                                        <a className="btn btn-primary" href="#/reports" role="button">
                                            <span className="glyphicon glyphicon-screenshot"></span> Beschwerden
                                        </a>
                                    );
                                }
                            })()}
                            {(() => {
                                if (this.state.isOwnProfile === true) {
                                    return (
                                        <a className="btn btn-primary" href="#/edit" role="button">
                                            <span className="glyphicon glyphicon-edit"></span> Profil bearbeiten
                                        </a>
                                    );
                                } else {
                                    return (
                                        <button type="button" className="btn btn-danger" onClick={this.reportUser}>
                                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                                        </button>
                                    );
                                }
                            })()}
                        </div>

                        <p>
                            <span className="h1">{this.state.profileName}</span>&nbsp;

                            {(() => {
                                if (this.state.isFriend === true) {
                                    return (
                                        <span className="text-success"><strong>befreundet</strong></span>
                                    );
                                }
                            })()}
                        </p>
                        <p>{this.state.aboutme}</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let state = {};

        q.all([
            this.profileService.findById(this.props.profileId)
                .then((data) => {
                    let parts = data.aboutme.split("{");

                    if (parts.length > 1) {
                        state.aboutme = parts[0];
                    } else {
                        state.aboutme = data.aboutme;
                    }

                    state.profileName = data.firstname;

                    return this.profileService.getAdminRight(data.user_id);
                })
                .then((data) => {
                    state.isAdmin = data && data[0] && data[0].role == 2;
                }),
            this.friendsListService.isFriend(this.props.profileId)
                .then((data) => {
                    state.isFriend = data === true;
                })
        ])
            .then((data) => {
                this.setState(state);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    reportUser() {
        this.friendsListService.reportUser(this.props.profileId);
    }

    sendFriendRequest() {
        this.friendsListService.getCurrentProfile()
            .then((data) => {
                if (data) {
                    return friendsListService.createFriendRequest(this.props.profileId);
                }
            })
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }
}
