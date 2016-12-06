import React from "react";
import q from "q";
import _ from "lodash";
import FriendsListService from "../services/FriendsListService";

//import DefaultProfilImage from "./DefaultProfilImage";

import DefaultProfilImage from "./FriendProfileImage";

export default class FriendProfileView_HeadRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friendName: "",
            aboutMe: "",
        };

        this.reportUser = this.reportUser.bind(this);
    }

    render() {
        let self = this;

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <DefaultProfilImage profileID={self.props.profileID}/>
                        <br/><br/>
                        <a href="#/mails/new" type="button" className="btn btn-primary"><span
                            className="glyphicon glyphicon-envelope"></span> Nachricht senden</a>
                    </div>
                    <div className="col-md-8">
                        <h1 style={{float: "left"}}>{self.state.friendName}</h1>
                        <div className="box_friend" style={{
                            color: "#ffffff", backgroundColor: "#009900",
                            borderRadius: "4px", float: "left", paddingTop: "2px", paddingBottom: "2px",
                            paddingLeft: "5px", paddingRight: "5px", marginTop: "15px", marginLeft: "10px"
                        }}>befreundet
                        </div>
                        <div style={{clear: "both"}}/>
                        <p id="aboutme">{self.state.aboutMe}</p>
                    </div>
                    <div className="col-md-2">
                        <button type="button" id="REPORT" className="btn btn-primary" onClick={self.reportUser}>

                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

        console.log("profile view id: " + self.props.profileID);
        friendsListService.getProfile(self.props.profileID)
            .then(function (profileData) {
                friendsListService.getUser(profileData[0].user_id)
                    .then(function (userData) {
                        self.setState({friendName: userData[0].login});
                        self.setState({aboutMe: profileData[0].aboutme});

                        //friend profile fix
                        let parts = profileData[0].aboutme.split("{");
                        if (parts.length > 1) {
                            $("#aboutme").text(parts[0]);
                        } else {
                            $("#aboutme").text(profileData[0].aboutme);
                        }

                        console.log("friend profile data acquired");

                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    reportUser() {
        let self = this;
        let friendsListService = new FriendsListService();

        friendsListService.reportUser(self.props.profileID);
    }
}
