import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import DatingViewLayoutComponent from "../components/DatingViewLayoutComponent";

export default class DatingPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>
                <DatingViewLayoutComponent/>
            </div>
        );
    }
}
