import React from "react";
import q from "q";
import _ from "lodash";

import Image from "./DefaultProfilImage";
import FriendsListService from "../services/FriendsListService";

export default class FriendsListTab_FriendRow extends React.Component {
	
	constructor(props) {
        super(props);

        this.state = {
        };
    }
	
	addFriend() {
		let friendsListService = new FriendsListService();
		// this.props.friendsListID, this.props.profileID
		friendsListService.handleFriendRequest("48cf296b53896d16da217994e004e5a3", "48cf296b53896d16da217994e0037163", true);
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	dontAddFriend() {
		let friendsListService = new FriendsListService();
		// this.props.friendsListID, this.props.profileID
		friendsListService.handleFriendRequest("48cf296b53896d16da217994e004e5a3", "48cf296b53896d16da217994e0037163", false);
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	endFriendship() {
		let friendsListService = new FriendsListService();
		// this.props.friendsListID, this.props.profileID
		friendsListService.endFrienship("48cf296b53896d16da217994e004e5a3", "48cf296b53896d16da217994e0037163");
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	reportUser() {
		let friendsListService = new FriendsListService();
        friendsListService.reportUser(profileID)
	}
	
	sendMessage() {
		window.location.href = "#/mails/new";
	}
	
	showProfile() {
		window.location.href = "#/friends/3"; // + this.props.profileID;
	}
	
	componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

		friendsListService.getProfile(self.props.profileID)
            .then(function(data) {
                friendsListService.getUser(data[0].user_id)
					.then(function(data) {
						self.setState({friendName: data[0].login});
					})
					.catch(function(err) {
						console.log(err);
					});
            })
            .catch(function(err) {
                console.log(err);
            });
    }
	
	render() {
        let self = this;

		if (this.props.status === 0) { // friend request
			return (
				<div className="row">
					<div className="col-md-1">
						<Image />
					</div>
					<div className="col-md-11">
						<font size="5"> {self.state.friendName} </font><br />
						<button type="button" className="btn btn-link" onClick={this.addFriend} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
							<span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage annehmen
						</button>
						<button type="button" className="btn btn-link" onClick={this.dontAddFriend} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
							<span className="glyphicon glyphicon-remove"></span> Freundschaftsanfrage ablehnen
						</button>
					</div>
				</div>
			);
		}
        else {
			return (
				<div className="row">
					<div className="col-md-1">
						<Image />
					</div>
					<div className="col-md-11">
						<font size="5"> {self.state.friendName} </font><br />
						<button type="button" className="btn btn-link" onClick={this.showProfile} style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
							<span className="glyphicon glyphicon-eye-open"></span> Profil ansehen
						</button>
						<button type="button" className="btn btn-link" onClick={this.sendMessage} style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
							<span className="glyphicon glyphicon-envelope"></span> Nachricht senden
						</button>
						<button type="button" className="btn btn-link" onClick={this.reportUser} style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
							<span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
						</button>
						<button type="button" className="btn btn-link" onClick={this.endFriendship} style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
							<span className="glyphicon glyphicon-trash"></span> Freundschaft beenden
						</button>
					</div>
				</div>
			);
		}
    }
}
