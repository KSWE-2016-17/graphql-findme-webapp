import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

import FriendsListService from "../services/FriendsListService";

export default class FriendsListTab_FriendRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.addFriend = this.addFriend.bind(this);
        this.dontAddFriend = this.dontAddFriend.bind(this);
        this.endFriendship = this.endFriendship.bind(this);
        this.reportUser = this.reportUser.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }

    render() {
        let self = this;

        if ((self.props.status === 0) || (self.props.status === "0")) { // friend request
            return (
                <div className="row">
                    <div className="col-md-1">
                        <DefaultProfilImage/>
                    </div>
                    <div className="col-md-11">
                        <font size="5"> {self.state.friendName} </font><br/>
                        <button type="button" className="btn btn-link" onClick={self.addFriend}
                                style={{marginLeft: "25px", paddingLeft: "10px", paddingRight: "10px"}}>
                            <span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage annehmen
                        </button>
                        <button type="button" className="btn btn-link" onClick={self.dontAddFriend}
                                style={{marginLeft: "25px", paddingLeft: "10px", paddingRight: "10px"}}>
                            <span className="glyphicon glyphicon-remove"></span> Freundschaftsanfrage ablehnen
                        </button>
                    </div>
                </div>
            );
        } else if ((self.props.status === 1) || (self.props.status === "1")) { // is friend
            return (
                <div className="row">
                    <div className="col-md-1">
                        <DefaultProfilImage/>
                    </div>
                    <div className="col-md-11">
                        <font size="5"> {self.state.friendName} </font><br/>
                        <button type="button" className="btn btn-link" onClick={self.showProfile}
                                style={{marginLeft: "25px", paddingLeft: "0px", paddingRight: "0px"}}>
                            <span className="glyphicon glyphicon-eye-open"></span> Profil ansehen
                        </button>
                        <button type="button" className="btn btn-link" onClick={self.sendMessage}
                                style={{marginLeft: "25px", paddingLeft: "0px", paddingRight: "0px"}}>
                            <span className="glyphicon glyphicon-envelope"></span> Nachricht senden
                        </button>
                        <button type="button" className="btn btn-link" onClick={self.reportUser}
                                style={{marginLeft: "25px", paddingLeft: "0px", paddingRight: "0px"}}>
                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                        </button>
                        <button type="button" className="btn btn-link" onClick={self.endFriendship}
                                style={{marginLeft: "25px", paddingLeft: "0px", paddingRight: "0px"}}>
                            <span className="glyphicon glyphicon-trash"></span> Freundschaft beenden
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    empty
                </div>
            )
        }
    }

    componentDidMount() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.getProfile(self.props.profileID)
            .then((data) => {
                if (data[0]) {
                    friendsListService.getUser(data[0].user_id)
                        .then((data) => {
                            self.setState({friendName: data[0].login});
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
                else {
                    console.log("Warning: User with profile id '" + self.props.profileID + "'" + " not found!");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addFriend() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.handleFriendRequest(self.props.friendsListID, self.props.profileID, true, {
            success: function () {
                window.location.reload();
            }
        });
    }

    dontAddFriend() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.handleFriendRequest(self.props.friendsListID, self.props.profileID, false, {
            success: function () {
                window.location.reload();
            }
        });
    }

    endFriendship() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.endFrienship(self.props.friendsListID, self.props.profileID, {
            success: function () {
                window.location.reload();
            }
        });
    }

    reportUser() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.reportUser(self.props.profileID);
    }

    sendMessage() {
        let self = this;

        window.location.href = "#/mails/new";
    }

    showProfile() {
        let self = this;

        window.location.href = "#/friends/" + self.props.profileID;
    }
}
