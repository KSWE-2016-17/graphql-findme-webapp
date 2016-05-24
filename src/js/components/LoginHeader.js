import React from "react";

export default class LoginHeader extends React.Component {
    login(){
        alert("e");
    }

    createContent() {
        return <div className="container">
            <div className="row"  style={{backgroundColor: "LightGray"}}>
                <div className="col-md-1">
                    <h3 className="title">find.me</h3>
                </div>
                <form className="form-inline">
                    <div className="col-md-2 col-md-offset-5">
                        <div className="input-group">
                            <div className="form-group">
                                <input type="text" className="form-control" id="email" placeholder="Email"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="form-group">
                            <input type="email" className="form-control" id="password"
                                   placeholder="Password"></input>
                        </div>
                                       </div>
                                       <div className="col-md-1">
                        <button type="submit" className="btn btn-primary" onclick="login();">anmelden</button>
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