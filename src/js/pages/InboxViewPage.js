import React from "react";

//import LoginHeader from "../components/LoginHeader";

import InboxHeaderComponent from "../components/InboxHeaderComponent";
import InboxMailComponent from "../components/InboxMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class InboxViewPage extends React.Component {
    createContent() {
        return <div className="container">
            <ProfilAnsichtNavigationElement/>
                <InboxHeaderComponent/>
            <InboxMailComponent/>
            </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
    );
    }
}
