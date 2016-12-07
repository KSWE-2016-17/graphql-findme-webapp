import React from "react";

import RegisterService from "../services/RegisterService";
import ProfilService from "../services/ProfilService";

export default class ProfileinstellungenViewProfilLoeschenComponent extends React.Component {
    constructor(props) {
        super(props);

        this.deleteProfil = this.deleteProfil.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h3>Profil l&ouml;schen</h3>
                    <div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" id="delete"/>
                                Ich bin einverstanden damit, dass dies mein Profil und Freundschaften entfernen wird
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <button type="button" className="btn btn-danger btn-md btn-block" onClick={this.deleteProfil}>
                            <span className="glyphicon glyphicon-trash"></span> Profil l&ouml;schen
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

    deleteProfil() {
        let id = localStorage.getItem("sessionUserId");
        let accept = document.getElementById("delete").checked;

        if (accept) {
            let profilService = new ProfilService();
            let registerService = new RegisterService();

            //aktuellen user finden
            profilService.findById(id)
                .then((data) => {
                    //user entfernen
                    profilService.remove(data[0])
                        .then((data) => {

                        })
                        .catch((err) => {
                            console.log(err);
                        });

                    //aktuelles profil finden
                    registerService.findIdByName(data[0].login)
                        .then((data) => {
                            //profil entfernen
                            registerService.remove(data[0])
                                .then((data) => {
                                    location.href = "#/login";
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
