import React from "react";

//import LoginHeader from "../components/LoginHeader";

import NewMailHeaderComponent from "../components/NewMailHeaderComponent";
import NewMailComponent from "../components/NewMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class ArchiveViewPage extends React.Component {
    createContent() {
        return <div className="container">
            <ProfilAnsichtNavigationElement/>
            <NewMailHeaderComponent/>
            <NewMailComponent/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
