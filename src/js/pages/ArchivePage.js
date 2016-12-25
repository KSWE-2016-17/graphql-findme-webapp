import React from "react";

import ArchiveHeaderComponent from "../components/ArchiveHeaderComponent";
import ArchiveMailComponent from "../components/ArchiveMailComponent";
import Navigation from "../components/Navigation";

export default class ArchivePage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ArchiveHeaderComponent/>
                <ArchiveMailComponent/>
            </div>
        );
    }
}
