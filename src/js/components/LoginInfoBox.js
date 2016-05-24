import React from "react";

export default class LoginInfoBox extends React.Component {
    createContent() {
        return <div className="container"> <div className="row" style={{backgroundColor: "#F7F7F7"}}>

            <div className="col-md-12">

                <h1 className="title">find.me</h1>
                <h5 className="info">Anhand Ihrer Interessen, Vorlieben und Vorstellungen
                    erstellt find.me
                    <br/>eine Liste mit vielversprechenden Dates.
                    <br/>
                    <br/>
                    <br/>
                    Finden Sie den Richtigen.</h5>

                <button type="button" className="btn btn-primary">Registrieren</button>
                <br/>
                <br/>
                <br/>
            </div>

        </div>
            </div>;
    }

    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
