import React from "react";

import NewMailHeaderComponent from "../components/NewMailHeaderComponent";
import NewMailComponent from "../components/NewMailComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class WriteMailPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <NewMailHeaderComponent/>
                <NewMailComponent/>
            </div>
        );
    }
}
