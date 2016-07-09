import React from "react";

//import LoginHeader from "../components/LoginHeader";

import OutboxHeaderComponent from "../components/OutboxHeaderComponent";
import OutboxMailComponent from "../components/OutboxMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class OutboxViewPage extends React.Component {
    createContent() {
        return <div>
            <ProfilAnsichtNavigationElement/>
            <OutboxHeaderComponent/>
            <OutboxMailComponent/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
