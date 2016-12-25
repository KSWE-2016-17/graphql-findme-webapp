import React from "react";

import Navigation from "../components/Navigation";
import DatingViewLayoutComponent from "../components/DatingViewLayoutComponent";

export default class DatingPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <DatingViewLayoutComponent/>
            </div>
        );
    }
}
