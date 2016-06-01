import React from "react";

export default class DatingViewContentComponent extends React.Component {

    createDatingViewContentComponent() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <br/>
                    <br/>
                    <button className="btn btn-primary btn-md" type="button">
                        <span className="glyphicon glyphicon-search"></span>Automatische Suche</button>
                </div>
            </div>
            <div style={{width:"80%"}}><br/><hr/></div>

            <h1>benutzerdefinierte Suche:</h1>
            <br/>

            <form role="form">
                <table style={{width:"60%"}}>
                    <tr>
                        <td>Ich suche eine/n:</td>
                        <td>
                            <select className="form-control" id="geschlecht">
                                <option>Frau</option>
                                <option>Mann</option>
                            </select>
                        </td>
                        <td></td>
                        <td>erweiterte Suche:</td>
                    </tr>
                    <tr>
                        <td>Alter:</td>
                        <td>
                            <select className="form-control" id="alter">
                                <option>25 - 30</option>
                                <option>30 - ... </option>
                            </select>
                        </td>
                        <td></td>
                        <td><input type="checkbox" value=""></input>Nichtraucher/in</td>
                    </tr>
                    <tr>
                        <td>Statur:</td>
                        <td>
                            <select className="form-control" id="statur">
                                <option>normal</option>
                                <option>gesetzt...</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Haarfarbe:</td>
                        <td>
                            <select className="form-control" id="haarfarbe">
                                <option>br&uuml;nett</option>
                                <option>blond</option>
                                <option>schwarz</option>
                                <option>rot</option>
                                <option>braun</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gr&ouml;&szlig;e:</td>
                        <td><br/>von:
                            <select className="form-control" id="groeseVon">
                                <option>150 - 160</option>
                                <option>160 - 170</option>
                                <option>170 - 180</option>
                                <option>180 - ...</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><br/>bis:
                            <select className="form-control" id="groesseBis">
                                <option>normal</option>
                                <option>...</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <br/>
                            <button className="btn btn-primary btn-md" type="submit">
                                <span className="glyphicon glyphicon-search"></span>Suche</button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </form>

            </div>;
        }

    render() {
        return (
            <div>{this.createDatingViewContentComponent()}</div>
            );
    }
}