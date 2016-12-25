import React from "react";

import Navigation from "../components/Navigation";
import ProfileinstellungenViewPrivatsphaereComponent from "../components/ProfileinstellungenViewPrivatsphaereComponent";
import ProfileinstellungenViewSonstigesComponent from "../components/ProfileinstellungenViewSonstigesComponent";
import ProfileinstellungenViewProfilLoeschenComponent from "../components/ProfileinstellungenViewProfilLoeschenComponent";

export default class SettingsPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div>
                    <ProfileinstellungenViewPrivatsphaereComponent/>
                    <ProfileinstellungenViewSonstigesComponent/>
                    <ProfileinstellungenViewProfilLoeschenComponent/>
                </div>
            </div>
        );
    }
}
