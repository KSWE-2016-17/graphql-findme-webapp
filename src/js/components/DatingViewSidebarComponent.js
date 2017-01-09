import React from "react";

import ProfileImageComponent from "../components/ProfileImageComponent";

export default class DatingViewSidebarComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <strong>Vorschläge</strong>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    <ProfileImageComponent/>
                                </p>
                                <p className="text-center">
                                    Max Mustermann
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    <ProfileImageComponent/>
                                </p>
                                <p className="text-center">
                                    Max Mustermann
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    <ProfileImageComponent/>
                                </p>
                                <p className="text-center">
                                    Max Mustermann
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    <ProfileImageComponent/>
                                </p>
                                <p className="text-center">
                                    Max Mustermann
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    <ProfileImageComponent/>
                                </p>
                                <p className="text-center">
                                    Max Mustermann
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
