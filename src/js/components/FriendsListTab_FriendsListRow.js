import React from "react";

import FriendRow from "./FriendsListTab_FriendRow";

import FriendsListService from "../services/FriendsListService";

export default class FriendsListTab_FriendsListRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        };

        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div id="friendsList">
                {this.state.friends}
            </div>
        );
    }

    componentDidMount() {
        let friends = [];
        let currentProfile;

        this.friendsListService.getCurrentProfile()
            .then((data) => {
                currentProfile = data;

                return this.friendsListService.getFriendsOfProfile(currentProfile._id);
            })
            .then((data) => {
                data.forEach((friend) => {
                    if (friend) {
                        friends.push(
                            <div key={Math.random()}>
                                <FriendRow
                                    profileId={friend._id}
                                    isFriend={true}
                                    isOwnRequest={false}
                                />
                            </div>
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

                        friends.push(
                            <div key={Math.random()}>
                                <FriendRow
                                    profileId={targetId}
                                    isFriend={false}
                                    isOwnRequest={isOwnRequest}
                                />
                            </div>
                        );
                    }
                });
            })
            .then((data) => {
                this.setState({
                    friends: friends
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
