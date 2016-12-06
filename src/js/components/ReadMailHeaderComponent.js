import React from "react";

export default class ReadHeaderComponent extends React.Component {
    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }

    createContent() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-11">
                        <font size="5">Nachricht lesen </font>
                        <span className="glyphicon glyphicon-eye-open"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div style={{border: "1px solid"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}
