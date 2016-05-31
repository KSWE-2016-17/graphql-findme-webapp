import React from "react";

import NavigationBar from "../components/PostLoginNavigationBar";
import Head from "../components/FriendsListTab_HeadRow";
import Friendslist from "../components/FriendsListTab_FriendsListRow";

export default class FriendsListTab extends React.Component {
	
    createView() {
        return (
            <div>
				<NavigationBar />
				<Head />
				<Friendslist />
            </div>
        );
    }

    render() {
        return (
            <div>{this.createView()}</div>
        );
    }
}
