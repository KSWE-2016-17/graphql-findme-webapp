import React from "react";

import NewMailService from "../services/NewMailService"

let sendtoid = "NOTFOUND";
let mailservice = new NewMailService();

export default class NewMailComponent extends React.Component {
    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }

    removeMail() {
        document.getElementById("sendto").value = "";
        document.getElementById("message").value = "";
    }

    getSendTo() {
        let sendto = $("#sendto").val();

        mailservice.resolveUserName(sendto)
            .then((data) => {
                sendtoid = data[0]._id;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    sendMail() {
        let message = $("#message").val();
        let from = localStorage.getItem("sessionUserId");

        if (message !== "") {
            let obj = {
                "doctype": "msg",
                "from": from,
                "to": sendtoid,
                "title": message,
                "archivedFrom": false,
                "archivedTo": false,
                "deletedFrom": false,
                "deletedTo": false
            };

            if (sendtoid !== "NOTFOUND") {
                mailservice.sendMail(obj)
                    .then((data) => {
                        sendtoid = "NOTFOUND";
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

    createContent() {
        return (
            <div>
                <div name="NEWMAIL">
                    <br/>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <form role="form">
                                <table className="table" style={{width: "100%", border: "1px solid lightgrey"}}>
                                    <tr>
                                        <td colspan="2">
                                            <input type="email" className="form-control" id="sendto"
                                                   placeholder="Empfänger"
                                                   style={{width: "100%", border: "2px solid lightblue"}}
                                                   onChange={this.getSendTo}>
                                            </input>
                                        </td>
                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr colspan="2">
                                        <td>
                                            <br/>
                                            <textarea name="Text1" id="message" rows="15"
                                                      style={{width: "100%", border: "2px solid lightblue"}}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <button className="btn btn-primary btn-md" type="button"
                                                        onClick={this.sendMail}><span
                                                    className="glyphicon glyphicon-envelope"></span> Senden
                                                </button>
                                            </div>
                                            <div className="col-md-1">
                                                <button className="btn btn-danger btn-md" type="button"
                                                        onClick={this.removeMail}><span
                                                    className="glyphicon glyphicon-remove"></span> Verwerfen
                                                </button>
                                            </div>
                                        </div>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
