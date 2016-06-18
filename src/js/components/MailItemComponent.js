import React from "react";

import Image from "./DefaultImage";

export default class MailComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        <Image />
                    </div>
                    <div className="col-md-10">
                        <div>
                            <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                                <p>{this.props.data.user.login ? this.props.data.user.login : this.props.data.message.from}</p>
                            </div>
                            <div style={{border: "1px solid #000000"}}>
                                <p>{this.props.data.message.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div>
                            <div>
                                <button className="btn btn-default btn-sm" type="button">
                                    <span className="glyphicon glyphicon-eye-open"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-warning btn-sm" type="button">
                                    <span className="glyphicon glyphicon-floppy-disk"></span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-danger btn-sm" type="button">
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
}