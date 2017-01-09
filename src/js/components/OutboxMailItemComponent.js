import React from "react";

import ImageComponent from "./ImageComponent";

import OutboxService from "../services/OutboxService";

export default class OutboxMailItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onOpenMail = this.onOpenMail.bind(this);
        this.onArchiveMail = this.onArchiveMail.bind(this);
        this.onDeleteMail = this.onDeleteMail.bind(this);

        this.outboxService = new OutboxService();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <ImageComponent/>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <div style={{backgroundColor: "#ccccff", border: "2px solid #000000"}}>
                                <p>{this.props.data.profile.firstname ? `${this.props.data.profile.firstname} ${this.props.data.profile.lastname}` : this.props.data.message.to_id}</p>
                            </div>
                            <div style={{border: "1px solid #000000"}}>
                                <p>{this.props.data.message.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div>
                            <div>
                                <button className="btn btn-default btn-sm" type="button" onClick={this.onOpenMail}>
                                    <span className="glyphicon glyphicon-eye-open"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-warning btn-sm" type="button" onClick={this.onArchiveMail}>
                                    <span className="glyphicon glyphicon-floppy-disk"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-danger btn-sm" type="button" onClick={this.onDeleteMail}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onOpenMail(event) {
    }

    onArchiveMail(event) {
        this.props.data.message.archivedFrom = true;

        this.outboxService.updateMsg(this.props.data.message);
    }

    onDeleteMail(event) {
        this.props.data.message.deletedFrom = true;

        this.outboxService.updateMsg(this.props.data.message);
    }
}
