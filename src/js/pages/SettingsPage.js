import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import ProfileinstellungenViewPrivatsphaereComponent from "../components/ProfileinstellungenViewPrivatsphaereComponent";
import ProfileinstellungenViewSonstigesComponent from "../components/ProfileinstellungenViewSonstigesComponent";
import ProfileinstellungenViewProfilLoeschenComponent from "../components/ProfileinstellungenViewProfilLoeschenComponent";

export default class SettingsPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <div>
                    <ProfileinstellungenViewPrivatsphaereComponent/>
                    <ProfileinstellungenViewSonstigesComponent/>
                    <ProfileinstellungenViewProfilLoeschenComponent/>
                </div>
            </div>
        );
    }
}
