import React from "react";

import ReadMailHeaderComponent from "../components/ReadMailHeaderComponent";
import ReadMailComponent from "../components/ReadMailComponent";
import Navigation from "../components/Navigation";

export default class ReadMailPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ReadMailHeaderComponent/>
                <ReadMailComponent/>
            </div>
        );
    }
}
