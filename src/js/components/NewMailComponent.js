import React from "react";
import Image from "./DefaultImage";
import NewMailService from "../services/NewMailService"

var sendtoid = "";
let mailservice = new NewMailService();

export default class NewMailComponent extends React.Component {


    getSendTo(){

        var sendto = $("#sendto").val();

        mailservice.resolveUserName(sendto, {
            success: function (data) {
                sendtoid = data[0]._id;
            },
            error: function (err) {
                console.log(err);
                sendtoid = "NOTFOUND";
            }
        });
    }

    removeMail(){
        alert("REMOVED");
    }

    sendMail(){

        //var sendto = $("#sendto").val();
        var message = $("#message").val();
        var from = localStorage.getItem("sessionUserId");
        //var sendtoid = "";
        if(message!=="") {
           // let mailservice = new NewMailService();

            // mailservice.resolveUserName(sendto, {
            //     success: function (data) {
            //         sendtoid = data[0]._id;
            //     },
            //     error: function (err) {
            //         console.log(err);
            //         sendtoid = "";
            //     }
            // });



                var obj = {
                    "doctype": "msg",
                    "from": from,
                    "to": sendtoid,
                    "title": message
                }

            if (sendtoid !== "NOTFOUND") {
                mailservice.sendMail(obj, {
                    success: function (data) {
                        location.href = "#/mails/outbox";
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
            else{
                alert("USER NOT FOUND");
            }
        }

        else {
                alert("EMPTY FIELDS");
        }

    }


    createContent() {
        return <div className="container">
            <div name="NEWMAIL">
                <br/>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <form role="form">
                            <table class="table" style={{width: "100%", border: "1px solid lightgrey"}}>
                                <tr>
                                    <td colspan="2">
                                    <input type="email" class="form-control" id="sendto" placeholder="Empfänger"
                                    style={{width:"100%", border: "2px solid lightblue"}} onChange={this.getSendTo}>
                                        </input>
                                        </td>
                                </tr>
                                <tr>

                                </tr>
                                <tr colspan="2">
                                    <td>
                                        <br/>
                                        <textarea name="Text1" id="message" rows="15" style={{width:"100%", border:"2px solid lightblue"}}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <div className="row">
                                        <div className="col-md-10">
                                    <button className="btn btn-primary btn-md" type="button" onClick={this.sendMail}><span className="glyphicon glyphicon-envelope" ></span> Senden</button>
                                            </div>
                                        <div className="col-md-1">
                                    <button className="btn btn-danger btn-md" type="button" onClick={this.removeMail}><span className="glyphicon glyphicon-remove" ></span> Verwerfen</button>
                                            </div>
                                </div>
                                </tr>
                                </table>
                        </form>
            </div>
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