import React from "react";

import ProfileImageComponent from "../components/ProfileImageComponent";

export default class DatingViewSidebarComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Vorschläge</p>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
                <ProfileImageComponent/>
                <span>Max Musterman</span>
            </div>
        );
    }
}
