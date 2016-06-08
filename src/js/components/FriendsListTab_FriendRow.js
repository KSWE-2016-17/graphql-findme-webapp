import React from "react";

import Image from "./DefaultProfilImage";

export default class FriendsListTab_FriendRow extends React.Component {

    create() {
        return (
		    <div className="container">
                <div className="row">
				    <div className="col-md-1">
					    <Image />
					</div>
					<div className="col-md-11">
					    <font size="5"> Stefan Schmidt</font><br />
						<a href="#/friends/32" type="button" className="btn btn-link" style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
				            <span className="glyphicon glyphicon-eye-open"></span> Profil ansehen
				        </a>
						<a href="#/mails/new" type="button" className="btn btn-link" style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
				            <span className="glyphicon glyphicon-envelope"></span> Nachricht senden
				        </a>
						<button type="button" className="btn btn-link" style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
				            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
				        </button>
						<button type="button" className="btn btn-link" style={{marginLeft:"25px", paddingLeft:"0px", paddingRight:"0px"}}>
				            <span className="glyphicon glyphicon-trash"></span> Freundschaft beenden
				        </button>
					</div>
				</div>
            </div>
		);
    }

    render() {
		//Buttons zu links geänderts
		//jieqjei
        return (
            <div>{this.create()}</div>
        );
    }
}
