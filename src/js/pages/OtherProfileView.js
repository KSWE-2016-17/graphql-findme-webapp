import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/OtherProfileView_HeadRow";
import Message from "../components/OtherProfileView_RestrictedRow";

import FriendsListService from "../services/FriendsListService";

export default class OtherProfileView extends React.Component {
    render() {
        let self = this;

        return (
            <div>
                <NavigationBar />
                <Head profileID={self.props.params.id}/>
                <hr />
                <Message />
            </div>
        );
    }

    componentDidMount() {
        let self = this;
        let friendsListService = new FriendsListService();

        friendsListService.isFriend(self.props.params.id)
            .then((data) => {
                if (data) {
                    if (data == "yes") {
                        window.location.href = "#/friends/" + self.props.params.id;
                    } else {
                    }
                } else {
                    console.log("no data reveived from FriendsListService.isFriend")
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
