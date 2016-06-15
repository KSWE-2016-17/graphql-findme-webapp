import React from "react";
import Image from "./DefaultImage";
import InboxService from "../services/InboxService"

var messages = [];
var resolvedNames = [];
var length;

function findMsgToMe() {
    let inboxService = new InboxService();
    inboxService.findMsgToMe(localStorage.getItem("sessionUserId"),{
        success: function(data) {
            messages = data;
            for (var i = 0; i < messages.length; i++) {
                inboxService.resolveUserName(messages[i].from, {
                    success: function (data) {
                       // resolvedNames[i] = data[0].password;
                        resolvedNames.push(data[0]);
                    },
                    error: function (err) {
                        console.log(err);
                    },

                });
            }
        },
        error: function(err) {
            console.log(err);
        }
    });

}


findMsgToMe();

export default class InboxMailComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }

    createContent() {

        var output = [];

        for(var x=0;x<messages.length;x++) {
            var msg = (
                <div name="MAIL">
                    <br/>
                    <div className="row">
                        <div className="col-md-1">
                            <Image/>
                        </div>
                        <div className="col-md-10">
                            <div>
                                <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                                    <p id="fromid">{resolvedNames[x].login}</p>
                                </div>
                                <div style={{border: "1px solid #000000"}}>
                                    <p id="textid">{messages[x].title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div>

                                <div>
                                    <button className="btn btn-default btn-sm" type="button"><span
                                        className="glyphicon glyphicon-eye-open"></span></button>
                                </div>
                                <div>
                                    <button className="btn btn-warning btn-sm" type="button"><span
                                        className="glyphicon glyphicon-floppy-disk"></span></button>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm" type="button"><span
                                        className="glyphicon glyphicon-trash"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>

            );
            output.push(msg);
        }

        if(output[0]==null) {
            output.push(
                <div className="row">
                    <hr></hr>
                    <div className="col-md-4 col-md-offset-4">

                <p>NO NEW MESSAGES</p>
                        </div>

                </div>
            );
        }



        return (<div className="container">

            {output}

        </div>);
    }



    render() {
        return (
            <div>{this.createContent()}</div>
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