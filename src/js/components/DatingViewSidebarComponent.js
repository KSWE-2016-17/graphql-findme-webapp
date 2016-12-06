import React from "react";

import DefaultProfilImage from "../components/DefaultProfilImage";

export default class DatingViewSidebarComponent extends React.Component {
    render() {
        return (
            <div>{this.createDatingViewLayoutComponent()}</div>
        );
    }

    createDatingViewSidebarComponent() {
        return (
            <div>
                <p>Vorschläge</p>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
                <DefaultProfilImage/>
                <span>Max Musterman</span>
            </div>
        );
    }
}
