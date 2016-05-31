import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/FriendProfileView_HeadRow";
import Pictures from "../components/FriendProfileView_PictureRow";
import Interests from "../components/ProfilAnsichtRowInteressen";


export default class FriendProfileView extends React.Component {

    createView() {
        return (
            <div>
                <NavigationBar />
                <Head />
                <hr />
                <Pictures />
                <hr />
                <Interests />
            </div>
        );
    }

    render() {
        return (
            <div>{this.createView()}</div>
        );
    }
}
