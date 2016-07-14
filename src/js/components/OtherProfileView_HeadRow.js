import React from "react";

import FriendsListService from "../services/FriendsListService";
import ProfilService from "../services/ProfilService";

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
                        <button type="button" className="btn btn-primary" onClick={self.sendFriendRequest}>
                            <span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage<br />senden
                        </button>
                    </div>
                    <div className="col-md-8">
                        <h1>{self.state.friendName}</h1>
                        <p>{self.state.aboutMe}</p>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary" onClick={self.reportUser}>
                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                        </button>
                    </div>
                </div>
            </div>
		);
    }
	
	componentDidMount() {
        let self = this;
        let profilService = new ProfilService();

        profilService.findById(self.props.profileID, {
            success: function (profileData) {
                self.setState({
                    friendName: profileData[0].firstname,
                    aboutMe: profileData[0].aboutme.split("{#")[0]
                });
            },
            error: function(err) {
                console.log(err);
            }
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
				friendsListService.newFriendsListEntry(self.props.profileID, data[0]._id, 0, {
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
