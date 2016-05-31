import React from "react";

//import LoginHeader from "../components/LoginHeader";

import ArchiveHeaderComponent from "../components/ArchiveHeaderComponent";
import ArchiveMailComponent from "../components/ArchiveMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class ArchiveViewPage extends React.Component {
    createContent() {
        return <div className="container">
            <ProfilAnsichtNavigationElement/>
            <ArchiveHeaderComponent/>
            <ArchiveMailComponent/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
