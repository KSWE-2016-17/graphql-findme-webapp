import React from "react";

export default class RegistrierenViewInfoboxComponent extends React.Component {
    render() {
        return (
            <div>{this.createRegistrierenInfobox()}</div>
        );
    }

    createRegistrierenInfobox() {
        return (
            <div>
                <div className="row" style={{
                    backgroundColor: "LightGray", padding: "15px",
                    border: "1px solid #000000"
                }}>
                    <div className="col-md-12">
                        <h1>find.me</h1>
                        <p>Anhand Ihrer Interessen, Vorlieben und Vorstellungen erstellt
                            find.me eine Liste mit vielversprechenden Dates.</p>
                        <p>Finden Sie den Richtigen.</p>
                    </div>
                </div>
            </div>
        );
    }
}
