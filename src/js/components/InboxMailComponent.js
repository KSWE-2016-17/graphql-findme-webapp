import React from "react";
import Image from "./DefaultImage";

export default class InboxMailComponent extends React.Component {


    createContent() {
        return <div className="container">
            <div name="MAIL">
            <br/>
            <div className="row">
                <div className="col-md-1">
                <Image/>
                    </div>
                <div className="col-md-10">
                    <div>
                        <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                            <p>Susan Whitfield</p>
                        </div>
                        <div style={{border: "1px solid #000000"}}>
                            <p>Du reist auch gerne in neue Städte? Coool, ich auch, warst
                            du schonmal in Prag?

                            Gruss
                            Susan</p>
                        </div>
                        </div>
                    </div>
                <div className="col-md-1">
                    <div>

                        <div>
                    <a href="#/mails/32" className="btn btn-default btn-sm" type="button"><span className="glyphicon glyphicon-eye-open"></span></a>
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
                </div>
            <div name="MAIL">
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        <Image/>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                                <p>Susan Whitfield</p>
                            </div>
                            <div style={{border: "1px solid #000000"}}>
                                <p>Du reist auch gerne in neue Städte? Coool, ich auch, warst
                                    du schonmal in Prag?

                                    Gruss
                                    Susan</p>
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
            </div><div name="MAIL">
            <br/>
            <div className="row">
                <div className="col-md-1">
                    <Image/>
                </div>
                <div className="col-md-10">
                    <div>
                        <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                            <p>Susan Whitfield</p>
                        </div>
                        <div style={{border: "1px solid #000000"}}>
                            <p>Du reist auch gerne in neue Städte? Coool, ich auch, warst
                                du schonmal in Prag?

                                Gruss
                                Susan</p>
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
        </div><div name="MAIL">
            <br/>
            <div className="row">
                <div className="col-md-1">
                    <Image/>
                </div>
                <div className="col-md-10">
                    <div>
                        <div style={{backgroundColor: "#ccffcc", border: "2px solid #000000"}}>
                            <p>Susan Whitfield</p>
                        </div>
                        <div style={{border: "1px solid #000000"}}>
                            <p>Du reist auch gerne in neue Städte? Coool, ich auch, warst
                                du schonmal in Prag?

                                Gruss
                                Susan</p>
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
        </div>

            </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}