import React from "react";

import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";
import ProfileinstellungenViewPrivatsphaereComponent from "../components/ProfileinstellungenViewPrivatsphaereComponent";
import ProfileinstellungenViewSonstigesComponent from "../components/ProfileinstellungenViewSonstigesComponent";
import ProfileinstellungenViewProfilLoeschenComponent from "../components/ProfileinstellungenViewProfilLoeschenComponent";

export default class ProfileinstellungenViewPage extends React.Component {

    createProfileinstellungenViewPage() {
        return(  <div>
            <ProfilAnsichtNavigationElement/>
            <div>
                <ProfileinstellungenViewPrivatsphaereComponent/>
                <ProfileinstellungenViewSonstigesComponent/>
                <ProfileinstellungenViewProfilLoeschenComponent/>
            </div>
        </div>);
    }

    render() {
        return (
            <div>{this.createProfileinstellungenViewPage()}</div>
        );
    }
}