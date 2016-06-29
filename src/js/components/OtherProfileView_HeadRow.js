import React from "react";

import FriendsListService from "../services/FriendsListService";

import DefaultProfilImage from "./DefaultProfilImage";

export default class FriendProfileView_HeadRow extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
			friendName: "",
			aboutMe: "",
		};
		
		this.reportUser = this.reportUser.bind(this);
		this.sendFriendRequest = this.sendFriendRequest.bind(this);
    }

    render() {
		let self = this;
		
        return (
		    <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <DefaultProfilImage />
                        <br /><br />
                        <button type="button" className="btn btn-primary" onClick={self.sendFriendRequest} >
						    <span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage<br />senden
						</button>
                    </div>
			    <div className="col-md-8">			    
                    <h1>{self.state.friendName}</h1>
					<p>{self.state.aboutMe}</p>
                </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary" onClick={self.reportUser} >
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
            .then(function(profileData) {
                friendsListService.getUser(profileData[0].user_id)
					.then(function(userData) {
						self.setState({friendName: userData[0].login});
						self.setState({aboutMe: profileData[0].aboutme});
					})
					.catch(function(err) {
						console.log(err);
					});
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    reportUser(){
		let self = this;
        let friendsListService = new FriendsListService();
		
        friendsListService.reportUser(self.props.profileID);
    }
	
	sendFriendRequest() {
		let self = this;
		let friendsListService = new FriendsListService();
		
		friendsListService.getCurrentProfile()
			.then(function(data) {
				friendsListService.createFriendRequest(data[0]._id, self.props.profileID, {
					success: function() {
						window.location.reload();
					}
				});
			})
			.catch(function(err) {
				console.log(err);
			});
	}
}
