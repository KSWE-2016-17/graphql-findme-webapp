import React from "react";

import DatingViewContentComponent from "../components/DatingViewContentComponent";
import DatingViewSidebarComponent from "../components/DatingViewSidebarComponent";

export default class DatingViewLayoutComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-10">
                        <DatingViewContentComponent/>
                    </div>
                    <div className="col-md-2">
                        <DatingViewSidebarComponent/>
                    </div>
                </div>
            </div>
        );
    }
}
