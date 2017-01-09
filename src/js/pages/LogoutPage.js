import React from "react";

export default class LogoutPage extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("sessionUserId")) {
            localStorage.removeItem("sessionUserId");
        }

        if (localStorage.getItem("sessionProfileId")) {
            localStorage.removeItem("sessionProfileId");
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-4">
                            <h1>Logout erfolgreich!</h1>
                            <br/>
                            Vielen Dank für deinen Besuch.<br/>
                            Weitere Singles warten auf dich.<br/>
                            Entdecke neue Freundschaften.<br/>
                            <br/>
                            <a href="#/login">
                                <span className="glyphicon glyphicon-menu-left"></span> Zurück zu find.me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
