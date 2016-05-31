import React from "react";

//import LoginHeader from "../components/LoginHeader";

import EditProfileDescriptionComponent from "../components/EditProfileDescriptionComponent";
import EditProfileHeaderComponent from "../components/EditProfileHeaderComponent"
import EditProfileInterestsComponent from "../components/EditProfileInterestsComponent"
import EditProfilePictureComponent from "../components/EditProfilePictureComponent"
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class EditProfilePage extends React.Component {
    createContent() {
        return <div className="container">
            <ProfilAnsichtNavigationElement/>
            <EditProfileHeaderComponent/>
            <EditProfileDescriptionComponent/>
            <hr/>
            <EditProfilePictureComponent/>
            <hr/>
            <EditProfileInterestsComponent/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
