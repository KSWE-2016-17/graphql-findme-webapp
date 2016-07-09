import React from "react";

import LoginService from "../services/LoginService";

export default class LoginHeader extends React.Component {
    login() {
        let loginService = new LoginService();
        loginService.login($("#email").val(), $("#password").val(), {
            success: function(data) {
                location.href = "#/profile";
            },
            error: function(err) {
                console.log(err);
            }
        });
        
    }

    createContent() {
        return <div>
            <div className="row"  style={{backgroundColor: "LightGray"}}>
                <div className="col-md-1">
                    <h3 className="title">find.me</h3>
                </div>
                <form className="form-inline">
                    <div className="col-md-2 col-md-offset-5">
                        <div className="input-group">
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="form-group">
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password"></input>
                        </div>
                                       </div>
                                       <div className="col-md-1">
                        <button type="button" className="btn btn-primary" onClick={this.login}>anmelden</button>
                    </div>
                </form>

            </div>

            </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}