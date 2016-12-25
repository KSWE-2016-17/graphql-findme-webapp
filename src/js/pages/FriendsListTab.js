import React from "react";

import Navigation from "../components/Navigation";
import FriendListItemComponent from "../components/FriendListItemComponent";

import FriendsListService from "../services/FriendsListService";

export default class FriendsListTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friendsItems: []
        };

        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div>
                <Navigation/>

                <h1>Deine Freunde</h1>

                <div>
                    {this.state.friendsItems}
                </div>
            </div>
        );
    }

    componentDidMount() {
        let friendsItems = [];
        let currentProfile;

        this.friendsListService.getCurrentProfile()
            .then((data) => {
                currentProfile = data;

                return this.friendsListService.getFriendsOfProfile(currentProfile._id);
            })
            .then((data) => {
                data.forEach((friend) => {
                    if (friend) {
                        friendsItems.push(
                            <FriendListItemComponent
                                profileId={friend._id}
                                isFriend={true}
                                isOwnRequest={false}
                                key={Math.random()}
                            />
                        );
                    }
                });

                return this.friendsListService.getFriendRequestsOfProfile(currentProfile._id);
            })
            .then((data) => {
                data.forEach((friendRequest) => {
                    if (friendRequest) {
                        let isOwnRequest = currentProfile._id === friendRequest.from_id;
                        let targetId = isOwnRequest ? friendRequest.to_id : friendRequest.from_id;

                        friendsItems.push(
                            <FriendListItemComponent
                                profileId={targetId}
                                isFriend={false}
                                isOwnRequest={isOwnRequest}
                                key={Math.random()}
                            />
                        );
                    }
                });
            })
            .then((data) => {
                this.setState({
                    friendsItems
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
