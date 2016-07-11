import React from "react";

import InboxHeaderComponent from "../components/InboxHeaderComponent";
import InboxMailComponent from "../components/InboxMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class InboxViewPage extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <InboxHeaderComponent/>
                <InboxMailComponent/>
            </div>
        );
    }
}
