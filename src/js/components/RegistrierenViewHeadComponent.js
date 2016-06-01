import React from "react";

export default class RegistrierenViewHeadComponent extends React.Component {

    createRegistrierenViewHead() {
        return(<div className="container">
            <div className="row"  style={{backgroundColor: "Gray", padding:"10px", border:"1px solid #000000"}}>
                <div className="col-md-12">
                    <strong>find.me</strong>
                </div>
            </div>
        </div>);
    }

    render() {
        return (
            <div>{this.createRegistrierenViewHead()}
            </div>
        );
    }
}