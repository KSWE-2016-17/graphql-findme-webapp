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
        let self = this;

        return (
            <div id="friendsList">
                <br/>
                {self.state.friends}
            </div>
        );
    }

    componentDidMount() {
        let self = this;

        let friendsListService = new FriendsListService();

        friendsListService.getCurrentProfile()
            .then((data) => {
                return friendsListService.allFriends(data[0]._id);
            })
            .then((data) => {
                let friendsList = data[0].friends;
                let newFriendState = self.state.friends;

                for (let i = 0; i < friendsList.length; i++) {
                    if (friendsList[i].status != 2) {
                        newFriendState.push(
                            <div>
                                <FriendRow
                                    profileID={friendsList[i].id}
                                    status={friendsList[i].status}
                                    friendsListID={data[0]._id}
                                />
                                <hr/>
                            </div>
                        );
                    }
                }

                self.setState({friends: newFriendState});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
