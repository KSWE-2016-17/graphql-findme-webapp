import React from "react";

import DefaultProfilImage from "../components/DefaultProfilImage";

export default class DatingViewSidebarComponent extends React.Component {

    createDatingViewSidebarComponent() {
        return <div>
                    <p>Vorschläge</p>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                    <DefaultProfilImage />
                    <span>Max Musterman</span>
                </div>;
    }

    render() {
        return (
            <div>{this.createDatingViewSidebarComponent()}</div>
        );
    }
}