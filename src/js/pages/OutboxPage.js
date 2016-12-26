import React from "react";

import OutboxHeaderComponent from "../components/OutboxHeaderComponent";
import OutboxMailComponent from "../components/OutboxMailComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class OutboxPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <OutboxHeaderComponent/>
                <OutboxMailComponent/>
            </div>
        );
    }
}
