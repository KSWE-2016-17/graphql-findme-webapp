import React from "react";

export default class InboxHeaderComponent extends React.Component {
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
                        <font size="5">Posteingang</font>
                        <span className="glyphicon glyphicon-triangle-left"></span>
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
