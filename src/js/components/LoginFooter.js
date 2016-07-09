import React from "react";

export default class LoginFooter extends React.Component {

    createContent() {
        return <div>
            <div className="row">
                <div className="col-md-12">
                    <hr  style={{border: "100px red"}}></hr>
                </div>
            </div>
            <div className="row">
                <div style={{border:"1px solid"}}></div>
                <div className="col-md-12">
                    <h5>@find.me 2015</h5>
                </div>
            </div>
        </div>;
    }

    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
