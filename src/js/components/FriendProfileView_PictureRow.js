import React from "react";

import DefaultImage from "./DefaultImage";

export default class RowBilderComponent extends React.Component {
	
    create() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bilder</h1>
                        <br />
                    </div>
                </div>
                <div className="col-md-2">
                    <DefaultImage />
                    <br />
                    <span>Urlaub</span>
                </div>
                <div className="col-md-2">
                    <DefaultImage />
                    <br />
                    <span>Kinder</span>
                </div>
                <div className="col-md-2">
                    <DefaultImage />
                    <br />
                    <span>Autos</span>
                </div>
                <div className="col-md-2">
                    <DefaultImage />
                    <br />
                    <span>Lustige Momente</span>
                </div>
                <div className="col-md-2">
                    <DefaultImage />
                    <br />
                    <span>Sonstiges</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>{this.create()}</div>
        );
    }
}
