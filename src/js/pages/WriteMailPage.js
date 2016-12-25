import React from "react";

import NewMailHeaderComponent from "../components/NewMailHeaderComponent";
import NewMailComponent from "../components/NewMailComponent";
import Navigation from "../components/Navigation";

export default class WriteMailPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <NewMailHeaderComponent/>
                <NewMailComponent/>
            </div>
        );
    }
}
