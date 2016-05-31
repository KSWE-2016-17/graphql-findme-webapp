import React from "react";

//import LoginHeader from "../components/LoginHeader";

import ReadMailHeaderComponent from "../components/ReadMailHeaderComponent";
import ReadMailComponent from "../components/ReadMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class ReadMailPage extends React.Component {
    createContent() {
        return <div className="container">
            <ProfilAnsichtNavigationElement/>
            <ReadMailHeaderComponent/>
            <ReadMailComponent/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
