import React from "react";

import ArchiveHeaderComponent from "../components/ArchiveHeaderComponent";
import ArchiveMailComponent from "../components/ArchiveMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class ArchiveViewPage extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <ArchiveHeaderComponent/>
                <ArchiveMailComponent/>
            </div>
        );
    }
}
