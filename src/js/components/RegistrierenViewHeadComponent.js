import React from "react";

export default class RegistrierenViewHeadComponent extends React.Component {
    render() {
        return (
            <div>{this.createRegistrierenViewHead()}</div>
        );
    }

    createRegistrierenViewHead() {
        return (
            <div>
                <div className="row" style={{backgroundColor: "Gray", padding: "10px", border: "1px solid #000000"}}>
                    <div className="col-md-12">
                        <strong>find.me</strong>
                    </div>
                </div>
            </div>
        );
    }
}
