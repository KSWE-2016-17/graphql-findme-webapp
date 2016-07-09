import React from "react";
import q from "q";
import _ from "lodash";

import ReportRow from "./ReportsView_ReportRow";
//import FriendsListService from "../services/FriendsListService";

export default class ReportsView_ReportsListRow extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            reports: []
        };
    }
	
	render() {
        let self = this;
		
        return (
            <div id="reportsList">
				<br />
                {self.state.reports}
            </div>
        );
    }
	
	componentDidMount() {
		let self = this;
		//let friendsListService = new FriendsListService();
		let newReportsList = self.state.reports;
		
		newReportsList.push(
			<div>
				<ReportRow
					profileID={"76524f21ad466069d58df96b1c02c0ec"}
				/>
				<hr />
			</div>
		);
		
		newReportsList.push(
			<div>
				<ReportRow
					profileID={"76524f21ad466069d58df96b1c02ceca"}
				/>
				<hr />
			</div>
		);
		
		self.setState({reports: newReportsList});
		
		
		
		
		
		
		
		
		
		
		
		
		/*let self = this;
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
			});*/
    }
}
