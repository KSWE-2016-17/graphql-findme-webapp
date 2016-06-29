import React from "react";
import q from "q";
import _ from "lodash";

import FriendsListService from "../services/FriendsListService";

export default class FriendsListTab_FriendRow extends React.Component {
	
	constructor(props) {
        super(props);
		
		this.state = {};
		
		this.ignoreCase = this.ignoreCase.bind(this);
		this.deleteProfile = this.deleteProfile.bind(this);
    }
	
	render() {
        let self = this;

		return (
			<div className="row">
				<div className="col-md-12">
					<font size="5"> {self.state.profileName} </font><br />
					<button type="button" className="btn btn-link" onClick={self.ignoreCase} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
						<span className="glyphicon glyphicon-sunglasses"></span> Fall ignorieren
					</button>
					<button type="button" className="btn btn-link" onClick={self.deleteProfile} style={{marginLeft:"25px", paddingLeft:"10px", paddingRight:"10px"}}>
						<span className="glyphicon glyphicon-remove"></span> Profil löschen
					</button>
				</div>
			</div>
		);
    }
	
	componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

		friendsListService.getProfile(self.props.profileID)
            .then(function(data) {
				if (data[0]) {
					friendsListService.getUser(data[0].user_id)
						.then(function(data) {
							self.setState({profileName: data[0].login});
						})
						.catch(function(err) {
							console.log(err);
						});
				}
				else {
					console.log("Warning: User with profile id '" + self.props.profileID + "'" + " not found!");
				}
            })
            .catch(function(err) {
                console.log(err);
            });
    }
	
	ignoreCase() {
		let self = this;
		
		
		
		
		/*let self = this;
		let friendsListService = new FriendsListService();
		
		friendsListService.handleFriendRequest(self.props.friendsListID, self.props.profileID, true, {
			success: function() {
				window.location.reload();
			}
        });*/
	}
	
	deleteProfile() {
		let self = this;
		
		
		
		
		/*let self = this;
		let friendsListService = new FriendsListService();
		
		friendsListService.handleFriendRequest(self.props.friendsListID, self.props.profileID, false, {
			success: function() {
				window.location.reload();
			}
        });*/
	}
	
	/*endFriendship() {
		let self = this;
		let friendsListService = new FriendsListService();
		
		friendsListService.endFrienship(self.props.friendsListID, self.props.profileID, {
			success: function() {
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
	}*/
}
