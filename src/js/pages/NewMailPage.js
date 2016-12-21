import React from "react";

import NewMailHeaderComponent from "../components/NewMailHeaderComponent";
import NewMailComponent from "../components/NewMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class NewMailPage extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <NewMailHeaderComponent/>
                <NewMailComponent/>
            </div>
        );
    }
}
