import React from "react";
import Image from "./DefaultImage";

export default class EditProfileInterestsComponent extends React.Component {


    createContent() {
        return <div className="container">
            <br/>
            <div>

                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <form>
                            <table class="table" style={{width: "100%"}}>
                                <tr>
                                    <font size="4">Interessen entfernen</font>
                                    <br/>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-md-10 col-md-offset-1">
                                                <button type="button" className="btn btn-link"><span className="glyphicon glyphicon-remove text-danger"></span><span className="text-muted">Tanzen</span></button>
                                                <button type="button" className="btn-link"><span className="glyphicon glyphicon-remove text-danger"></span><span className="text-muted"> Laufen</span></button>
                                                <button type="button" className="btn-link"><span className="glyphicon glyphicon-remove text-danger"></span><span className="text-muted"> Futsal</span></button>
                                                <button type="button" className="btn-link"><span className="glyphicon glyphicon-remove text-danger"></span><span className="text-muted"> Fußball</span></button>
                                                <button type="button" className="btn-link"><span className="glyphicon glyphicon-remove text-danger"></span><span className="text-muted"> Fischen</span></button>
                                            </div>
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <br/>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font size="4">Neues Interesse hinzufügen</font>
                                        <br/>
                                        <input type="text" className="form-control" id="exampleInputEmail1" style={{width:"50%"}}
                                               placeholder="Dein Hobby ;)">
                                        </input>
                                        <br/>
                                        <button type="submit" className="btn btn-success">
                                            <span className="glyphicon glyphicon-ok"></span> Hinzufügen</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                <br/><hr/>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <button type="button" className="btn btn-primary btn-lg btn-block">
                            <span className="glyphicon glyphicon-chevron-left"></span> Zurück zum Profil
                        </button>
                    </div>
                </div>


            </div>

            <br/><br/><br/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}