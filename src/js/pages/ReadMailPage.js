import React from "react";

import ReadMailHeaderComponent from "../components/ReadMailHeaderComponent";
import ReadMailComponent from "../components/ReadMailComponent";
import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";

export default class ReadMailPage extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <ReadMailHeaderComponent/>
                <ReadMailComponent/>
            </div>
        );
    }
}
