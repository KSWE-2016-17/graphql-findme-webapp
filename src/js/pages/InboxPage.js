import React from "react";

import InboxHeaderComponent from "../components/InboxHeaderComponent";
import InboxMailComponent from "../components/InboxMailComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class InboxPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <InboxHeaderComponent/>
                <InboxMailComponent/>
            </div>
        );
    }
}
