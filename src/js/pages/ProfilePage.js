import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import ProfilAnsichtRowHead from "../components/ProfilAnsichtRowHead";
import ProfilAnsichtRowBilder from "../components/ProfilAnsichtRowBilder";
import ProfilAnsichtRowInteressen from "../components/ProfilAnsichtRowInteressen";
import ProfilAnsichtRowRestricted from "../components/ProfilAnsichtRowRestricted";

import FriendsListService from "../services/FriendsListService";

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileContentElements: []
        };

        this.profileId = this.props.params.id;

        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>
                <ProfilAnsichtRowHead profileId={this.profileId}/>
                <hr/>
                {this.state.profileContentElements}
            </div>
        );
    }

    componentDidMount() {
        let profileContentElements = this.state.profileContentElements;

        if (this.profileId === localStorage.getItem("sessionProfileId")) {
            profileContentElements.push(<ProfilAnsichtRowBilder key={Math.random()} profileId={this.profileId}/>);
            profileContentElements.push(<hr key={Math.random()}/>);
            profileContentElements.push(<ProfilAnsichtRowInteressen key={Math.random()} profileId={this.profileId}/>);
        } else {
            this.friendsListService.isFriend(this.profileId)
                .then((data) => {
                    if (data === true) {
                        profileContentElements.push(<ProfilAnsichtRowBilder key={Math.random()}
                                                                            profileId={this.profileId}/>);
                        profileContentElements.push(<hr key={Math.random()}/>);
                        profileContentElements.push(<ProfilAnsichtRowInteressen key={Math.random()}
                                                                                profileId={this.profileId}/>);
                    } else {
                        profileContentElements.push(<ProfilAnsichtRowRestricted key={Math.random()}/>);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .done();
        }

        this.setState({
            profileContentElements
        });
    }
}
