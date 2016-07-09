import React from "react";
import DefaultProfilImage from "./DefaultProfilImage";

import RegisterService from "../services/RegisterService";
import ProfilService from "../services/ProfilService";

export default class ProfileinstellungenViewProfilLoeschenComponent extends React.Component {

    deleteProfil(){
        var id;
        var accept;

        id = localStorage().getItem("sessionUserId");
        accept = document.getElementById("delete").checked;

        if(accept === true) {
            let profilService = new ProfilService();
            let registerService = new RegisterService();

            //aktuellen user finden
            profilService.findById(id, {
                success: function (data) {
                    
                    //user entfernen
                    profilService.delete(data[0], {
                        success: function (data) {
                            
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });                    
                    

                    //aktuelles profil finden
                    registerService.findIdByName(data[0].login, {
                        success: function (data) {

                            //profil entfernen
                            registerService.delete(data[0], {
                                success: function (data) {
                                    location.href = "#/login";
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            });

                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                    
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    }

    createProfileinstellungenViewProfilLoeschenComponent() {
        return (<div>
            <div className="row">
                <br/>
                <h3>Profil l&ouml;schen</h3>
                <div className="col-md-6 col-md-offset-3">
                    <br/>
                    <div className="checkbox">
                        <label><input type="checkbox" id="delete" value=""/>
                        Ich bin einverstanden damit, dass dies mein Profil und Freundschaften entfernen wird
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <br/>
                    <button className="btn btn-danger btn-md btn-block" type="button" onClick={this.deleteProfil()}>
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