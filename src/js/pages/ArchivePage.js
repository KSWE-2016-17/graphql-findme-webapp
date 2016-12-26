import React from "react";

import ArchiveHeaderComponent from "../components/ArchiveHeaderComponent";
import ArchiveMailComponent from "../components/ArchiveMailComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class ArchivePage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <ArchiveHeaderComponent/>
                <ArchiveMailComponent/>
            </div>
        );
    }
}
