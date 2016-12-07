import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/FriendProfileView_HeadRow";
import Pictures from "../components/FriendProfileView_PictureRow";

import Interests from "../components/FriendProfileInterests";

export default class FriendProfileView extends React.Component {
    render() {
        let self = this;

        return (
            <div>
                <NavigationBar/>
                <Head profileID={self.props.params.id}/>
                <hr/>
                <Pictures/>
                <hr/>
                <Interests profileID={self.props.params.id}/>
            </div>
        );
    }
}
