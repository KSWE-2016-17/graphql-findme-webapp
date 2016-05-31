import React from "react";
import Image from "./DefaultImage";

export default class NewMailComponent extends React.Component {


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
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Empfänger"
                                    style={{width:"100%", border: "2px solid lightblue"}}>
                                        </input>
                                        </td>
                                </tr>
                                <tr>

                                </tr>
                                <tr colspan="2">
                                    <td>
                                        <br/>
                                        <textarea name="Text1" rows="15" style={{width:"100%", border:"2px solid lightblue"}}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <div className="row">
                                        <div className="col-md-10">
                                    <button className="btn btn-primary btn-md" type="button"><span className="glyphicon glyphicon-envelope"></span> Senden</button>
                                            </div>
                                        <div className="col-md-1">
                                    <button className="btn btn-danger btn-md" type="button"><span className="glyphicon glyphicon-remove"></span> Verwerfen</button>
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