import React from "react";

import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";
import ProfilAnsichtRowHead from "../components/ProfilAnsichtRowHead";
import ProfilAnsichtRowBilder from "../components/ProfilAnsichtRowBilder";
import ProfilAnsichtRowInteressen from "../components/ProfilAnsichtRowInteressen";
import ProfilAnsichtRowRestricted from "../components/ProfilAnsichtRowRestricted";

import FriendsListService from "../services/FriendsListService";

export default class ProfilViewComponent extends React.Component {
    constructor(props) {
        super(props);

        this.profileId = this.props.params.id;

        this.friendsListService = new FriendsListService();
    }

    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <ProfilAnsichtRowHead profileId={this.profileId}/>
                <hr/>
                {(() => {
                    if (this.friendsListService.isFriend(this.profileId)) {
                        return (
                            <div>
                                <ProfilAnsichtRowBilder profileId={this.profileId}/>
                                <hr/>
                                <ProfilAnsichtRowInteressen profileId={this.profileId}/>
                            </div>
                        );
                    } else {
                        return (
                            <ProfilAnsichtRowRestricted/>
                        );
                    }
                })()}
            </div>
        );
    }
}
