import React from "react";

import LogoutComponent from "../components/LogoutComponent"
import LoginFooter from "../components/LoginFooter";


export default class LogoutPage extends React.Component {
    createContent() {
        return <div className="container">
            <br/>
            <br/>
            <br/>
            <LogoutComponent/>
            <br/>
            <br/>
            <br/>
            <LoginFooter/>

        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
