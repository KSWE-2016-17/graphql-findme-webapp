import React from "react";

import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";
import ProfilAnsichtRowHead from "../components/ProfilAnsichtRowHead";
import ProfilAnsichtRowBilder from "../components/ProfilAnsichtRowBilder";
import ProfilAnsichtRowInteressen from "../components/ProfilAnsichtRowInteressen";

export default class ProfilViewComponent extends React.Component {
    constructor(props) {
        super(props);

        this.profileId = localStorage.getItem("sessionProfileId");

        if (this.props.params.id) {
            this.profileId = this.props.params.id;
        }
    }

    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <ProfilAnsichtRowHead profileId={this.profileId}/>
                <hr/>
                <ProfilAnsichtRowBilder profileId={this.profileId}/>
                <hr/>
                <ProfilAnsichtRowInteressen profileId={this.profileId}/>
            </div>
        );
    }
}
