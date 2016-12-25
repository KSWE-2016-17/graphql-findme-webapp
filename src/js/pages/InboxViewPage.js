import React from "react";

import InboxHeaderComponent from "../components/InboxHeaderComponent";
import InboxMailComponent from "../components/InboxMailComponent";
import Navigation from "../components/Navigation";

export default class InboxViewPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <InboxHeaderComponent/>
                <InboxMailComponent/>
            </div>
        );
    }
}
