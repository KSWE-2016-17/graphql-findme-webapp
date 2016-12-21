import React from "react";

import ProfileImage from "./ProfileImage";

import ProfilService from "../services/ProfilService";

export default class ProfilAnsichtRowHead extends React.Component {
    render() {
        return (
            <div>{this.createRowHead()}</div>
        );
    }

    createRowHead() {
        let profileService = new ProfilService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                localStorage.setItem("sessionProfileId", data[0]._id);
                localStorage.setItem("sessionProfile", data[0]);

                let parts = data[0].aboutme.split("{");

                if (parts.length > 1) {
                    $("#aboutme").text(parts[0]);
                } else {
                    $("#aboutme").text(data[0].aboutme);
                }

                let builder = data[0].firstname;
                $("#proname").text(builder);
            })
            .catch((err) => {
                console.log(err);
            });

        profileService.getAdminRight(localStorage.getItem("sessionUserId"))
            .then((data) => {
                $("#reports").hide();

                if (data && data[0] && (data[0].role === 2 || data[0].role === "2")) {
                    $("#reports").show();
                }
            })
            .catch((err) => {
                console.log(err);
            });

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <ProfileImage/>

                        <a className="btn btn-primary" style={{"marginTop": "2rem"}} role="button">
                            <span className="glyphicon glyphicon-picture"></span> Profilfoto auswählen
                        </a>
                    </div>
                    <div className="col-md-10">
                        <a id="reports" className="btn btn-danger pull-right" href="#/reports" role="button">
                            <span className="glyphicon glyphicon-screenshot"></span> Beschwerden
                        </a>
                        <a className="btn btn-primary pull-right" href="#/edit" role="button">
                            <span className="glyphicon glyphicon-pencil"></span> "Über mich" bearbeiten
                        </a>

                        <h1 id="proname"></h1>
                        <p id="aboutme"></p>
                    </div>
                </div>
            </div>
        );
    }
}
