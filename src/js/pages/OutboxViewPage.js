import React from "react";

import OutboxHeaderComponent from "../components/OutboxHeaderComponent";
import OutboxMailComponent from "../components/OutboxMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class OutboxViewPage extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <OutboxHeaderComponent/>
                <OutboxMailComponent/>
            </div>
        );
    }
}
