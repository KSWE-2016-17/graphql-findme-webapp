import React from "react";

import ReadMailHeaderComponent from "../components/ReadMailHeaderComponent";
import ReadMailComponent from "../components/ReadMailComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class ReadMailPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <ReadMailHeaderComponent/>
                <ReadMailComponent/>
            </div>
        );
    }
}
