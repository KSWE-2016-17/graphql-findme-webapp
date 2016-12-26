import React from "react";

import EditProfileDescriptionComponent from "../components/EditProfileDescriptionComponent";
import EditProfileHeaderComponent from "../components/EditProfileHeaderComponent"
import EditProfileInterestsComponent from "../components/EditProfileInterestsComponent"
import NavigationComponent from "../components/NavigationComponent";
import EditProfileGeneralComponent from "../components/EditProfileGeneralComponent";

export default class EditProfilePage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
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
