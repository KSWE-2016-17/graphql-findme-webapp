import React from "react";
import Image from "./DefaultImage";
import InboxService from "../services/InboxService"

export default class InboxMailComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    createContent() {
        var messages = [];

        let inboxService = new InboxService();

        inboxService.findMsgToMe(localStorage.getItem("sessionUserId"), {
            success: function (data) {
                messages = data;

                for (var i = 0; i < messages.length; i++) {
                    let avatar = <Image />;
                    let msg =
                        `<div>
                            <br/>
                            <div class="row">
                                <div class="col-md-1">
                                    ${avatar}
                                </div>
                                <div class="col-md-10">
                                    <div>
                                        <div style="background-color: #ccffcc; border: 2px solid #000000">
                                            <p data-from="${messages[i].from}">${messages[i].from}</p>
                                        </div>
                                        <div style="border: 1px solid #000000">
                                            <p>${messages[i].title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <div>
                                        <div>
                                            <button class="btn btn-default btn-sm" type="button">
                                                <span class="glyphicon glyphicon-eye-open"></span>
                                            </button>
                                        </div>
                                        <div>
                                            <button class="btn btn-warning btn-sm" type="button">
                                                <span class="glyphicon glyphicon-floppy-disk"></span>
                                            </button>
                                        </div>
                                        <div>
                                            <button class="btn btn-danger btn-sm" type="button">
                                                <span class="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>`;

                    $("#inboxMessages").append(msg);

                    inboxService.resolveUserName(messages[i].from, {
                        success: function (data) {
                            $("p[data-from=" + data[0]._id + "]").text(data[0].login);
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    render() {
        this.createContent();

        return (
            <div id="inboxMessages" className="container"></div>
        );
    }
}



/* <div name="MAIL">
<br/>
<div className="row">
    <div className="col-md-1">
    <Image/>
    </div>
    <div className="col-md-10">
    <div>
    <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
<p>fromeqjoqwej</p>
</div>
<div style={{border: "1px solid #000000"}}>
<p>TEXT</p>
</div>
</div>
</div>
<div className="col-md-1">
    <div>

    <div>
    <button className="btn btn-default btn-sm" type="button"><span className="glyphicon glyphicon-eye-open"></span></button>
    </div>
    <div>
    <button className="btn btn-warning btn-sm" type="button"><span className="glyphicon glyphicon-floppy-disk"></span></button>
    </div>
    <div>
    <button className="btn btn-danger btn-sm" type="button"><span className="glyphicon glyphicon-trash"></span></button>
    </div></div>
    </div>
    </div>
    <hr/>
    </div>*/
