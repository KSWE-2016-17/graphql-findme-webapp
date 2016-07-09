import React from "react";
import q from "q";
import _ from "lodash";

import FriendRow from "./FriendsListTab_FriendRow";
import FriendsListService from "../services/FriendsListService";

export default class FriendProfileView_HeadRow extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            friends: []
        };
    }
	
	render() {
        let self = this;
		
        return (
            <div id="friendsList">
				<br />
                {self.state.friends}
            </div>
        );
    }
	
	componentDidMount() {
		let self = this;
        let friendsListService = new FriendsListService();
		
		friendsListService.getCurrentProfile()
			.then(function(data) {
				friendsListService.allFriends(data[0]._id)
					.then(function(data) {
						console.debug("received friends: " + data[0].friends.length);
						
						let friendsList = data[0].friends;
						let newFriendState= self.state.friends;
				
						for (let i = 0; i < friendsList.length; i++) {
							console.debug("friend " + i + "'s profile ID: " + friendsList[i].id);
							if (friendsList[i].status != 2) {
								newFriendState.push(
									<div>
										<FriendRow
											profileID={friendsList[i].id}
											status={friendsList[i].status}
											friendsListID={data[0]._id}
										/>
										<hr />
									</div>
								);
							}
						}
				
						self.setState({friends: newFriendState});
					})
					.catch(function(err) {
						console.log(err);
					});
			})
			.catch(function(err) {
				console.log(err);
			});
    }
}
