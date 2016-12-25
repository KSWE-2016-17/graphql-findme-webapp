import React from "react";

import EditProfileDescriptionComponent from "../components/EditProfileDescriptionComponent";
import EditProfileHeaderComponent from "../components/EditProfileHeaderComponent"
import EditProfileInterestsComponent from "../components/EditProfileInterestsComponent"
import Navigation from "../components/Navigation";
import EditProfileGeneralComponent from "../components/EditProfileGeneralComponent";

export default class EditProfilePage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <EditProfileHeaderComponent/>
                <hr/>
                <EditProfileDescriptionComponent/>
                <hr/>
                <EditProfileGeneralComponent/>
                <hr/>
                <EditProfileInterestsComponent/>
            </div>
        );
    }
}
