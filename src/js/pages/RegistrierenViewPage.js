import React from "react";

import RegistrierenViewHeadComponent from "../components/RegistrierenViewHeadComponent";
import RegistrierenViewInfoboxComponent from "../components/RegistrierenViewInfoboxComponent";
import RegistrierenViewFormComponent from "../components/RegistrierenViewFormComponent";

export default class RegistrierenViewPage extends React.Component {
    render() {
        return (
            <div>
                <RegistrierenViewHeadComponent />
                <br />
                <RegistrierenViewInfoboxComponent />
                <br />
                <RegistrierenViewFormComponent />
            </div>
        );
    }
}
