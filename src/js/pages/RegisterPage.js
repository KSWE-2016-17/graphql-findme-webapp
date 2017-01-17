import React from "react";

import LoginHeader from "../components/LoginHeader";

import UserService from "../services/UserService";
import ProfilService from "../services/ProfilService";

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.gender = 1;

        this.registerNewUser = this.registerNewUser.bind(this);
        this.useMaleGender = this.useMaleGender.bind(this);
        this.useFemaleGender = this.useFemaleGender.bind(this);

        this.userService = new UserService();
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
                                <input id="reg-username" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input id="reg-mailadress" className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Passwort</label>
                                <input id="reg-password" className="form-control" type="password"/>
                            </div>
                            <div className="form-group">
                                <label>Passwort wiederholen</label>
                                <input id="reg-password2" className="form-control" type="password"/>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Geschlecht</label>

                                <div className="radio">
                                    <label>
                                        <input type="radio" name="gender" value="1" defaultChecked="defaultChecked" onClick={this.useMaleGender}/>
                                        männlich
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="gender" value="0"
                                               onClick={this.useFemaleGender}/> weiblich
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Geburtsjahr</label>
                                <input id="reg-yearOfBirth" className="form-control" type="number"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input id="reg-acceptAGB" type="checkbox"/> AGBs gelesen und
                                akzeptiert
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <button id="registerButton" className="btn btn-primary" type="button"
                                onClick={this.registerNewUser}>
                            <span className="glyphicon glyphicon-check"></span> Registrieren
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    registerNewUser() {
        let username = $("#reg-username").val();
        let email = $("#reg-mailadress").val();
        let password = $("#reg-password").val();
        let password2 = $("#reg-password2").val();
        let gender = this.gender;
        let yearOfBirth = $("#reg-yearOfBirth").val();
        let agbAccepted = $("#reg-acceptAGB").prop("checked");

        let userObject = {
            login: username,
            password: password,
            role: 0
        };

        let profileObject = {
            user_id: "",
            friends_ids: [],
            firstname: username,
            lastname: username,
            email: email,
            birthday: new Date(yearOfBirth, 1, 1).toISOString(),
            gender: gender,
            familystatus: 1,
            children: 0,
            aboutme: "txt{#+txt",
            privacy: {
                friends: 1,
                pictures: 0
            },
            profilepic: "",
            haircolor: 3,
            eyecolor: 0,
            figure: 1
        };

        if (username !== "" &&
            email !== "" &&
            password === password2 &&
            gender !== "" &&
            yearOfBirth !== "" &&
            agbAccepted === true) {
            this.userService.createUser(userObject)
                .then((data) => {
                    return this.userService.findByLogin(username);
                })
                .then((data) => {
                    profileObject.user_id = data[0]._id;

                    return this.profileService.createProfile(profileObject);
                })
                .then((data) => {
                    location.href = "#/login";
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Bitte alle Felder ausfuellen!");
        }
    }

    useMaleGender() {
        this.gender = 1;
    }

    useFemaleGender() {
        this.gender = 0;
    }
}
