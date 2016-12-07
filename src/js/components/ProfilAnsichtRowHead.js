import React from "react";

import ProfileImage from "./ProfileImage";

import ProfilService from "../services/ProfilService";

export default class RowHeadComponent extends React.Component {
    render() {
        return (
            <div>{this.createRowHead()}</div>
        );
    }

    createRowHead() {
        let ps = new ProfilService();
        let privacy = {
            "friends": 0,
            "pictures": 0
        };
        let profile = {
            "_id": "",
            "_rev": "",
            "doctype": "profile",
            "user_id": "",
            "firstname": "",
            "lastname": "",
            "email": "",
            "birthday": "",
            "gender": "",
            "familystatus": 1,
            "children": 0,
            "aboutme": "UeberMich ABC",
            "privacy": privacy,
            "profilepic": "ououo",
            "haircolor": 3,
            "eyecolor": 0,
            "figure": 1
        };
        let profile2 = {
            "_id": "",
            "_rev": "",
            "doctype": "profile",
            "user_id": "",
            "firstname": "",
            "lastname": "",
            "email": "",
            "birthday": "",
            "gender": "",
            "familystatus": 1,
            "children": 0,
            "aboutme": "UeberMich ABC",
            "privacy": privacy,
            "profilepic": "ououo",
            "haircolor": 3,
            "eyecolor": 0,
            "figure": 1
        };

        let omg = {
            "_id": "",
            "_rev": "",
            "doctype": "",
            "user_id": "",
            "firstname": "",
            "lastname": "",
            "email": "",
            "birthday": "",
            "gender": "",
            "familystatus": 1,
            "children": 0,
            "aboutme": "",
            "privacy": privacy,
            "profilepic": "",
            "haircolor": 3,
            "eyecolor": 0,
            "figure": 1
        };

        let nwo;
        let ppp;

        let abutme;

        console.log(localStorage.getItem("sessionProfileId"));

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                console.log(data[0]._id);
                localStorage.setItem("sessionProfileId", data[0]._id);
                localStorage.setItem("sessionProfile", data[0]);

                omg = data[0];
                console.log("###");
                console.log(data[0]);

                profile2 = data[0];

                let parts = data[0].aboutme.split("{");

                //$("#aboutme").text(data[0].aboutme);
                if (parts.length > 1) {
                    $("#aboutme").text(parts[0]);
                } else {
                    $("#aboutme").text(data[0].aboutme);
                }

                let builder = data[0].firstname;
                $("#proname").text(builder);

                nwo = JSON.parse(JSON.stringify(data[0]));

                abutme = data[0].aboutme;
            })
            .catch((err) => {
                console.log(err);
            });

        ps.getAdminRight(localStorage.getItem("sessionUserId"))
            .then((data) => {
                $("#reports").hide();

                if (data && data[0] && (data[0].role === 2 || data[0].role === "2")) {
                    $("#reports").show();
                }
            })
            .catch((err) => {
                console.log(err);
            });

        console.log(localStorage.getItem("sessionProfileId"));

        ppp = JSON.parse(JSON.stringify(localStorage.getItem("sessionProfile")));

        console.log("omgkommt");
        console.log(omg.aboutme);

        console.log("profilekommt");
        console.log(profile.aboutme);

        console.log(profile2.aboutme);

        console.log("NWONWONWO");
        console.log(nwo);

        console.log("PPPP");
        console.log(ppp);

        console.log("PPPPP2");
        ppp = localStorage.getItem("sessionProfile");
        console.log(ppp);

        console.log("abutme");
        console.log(abutme);

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <ProfileImage/>
                        <br/><br/>
                        <button type="button" className="btn btn-primary"><span
                            className="glyphicon glyphicon-picture"></span> Profilfoto ausw&auml;hlen
                        </button>
                    </div>
                    <div className="col-md-10">
                        <a href="#/reports" id="reports" type="button" className="btn btn-danger  pull-right"><span
                            className="glyphicon glyphicon-screenshot"></span>Beschwerden</a>
                        <a href="#/edit" type="button" className="btn btn-primary pull-right"><span
                            className="glyphicon glyphicon-pencil"></span> "&Uuml;ber Dich" bearbeiten</a>
                        <h1 id="proname"></h1>
                        <p id="aboutme"></p>
                    </div>
                </div>
            </div>
        );
    }
}
