import React from "react";

import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";
import DatingViewLayoutComponent from "../components/DatingViewLayoutComponent";

export default class DatingViewPage extends React.Component {

    createDatingView() {
        return  <div>
            <ProfilAnsichtNavigationElement/>
            <DatingViewLayoutComponent/>
        </div>;
    }

    render() {
        return (
            <div>{this.createDatingView()}</div>
        );
    }
}