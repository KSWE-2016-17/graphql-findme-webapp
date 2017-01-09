import React from "react";

import ProfileImageComponent from "./ProfileImageComponent";

import FriendsListService from "../services/FriendsListService";

export default class FriendListItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.acceptFriendRequest = this.acceptFriendRequest.bind(this);
        this.rejectFriendRequest = this.rejectFriendRequest.bind(this);
        this.cancelFriendRequest = this.cancelFriendRequest.bind(this);
        this.dismissFriendship = this.dismissFriendship.bind(this);
        this.reportUser = this.reportUser.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.openProfile = this.openProfile.bind(this);

        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                    <ProfileImageComponent/>
                </div>

                <div className="col-md-11">
                    <h3>{this.state.friendName}</h3>

                    <button type="button" className="btn btn-link" onClick={this.openProfile}>
                        <span className="glyphicon glyphicon-eye-open"></span> Profil ansehen
                    </button>
                    <button type="button" className="btn btn-link" onClick={this.sendMessage}>
                        <span className="glyphicon glyphicon-envelope"></span> Nachricht senden
                    </button>
                    <button type="button" className="btn btn-link" onClick={this.reportUser}>
                        <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                    </button>
                    {(() => {
                        if (this.props.isFriend) {
                            return (
                                <button type="button" className="btn btn-link" onClick={this.dismissFriendship}>
                                    <span className="glyphicon glyphicon-trash"></span> Freundschaft beenden
                                </button>
                            );
                        }
                    })()}
                    {(() => {
                        if (!this.props.isFriend && !this.props.isOwnRequest) {
                            return (
                                <button type="button" className="btn btn-link" onClick={this.acceptFriendRequest}>
                                    <span className="glyphicon glyphicon-plus"></span> Anfrage akzeptieren
                                </button>
                            );
                        }
                    })()}
                    {(() => {
                        if (!this.props.isFriend && !this.props.isOwnRequest) {
                            return (
                                <button type="button" className="btn btn-link" onClick={this.rejectFriendRequest}>
                                    <span className="glyphicon glyphicon-remove"></span> Anfrage ablehnen
                                </button>
                            );
                        }
                    })()}
                    {(() => {
                        if (!this.props.isFriend && this.props.isOwnRequest) {
                            return (
                                <button type="button" className="btn btn-link" onClick={this.cancelFriendRequest}>
                                    <span className="glyphicon glyphicon-remove"></span> Anfrage zurückziehen
                                </button>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.friendsListService.getProfile(this.props.profileId)
            .then((data) => {
                return this.friendsListService.getUser(data.user_id);
            })
            .then((data) => {
                this.setState({
                    friendName: data.login
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    acceptFriendRequest() {
        this.friendsListService.acceptFriendRequest(this.props.profileId)
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    rejectFriendRequest() {
        this.friendsListService.rejectFriendRequest(this.props.profileId)
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    cancelFriendRequest() {
        this.friendsListService.cancelFriendRequest(this.props.profileId)
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    dismissFriendship() {
        this.friendsListService.dismissFriendship(this.props.profileId)
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    reportUser() {
        this.friendsListService.reportUser(this.props.profileId)
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    sendMessage() {
        window.location.href = "#/mails/new";
    }

    openProfile() {
        window.location.href = "#/profiles/" + this.props.profileId;
    }
}
