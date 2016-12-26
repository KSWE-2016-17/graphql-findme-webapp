import React from "react";

import NavigationComponent from "../components/NavigationComponent";

export default class ReadMailPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Nachricht lesen</h1>

                <form role="form">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" readOnly="readOnly"/>
                    </div>

                    <div className="form-group">
                        <label>Nachricht</label>
                        <textarea className="form-control" rows="15" readOnly="readOnly"></textarea>
                    </div>

                    <div className="form-group">
                        <div className="clearfix">
                            <div className="pull-right">
                                <button className="btn btn-danger btn-md" type="button">
                                    <span className="glyphicon glyphicon-trash"></span> Löschen
                                </button>

                                <button className="btn btn-warning btn-md" type="button" style={{marginLeft: "1rem"}}>
                                    <span className="glyphicon glyphicon-floppy-disk"></span> Archivieren
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
