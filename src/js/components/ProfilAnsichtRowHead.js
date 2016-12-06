import React from "react";
import q from "q";
import _ from "lodash";

import PS from "../services/ProfilService";

import DefaultProfilImage from "./DefaultProfilImage";
import ProfilPic from "./ProfileImage";

export default class RowHeadComponent extends React.Component {

    createRowHead() {
        let ps = new PS();
        let privacy = {
            "friends": 0,
            "pictures": 0
        }
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
        }
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
        }

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
        }

        let nwo;
        let ppp;

        let abutme;

        // ps.linkProfile(localStorage.getItem("sessionUserId"));

        console.log(localStorage.getItem("sessionProfileId"));

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
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

                // profile._id = data[0]._id;
                // profile._rev = data[0]._rev;
                // profile.doctype = data[0].doctype;
                // profile.user_id = data[0].user_id;
                // profile.firstname = data[0].firstname;
                // profile.lastname = data[0].lastname;
                // profile.email = data[0].email;
                // profile.familystatus = data[0].familystatus;
                // profile.children = data[0].children;
                // profile.aboutme = data[0].aboutme;
                // privacy.friends = data[0].privacy.friends;
                // privacy.pictures = data[0].privacy.pictures;
                // profile.privacy= privacy;
                // profile.profilepic = data[0].profilepic;
                // profile.haircolor = data[0].haircolor;
                // profile.eyecolor = data[0].eyecolor;
                // profile.figure = data[0].figure;

                nwo = JSON.parse(JSON.stringify(data[0]));

                abutme = data[0].aboutme;

            })
            .catch(function (err) {
                console.log(err);
            });
        //
        // for(let x=0;x<1000;x++){
        //     if(x>990)
        //     console.log(x);
        // }

        ps.getAdminRight(localStorage.getItem("sessionUserId"))
            .then(function (data) {

                $("#reports").hide();
                if (data[0].role === 2 || data[0].role === "2") {
                    $("#reports").show();
                }

            })
            .catch(function (err) {
                console.log(err);
            });

        console.log(localStorage.getItem("sessionProfileId"));

        // ps.getProfile(localStorage.getItem("sessionProfileId"),{
        //     success: function(data) {
        //         profile = data[0];
        //     },
        //     error: function(err) {
        //         console.log(err);
        //     }
        // });

        //profile = localStorage.getItem("sessionProfile");

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

        return <div>
            <div className="row">
                <div className="col-md-2">
                    <ProfilPic />
                    <br /><br />
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
                    <p id="aboutme">

                    </p>

                </div>
            </div>
        </div>;
    }

    render() {

        return (
            <div>{this.createRowHead()}
            </div>
        );
    }
}
