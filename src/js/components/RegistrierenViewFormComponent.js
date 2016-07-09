import React from "react";

import RegisterService from "../services/RegisterService";
import ProfilService from "../services/ProfilService";

export default class RegistrierenViewFormComponent extends React.Component {

    registerNewUser(){
        var name;
        var mail;
        var pw;
        var pw2;
        var gender;
        var yearOfBirth;
        var accept;

        name = $("#username").val();
        mail = $("#mailadress").val();
        pw = $("#password").val();
        pw2 = $("#password2").val();
        gender = $("#gender").val();
        yearOfBirth = $("#yearOfBirth").val();
        accept = document.getElementById("acceptAGB").checked;

        var objUser = {
            "doctype" : "user",
            "login" : name,
            "password" : pw,
            "role" : 0
        }

        var objPrivacy = {
            "friends" : 1,
            "pictures" : 0
        }

        var objProfil = {
            "doctype" : "profile",
            "user_id" : "",
            "firstname" : name,
            "lastname" : name,
            "email" : mail,
            "birthday" : yearOfBirth,
            "gender" : gender,
            "familystatus" : 1,
            "children" : 0,
            "aboutme" : "txt{#+txt",
            "privacy" : objPrivacy,
            "profilepic" : "ououo",
            "haircolor" : 3,
            "eyecolor" : 0,
            "figure" : 1
        }

        if(name !== "" && mail !== "" && pw===pw2 && gender !== "" && yearOfBirth !== "" && accept === true){
            //user registrieren
            let registerService = new RegisterService();
            registerService.register(objUser, {
                success: function(data) {
                    //location.href = "#/login";

                        //user_id ermitteln
                        registerService.findIdByName(name, {
                            success: function (data) {
                                var user = "";
                                user = data[0]._id;
                                objProfil.user_id = user;

                                //profil anlegen
                                let profilService = new ProfilService();
                                profilService.createProfile(objProfil, {
                                    success: function(data) {
                                        //alert("Test: " + objProfil.user_id);
                                        location.href = "#/login";
                                    },
                                    error: function(err) {
                                        console.log(err);
                                    }
                                });

                            },
                            error: function (err) {
                                console.log(err);
                            }
                        });



                },
                error: function(err) {
                    console.log(err);
                }
            });

        } else {
            alert("Bitte alle Felder ausfuellen!");
        }

    }

    createRegistrierenViewForm() {
        return(<div>
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>Benutzername:</td>
                            <td><input type="text" name="username" id="username" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Emailadresse:</td>
                            <td><input type="text" id="mailadress" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Passwort:</td>
                            <td><input type="password" id="password" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Passwort (wdh.):</td>
                            <td><input type="password" id="password2" size="50"/></td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>Geschlecht:</td>
                            <td><label><input type="radio" name="gender" value="male"/> m&auml;nnlich</label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><input type="radio" name="gender" value="female"/> weiblich</label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><input type="radio" name="gender" value="other"/> sonstiges</label></td>
                        </tr>
                        <tr>
                            <td>Geburtsjahr:</td>
                            <td><label><input type="text" name="yearOfBirth"/></label></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-5">
                    <div className="checkbox">
                        <br/>
                        <label><input type="checkbox" value="" name="acceptAGB" id="acceptAGB"/>AGB gelesen</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-md-offset-3">
                        <button className="btn btn-primary btn-md btn-block" type="button" onClick={this.registerNewUser}>
                            <span className="glyphicon"></span> Registrieren</button>
                </div>
                <br/>
            </div>
            <div className="row">
                <hr/>
                <div className="col-md-1">
                    <span>&copy;find.me2016</span>
                </div>
            </div>
        </div>);
    }

    render() {
        return (
            <div>{this.createRegistrierenViewForm()}
            </div>
        );
    }
}