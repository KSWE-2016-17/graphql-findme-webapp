import React from "react";
import Image from "./DefaultImage";

export default class ArchiveMailComponent extends React.Component {


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
                            <div style={{backgroundColor: "#ffffcc", border: "2px solid #000000"}}>
                                <p>Susan Whitfield</p>
                            </div>
                            <div style={{border: "1px solid #000000"}}>
                                <p>Bla Prag blabla</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div>
                            <div>
                                <button className="btn btn-default btn-sm" type="button"><span className="glyphicon glyphicon-eye-open"></span></button>
                            </div><div>
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