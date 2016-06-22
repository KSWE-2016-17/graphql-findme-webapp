import React from "react";
import q from "q";
import _ from "lodash";
import FriendsListService from "../services/FriendsListService";

import DefaultProfilImage from "./DefaultProfilImage";

export default class FriendProfileView_HeadRow extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
			friendName: "klaus"
        };
    }

    reportUser(){
        let friendsListService = new FriendsListService();
        friendsListService.reportUser(profileID)
    }
	
	componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

		friendsListService.getProfile("ca5c2c9fb2d201991f8b6f06e62186d1")
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
		
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <DefaultProfilImage />
                        <br /><br />
                        <a href="#/mails/new" type="button" className="btn btn-primary"><span className="glyphicon glyphicon-envelope"></span> Nachricht senden</a>
                    </div>
			    <div className="col-md-8">			    
                    <h1 style={{float:"left"}}>{self.state.friendName}</h1>
                    <div className="box_friend" style={{color:"#ffffff", backgroundColor:"#009900",
                        borderRadius:"4px", float:"left",  paddingTop:"2px", paddingBottom:"2px", 
                        paddingLeft:"5px", paddingRight:"5px", marginTop:"15px", marginLeft:"10px"}}>befreundet
                    </div>
                    <div style={{clear:"both"}}/>
                    <p>
                    "Reden ist Schweigen - Silber ist Gold."<br />
                    Unbekanntes Genie
                    </p>
                </div>
                    <div className="col-md-2">

                        <button type="button" id="REPORT" className="btn btn-primary" onClick={this.reportUser}>

                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                        </button> 
                    </div>
                </div>
            </div>
        );
    }


}
