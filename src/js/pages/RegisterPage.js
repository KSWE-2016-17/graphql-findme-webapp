import React from "react";

import LoginHeader from "../components/LoginHeader";

import RegisterService from "../services/RegisterService";
import ProfilService from "../services/ProfilService";

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.registerService = new RegisterService();
        this.profileService = new ProfilService();
    }

    render() {
        return (
            <div>
                <LoginHeader/>

                <h1>Registrieren</h1>

                <p>
                    Anhand Ihrer Interessen, Vorlieben und Vorstellungen erstellt
                    find.me eine Liste mit vielversprechenden Dates.<br/>
                    Finden Sie Ihren Seelenverwandten.
                </p>

                <form role="form">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Benutzername</label>
                                <input id="username" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input id="mailadress" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Passwort</label>
                                <input id="password" className="form-control" type="password"/>
                            </div>
                            <div className="form-group">
                                <label>Passwort wiederholen</label>
                                <input id="password2" className="form-control" type="password"/>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Geschlecht</label>

                                <div className="radio">
                                    <label>
                                        <input type="radio" name="gender" value="male"/> männlich
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="gender" value="female"/> weiblich
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="gender" value="other"/> sonstiges
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Geburtsjahr</label>
                                <input id="yearOfBirth" className="form-control" type="number"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input id="acceptAGB" type="checkbox" onClick={this.acceptAGB}/> AGBs gelesen und
                                akzeptiert
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <button id="registerButton" className="btn btn-primary" type="button"
                                onClick={this.registerNewUser} disabled="disabled">
                            <span className="glyphicon glyphicon-check"></span> Registrieren
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    registerNewUser() {
        let username = $("#username").val();
        let mail = $("#mailadress").val();
        let password = $("#password").val();
        let pw2 = $("#password2").val();
        let gender = $("#gender").val();
        let yearOfBirth = $("#yearOfBirth").val();
        let agbAccepted = $("#acceptAGB").prop("checked");

        let userObject = {
            "login": username,
            "password": password,
            "role": 0
        };

        let profileObject = {
            "user_id": "",
            "firstname": username,
            "lastname": username,
            "email": mail,
            "birthday": yearOfBirth,
            "gender": gender,
            "familystatus": 1,
            "children": 0,
            "aboutme": "txt{#+txt",
            "privacy": {
                "friends": 1,
                "pictures": 0
            },
            "profilepic": "",
            "haircolor": 3,
            "eyecolor": 0,
            "figure": 1
        };

        if (username !== "" &&
            mail !== "" &&
            password === pw2 &&
            gender !== "" &&
            yearOfBirth !== "" &&
            agbAccepted === true) {
            this.registerService.register(userObject)
                .then((data) => {
                    return this.registerService.findIdByName(username);
                })
                .then((data) => {
                    profileObject.user_id = data[0]._id;

                    return this.profileService.createProfile(profileObject);
                })
                .then((data) => {
                    location.href = "#/login";
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Bitte alle Felder ausfuellen!");
        }
    }

    acceptAGB() {
        $("#registerButton").prop("disabled", !$("#acceptAGB").prop("checked"));
    }
}
