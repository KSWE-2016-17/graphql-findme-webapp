import React from "react";

import DefaultImage from "./DefaultImage";

export default class ProfilAnsichtRowBilder extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bilder</h1>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <DefaultImage/>
                        <br/>
                        <span>Urlaub</span>
                    </div>
                    <div className="col-md-2">
                        <DefaultImage/>
                        <br/>
                        <span>Kinder</span>
                    </div>
                    <div className="col-md-2">
                        <DefaultImage/>
                        <br/>
                        <span>Autos</span>
                    </div>
                    <div className="col-md-2">
                        <DefaultImage/>
                        <br/>
                        <span>lustige Momente</span>
                    </div>
                    <div className="col-md-2 ">
                        <DefaultImage/>
                        <br/>
                        <span>sonstiges</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <button type="button" className="btn btn-primary"><span
                            className="glyphicon glyphicon-upload"></span> Bild hochladen
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
