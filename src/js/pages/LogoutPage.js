import React from "react";

import LogoutComponent from "../components/LogoutComponent"
import LoginFooter from "../components/LoginFooter";

export default class LogoutPage extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("sessionUserId")) {
            localStorage.removeItem("sessionUserId");
        }

        if (localStorage.getItem("sessionProfileId")) {
            localStorage.removeItem("sessionProfileId");
        }
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <LogoutComponent/>
                <br/>
                <br/>
                <br/>
                <LoginFooter/>
            </div>
        );
    }
}
