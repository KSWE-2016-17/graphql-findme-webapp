import React from "react";

export default class EditProfileHeaderComponent extends React.Component {


    createContent() {
        return <div className="container">
            <div className="row">
                <div className="col-md-11">
                    <font size="5">Profil bearbeiten </font>
                    <span className="glyphicon glyphicon-edit"></span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div style={{border:"1px solid"}}></div>
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