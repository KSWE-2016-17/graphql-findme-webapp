import React from "react";

import FriendRow from "./FriendsListTab_FriendRow";
import FriendsListService from "../services/FriendsListService";

export default class FriendProfileView_HeadRow extends React.Component {

	loadFriendsList(callback) {
        let friendsListService = new FriendsListService();
        friendsListService.allFriends({
            success: function(data) {
				callback.success(data);
            },
            error: function(err) {
				callback.error(data);
                console.log(err);
            }
        });
    }

    create() {
		var friends = [{id:"xxx", status:"0"}, {id:"xxy", status:"1"}, {id:"xxz", status:"2"}]; // this data is should come from database
		
		this.loadFriendsList({
			success: function(data) {
				friends = data;
			}
			/*error: function(err) {
				return (
					<div className="container">
					</div>
				);
            }*/
		});
		
		return (
		    <div className="container">
			    <br />
				
				{friends.map(function(obj, index){
					if (obj.status == "2") {
						return;
					}
					return (
						<div className="row">
							<FriendRow friend_id={obj.id} friend_status={obj.status}/>
							<hr />
						</div>
					);
                })}
				
            </div>
		);
    }

    render() {
        return (
            <div>{this.create()}</div>
        );
    }
}
