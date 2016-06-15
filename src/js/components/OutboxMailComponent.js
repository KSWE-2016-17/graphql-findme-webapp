import React from "react";
import Image from "./DefaultImage";
import OutboxService from "../services/OutboxService"

export default class OutboxMailComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    createContent() {
        var messages = [];

        let outboxService = new OutboxService();

        outboxService.findMsgFromMe(localStorage.getItem("sessionUserId"), {
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
                                        <div style="background-color: #ccccff; border: 2px solid #000000">
                                            <p data-from="${messages[i].to}">${messages[i].to}</p>
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

                    $("#outboxMessages").append(msg);

                    outboxService.resolveUserName(messages[i].to, {
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
            <div id="outboxMessages" className="container"></div>
        );
    }
}