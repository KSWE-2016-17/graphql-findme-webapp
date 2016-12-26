import React from "react";

import NavigationComponent from "../components/NavigationComponent";

import NewMailService from "../services/NewMailService";

export default class WriteMailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.getSendTo = this.getSendTo.bind(this);
        this.sendMail = this.sendMail.bind(this);
        this.removeMail = this.removeMail.bind(this);

        this.mailService = new NewMailService();

        this.sendtoid = "NOTFOUND";
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Nachricht schreiben</h1>

                <form role="form">
                    <div className="form-group">
                        <label>Empfänger</label>
                        <input id="sendto" className="form-control" type="email"
                               onChange={this.getSendTo}/>
                    </div>

                    <div className="form-group">
                        <label>Nachricht</label>
                        <textarea id="message" className="form-control" rows="15"></textarea>
                    </div>

                    <div className="form-group clearfix">
                        <div className="pull-right">
                            <button className="btn btn-danger" type="button" onClick={this.removeMail}>
                                <span className="glyphicon glyphicon-remove"></span> Verwerfen
                            </button>

                            <button className="btn btn-primary" type="button" style={{marginLeft: "1rem"}}
                                    onClick={this.sendMail}>
                                <span className="glyphicon glyphicon-envelope"></span> Senden
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    removeMail() {
        document.getElementById("sendto").value = "";
        document.getElementById("message").value = "";
    }

    getSendTo() {
        let sendto = $("#sendto").val();

        this.mailService.resolveUserName(sendto)
            .then((data) => {
                this.sendtoid = data[0]._id;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    sendMail() {
        let message = $("#message").val();
        let sender = localStorage.getItem("sessionProfileId");

        if (message.trim() !== "") {
            let mailObject = {
                "from_id": sender,
                "to_id": this.sendtoid,
                "title": message,
                "archivedFrom": false,
                "archivedTo": false,
                "deletedFrom": false,
                "deletedTo": false
            };

            if (this.sendtoid !== "NOTFOUND") {
                this.mailService.sendMail(mailObject)
                    .then((data) => {
                        this.sendtoid = "NOTFOUND";
                        location.href = "#/mails/outbox";
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                alert("USER NOT FOUND");
            }
        } else {
            alert("EMPTY FIELDS");
        }
    }
}
