import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class ProfileinstellungenViewProfilLoeschenComponent extends React.Component {

    createProfileinstellungenViewProfilLoeschenComponent() {
        return (<div className="container">
            <div className="row">
                <br/>
                <h3>Profil l&ouml;schen</h3>
                <div className="col-md-6 col-md-offset-3">
                    <br/>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>
                        Ich bin einverstanden damit, dass dies mein Profil und Freundschaften entfernen wird
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <br/>
                    <button className="btn btn-danger btn-md btn-block" type="button">
                        <span className="glyphicon glyphicon-trash"></span> Profil l&ouml;schen</button>
                    <br/>
                    <br/>
                </div>
            </div>
            <hr/>
        </div>);
    }

    render() {
        return (
            <div>{this.createProfileinstellungenViewProfilLoeschenComponent()}
            </div>
        );
    }
}