import React from "react";

export default class LoginInfoBox extends React.Component {
    render() {
        return (
            <div>
                <div className="row" style={{backgroundColor: "#F7F7F7"}}>
                    <div className="col-md-12">
                        <h1 className="title">find.me</h1>
                        <h5 className="info">Anhand Ihrer Interessen, Vorlieben und Vorstellungen
                            erstellt find.me
                            <br/>eine Liste mit vielversprechenden Dates.
                            <br/>
                            <br/>
                            <br/>
                            Finden Sie den Richtigen.</h5>
                        <a className="btn btn-primary" href="#/register">Registrieren</a>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}
