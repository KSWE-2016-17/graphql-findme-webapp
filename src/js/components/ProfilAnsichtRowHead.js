import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class RowHeadComponent extends React.Component {

    createRowHead() {
        return <div className="container">
            <div className="row">
            <div className="col-md-2">
                <DefaultProfilImage />
                <br /><br />
                <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-picture"></span> Profilfoto ausw&auml;hlen</button>
            </div>
            <div className="col-md-10">
                <a href="#/edit" type="button" className="btn btn-primary pull-right"><span className="glyphicon glyphicon-pencil"></span> "&Uuml;ber Dich" bearbeiten</a>
                <h1>Max Mustermann</h1>
                <p>
                    "Sei Du selbst die Ver&auml;nderung, die Du Dir w&uuml;nschst f&uuml;r diese Welt."<br />
                    Mahatma Gandi
                </p>
            </div>
        </div>
        </div>;
    }

    render() {
        return (
            <div>{this.createRowHead()}
            </div>
        );
    }
}
