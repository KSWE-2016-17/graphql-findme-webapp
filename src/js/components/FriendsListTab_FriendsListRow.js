import React from "react";

import FriendRow from "./FriendsListTab_FriendRow";

import FriendsListService from "../services/FriendsListService";

export default class FriendProfileView_HeadRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        };
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

        let friendsListService = new FriendsListService();

        friendsListService.getCurrentProfile()
            .then((data) => {
                currentProfile = data;

                return friendsListService.getFriendsOfProfile(currentProfile._id);
            })
            .then((data) => {
                data.forEach((friend) => {
                    friends.push(
                        <div key={Math.random()}>
                            <FriendRow
                                profileId={friend._id}
                                isFriend={true}
                                isOwnRequest={false}
                            />
                        </div>
                    );
                });

                return friendsListService.getFriendRequestsOfProfile(currentProfile._id);
            })
            .then((data) => {
                data.forEach((friendRequest) => {
                    let isOwnRequest = currentProfile._id === friendRequest.from_id;
                    let targetId = isOwnRequest ? friendRequest.to_id : friendRequest.from_id;

                    friends.push(
                        <div id={Math.random()}>
                            <FriendRow
                                profileId={targetId}
                                isFriend={false}
                                isOwnRequest={isOwnRequest}
                            />
                        </div>
                    );
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
