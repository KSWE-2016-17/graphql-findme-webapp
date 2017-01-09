import React from "react";

import LoginService from "../services/LoginService";
import ProfileService from "../services/ProfilService";

export default class LoginHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.login = this.login.bind(this);

        this.loginService = new LoginService();
        this.profileService = new ProfileService();
    }

    render() {
        return (
            <div className="row" style={{backgroundColor: "LightGray"}}>
                <div className="clearfix">
                    <form className="form-inline pull-right" onSubmit={this.login}>
                        <div className="form-group">
                            <input id="username" className="form-control" type="text" placeholder="username"
                                   style={{marginLeft: "1rem"}}/>
                        </div>

                        <div className="form-group">
                            <input id="password" className="form-control" type="password" placeholder="password"
                                   style={{marginLeft: "1rem"}}/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" style={{marginLeft: "1rem"}}>
                                <span className="glyphicon glyphicon-log-in"></span> Anmelden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    login() {
        this.loginService.login($("#username").val(), $("#password").val())
            .then((data) => {
                return this.profileService.findProfileByUserId(data._id);
            })
            .then((data) => {
                if (data && data[0]) {
                    localStorage.setItem("sessionProfileId", data[0]._id);

                    location.href = `#/profiles/${localStorage.getItem("sessionProfileId")}`;
                } else {
                    console.log("no profile found for login");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
