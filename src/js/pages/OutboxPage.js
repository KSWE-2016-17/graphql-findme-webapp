import React from "react";

import OutboxHeaderComponent from "../components/OutboxHeaderComponent";
import OutboxMailComponent from "../components/OutboxMailComponent";
import Navigation from "../components/Navigation";

export default class OutboxPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <OutboxHeaderComponent/>
                <OutboxMailComponent/>
            </div>
        );
    }
}
