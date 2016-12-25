import React from "react";

import Navigation from "../components/Navigation";
import Head from "../components/FriendsListTab_HeadRow";
import Friendslist from "../components/FriendsListTab_FriendsListRow";

export default class FriendsListTab extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Head/>
                <Friendslist/>
            </div>
        );
    }
}
