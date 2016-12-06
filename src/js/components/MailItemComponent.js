import React from "react";

import DefaultImage from "./DefaultImage";

import InboxService from "../services/InboxService";

export default class MailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onOpenMail = this.onOpenMail.bind(this);
        this.onArchiveMail = this.onArchiveMail.bind(this);
        this.onDeleteMail = this.onDeleteMail.bind(this);
    }

    render() {
        let self = this;

        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        <DefaultImage/>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                                <p>{self.props.data.user.login ? self.props.data.user.login : self.props.data.message.from}</p>
                            </div>
                            <div style={{border: "1px solid #000000"}}>
                                <p>{self.props.data.message.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div>
                            <div>
                                <button className="btn btn-default btn-sm" type="button" onClick={self.onOpenMail}>
                                    <span className="glyphicon glyphicon-eye-open"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-warning btn-sm" type="button" onClick={self.onArchiveMail}>
                                    <span className="glyphicon glyphicon-floppy-disk"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-danger btn-sm" type="button" onClick={self.onDeleteMail}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

    onOpenMail(event) {
        console.log("pressed open");
    }

    onArchiveMail(event) {
        console.log("pressed archive");
        let self = this;
        self.props.data.message.archivedTo = true;
        let is = new InboxService();
        is.updateMsg(self.props.data.message);
    }

    onDeleteMail(event) {
        console.log("pressed delete");
        let self = this;
        let is = new InboxService();
        self.props.data.message.deletedTo = true;
        is.updateMsg(self.props.data.message);
    }
}
