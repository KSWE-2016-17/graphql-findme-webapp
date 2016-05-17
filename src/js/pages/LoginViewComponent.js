import React from "react";

import LoginHeader from "../components/LoginHeader";
import LoginInfoBox from "../components/LoginInfoBox";
import LoginDreiPunkte from "../components/LoginDreiPunkte";
import LoginFooter from "../components/LoginFooter";

export default class LoginViewComponent extends React.Component {
    createContent() {
        return <div className="container">
            <LoginHeader/>
            <LoginInfoBox/>
            <LoginDreiPunkte/>
            <LoginFooter/>
            </div>;
    }
    
    

    render() {
        return (
            <div>{this.createContent()}</div>
    );
    }
}
