import React from "react";

export default class RegistrierenViewFormComponent extends React.Component {

    createRegistrierenViewForm() {
        return(<div className="container">
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>Benutzername:</td>
                            <td><input type="text" value="" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Emailadresse:</td>
                            <td><input type="text" value="" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Passwort:</td>
                            <td><input type="password" value="" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Passwort (wdh.):</td>
                            <td><input type="password" value="" size="50"/></td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>Geschlecht:</td>
                            <td><label><input type="radio" name="optradio"/> m&auml;nnlich</label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><input type="radio" name="optradio"/> weiblich</label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><input type="radio" name="optradio"/> sonstiges</label></td>
                        </tr>
                        <tr>
                            <td>Geburtsjahr:</td>
                            <td><label><input type="text" name="sonstiges"/></label></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-5">
                    <div className="checkbox">
                        <br/>
                        <label><input type="checkbox" value=""/>AGB gelesen</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-md-offset-3">
                        <button className="btn btn-primary btn-md btn-block" type="button">
                            <span className="glyphicon"></span> Registrieren</button>
                </div>
                <br/>
            </div>
            <div className="row">
                <hr/>
                <div className="col-md-1">
                    <span>&copy;find.me2016</span>
                </div>
            </div>
        </div>);
    }

    render() {
        return (
            <div>{this.createRegistrierenViewForm()}
            </div>
        );
    }
}