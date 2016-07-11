import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/FriendsListTab_HeadRow";
import Friendslist from "../components/FriendsListTab_FriendsListRow";

export default class FriendsListTab extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Head />
                <Friendslist />
            </div>

        );
    }
}
