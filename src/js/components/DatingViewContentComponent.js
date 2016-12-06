import React from "react";

import DatingService from "../services/DatingService";

export default class DatingViewContentComponent extends React.Component {

    showSearchResult() {
        let search_gender;
        let search_alterVon;
        let search_alterBis;
        let search_statur;
        let search_nichtraucher;
        let search_haarfarbe;
        let search_groesseVon;
        let search_groesseBis;

        search_gender = $("#gender").val();
        search_alterVon = $("#alterVon").val();
        search_alterBis = $("#alterBis").val();
        search_statur = $("#statur").val();
        //search_nichtraucher = document.getElementById("smoker").checked;
        search_haarfarbe = $("#haarfarbe").val();
        search_groesseVon = $("#groesseVon").val();
        search_groesseBis = $("#groesseBis").val();

        let datingService = new DatingService();
        datingService.findAll(callback, {
            success: function (data) {
                let size = data.size;
                let i = 1;
                //let treffer; uebereinstimmende profile
                while (i <= size) {
                    if ((data[i].haircolor).equals(search_haarfarbe)) {
                        document.getElementById("searchresult").innerHTML += data[i].firstname;
                    }
                    i++;
                }
            },
            error: function (err) {
                console.log(err);
            }
        });

    }

    createDatingViewContentComponent() {
        return <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <br/>
                    <br/>
                    <button className="btn btn-primary btn-md" type="button">
                        <span className="glyphicon glyphicon-search"></span>Automatische Suche
                    </button>
                </div>
            </div>
            <div style={{width: "80%"}}><br/>
                <hr/>
            </div>

            <h1>benutzerdefinierte Suche:</h1>
            <br/>

            <form role="form">
                <table style={{width: "60%"}}>
                    <tr>
                        <td>Ich suche eine/n:</td>
                        <td>
                            <select className="form-control" id="gender">
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
                            <select className="form-control" id="alterVon">
                                <option>beliebig</option>
                                <option>18</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                                <option>35</option>
                                <option>40</option>
                                <option>45</option>
                                <option>50</option>
                                <option>55</option>
                                <option>60</option>
                                <option>65</option>
                                <option>70</option>
                                <option>75</option>
                                <option>80</option>
                            </select>
                            <select className="form-control" id="alterBis">
                                <option>beliebig</option>
                                <option>18</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                                <option>35</option>
                                <option>40</option>
                                <option>45</option>
                                <option>50</option>
                                <option>55</option>
                                <option>60</option>
                                <option>65</option>
                                <option>70</option>
                                <option>75</option>
                                <option>80</option>
                            </select>
                        </td>
                        <td></td>
                        <td><input type="checkbox" id="smoker" value=""></input>Nichtraucher/in</td>
                    </tr>
                    <tr>
                        <td>Statur:</td>
                        <td>
                            <select className="form-control" id="statur">
                                <option>beliebig</option>
                                <option>schlank</option>
                                <option>normal</option>
                                <option>gesetzt</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Haarfarbe:</td>
                        <td>
                            <select className="form-control" id="haarfarbe">
                                <option>beliebig</option>
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
                                <option>beliebig</option>
                                <option>150</option>
                                <option>160</option>
                                <option>170</option>
                                <option>180</option>
                                <option>190</option>
                                <option>200</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><br/>bis:
                            <select className="form-control" id="groesseBis">
                                <option>beliebig</option>
                                <option>150</option>
                                <option>160</option>
                                <option>170</option>
                                <option>180</option>
                                <option>190</option>
                                <option>200</option>
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
                                <span className="glyphicon glyphicon-search" onclick={this.showSearchResult}></span>Suche
                            </button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <div id="searchresult">

                </div>
            </form>

        </div>;
    }

    render() {
        return (
            <div>{this.createDatingViewContentComponent()}</div>
        );
    }
}
