import React from "react";

import FriendRow from "./FriendsListTab_FriendRow";

export default class FriendProfileView_HeadRow extends React.Component {

    create() {
        return (
		    <div className="container">
			    <br />
                <div className="row">
				    <FriendRow />
				</div>
				<hr />
				<div className="row">
				    <FriendRow />
				</div>
				<hr />
				<div className="row">
				    <FriendRow />
				</div>
				<hr />
				<div className="row">
				    <FriendRow />
				</div>
				<hr />
            </div>
		);
    }

    render() {
        return (
            <div>{this.create()}</div>
        );
    }
}
