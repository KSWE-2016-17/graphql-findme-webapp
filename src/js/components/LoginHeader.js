import React from "react";

import LoginService from "../services/LoginService";
import ProfileService from "../services/ProfilService";

export default class LoginHeader extends React.Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row" style={{backgroundColor: "LightGray"}}>
                    <div className="col-md-1">
                        <h3 className="title">find.me</h3>
                    </div>
                    <form className="form-inline">
                        <div className="col-md-2 col-md-offset-5">
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <button type="button" className="btn btn-primary" onClick={this.login}>Anmelden</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    login() {
        let loginService = new LoginService();
        let profileService = new ProfileService();

        loginService.login($("#username").val(), $("#password").val())
            .then((data) => {
                return profileService.findProfileByUserId(data._id);
            })
            .then((data) => {
                if (data && data[0]) {
                    localStorage.setItem("sessionProfileId", data[0]._id);

                    location.href = `#/profiles/${localStorage.getItem("sessionProfileId")}`;
                } else {
                    console.log("no profile found for login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
