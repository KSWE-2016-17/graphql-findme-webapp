import React from "react";

import Image from "./DefaultProfilImage";

export default class FriendsListTab_FriendRow extends React.Component {
	
	// properties set: friend_status
	//                 friend_id
	
	
	addFriend() {
		// not implemented
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	dontAddFriend() {
		// not implemented
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	endFriendship() {
		// not implemented
		window.location.href = "#/friendstab"; // so the view gets updated
	}
	
	reportUser() {
		// not implemented
	}
	
	sendMessage() {
		// not implemented
		window.location.href = "#/mails/new";
	}
	
	showProfile() {
		// not implemented
		window.location.href = "#/friends/32";
	}
	
	getUserName() {
		// not implemented
		return "Klaus Meier";
	}

    create() {
		if (this.props.friend_status === "1") {
			return (
				<div className="container">
					<div className="row">
						<div className="col-md-1">
							<Image />
						</div>
						<div className="col-md-11">
							<font size="5"> {this.getUserName()}</font><br />
							<button type="button" className="btn btn-primary" onClick={this.addFriend} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
								<span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage annehmen
							</button>
							<button type="button" className="btn btn-primary" onClick={this.dontAddFriend} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
								<span className="glyphicon glyphicon-remove"></span> Freundschaftsanfrage ablehnen
							</button>
						</div>
					</div>
				</div>
			);
		}
        else {
			return (
				<div className="container">
					<div className="row">
						<div className="col-md-1">
							<Image />
						</div>
						<div className="col-md-11">
							<font size="5"> {this.getUserName()}</font><br />
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
				</div>
			);
		}
    }

    render() {
        return (
            <div>{this.create()}</div>
        );
    }
}
