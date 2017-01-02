import React from "react";

import DatingService from "../services/DatingService";

export default class DatingViewContentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResultElements: []
        };

        this.showSearchResult = this.showSearchResult.bind(this);

        this.datingService = new DatingService();
    }

    render() {
        return (
            <div>
                <h1>Dating</h1>

                <div className="row">
                    <div className="col-sm-12">
                        <h3>Automatische Suche</h3>

                        <button className="btn btn-primary" type="button">
                            <span className="glyphicon glyphicon-search"></span> Suche starten
                        </button>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-sm-12">
                        <h3>Benutzerdefinierte Suche</h3>

                        <div className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">Geschlecht</label>
                                </div>

                                <div className="col-sm-10">
                                    <select id="gender" className="form-control">
                                        <option>männlich</option>
                                        <option>weiblich</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">Alter</label>
                                </div>

                                <div className="col-sm-1">
                                    <label className="control-label">von</label>
                                </div>

                                <div className="col-sm-4">
                                    <select id="alterVon" className="form-control">
                                        <option>beliebig</option>
                                        <option>18</option>

                                        {(() => {
                                            let elements = [];

                                            _.times(15, (i) => {
                                                elements.push(<option key={Math.random()}>{20 + i * 5}</option>);
                                            });

                                            return elements;
                                        })()}
                                    </select>
                                </div>

                                <div className="col-sm-1">
                                    <label className="control-label">bis</label>
                                </div>

                                <div className="col-sm-4">
                                    <select id="alterBis" className="form-control">
                                        <option>beliebig</option>
                                        <option>18</option>

                                        {(() => {
                                            let elements = [];

                                            _.times(15, (i) => {
                                                elements.push(<option key={Math.random()}>{20 + i * 5}</option>);
                                            });

                                            return elements;
                                        })()}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">Statur</label>
                                </div>

                                <div className="col-sm-10">
                                    <select id="statur" className="form-control">
                                        <option>beliebig</option>
                                        <option>schlank</option>
                                        <option>normal</option>
                                        <option>gesetzt</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">Haarfarbe</label>
                                </div>

                                <div className="col-sm-10">
                                    <select id="haarfarbe" className="form-control">
                                        <option>beliebig</option>
                                        <option>br&uuml;nett</option>
                                        <option>blond</option>
                                        <option>schwarz</option>
                                        <option>rot</option>
                                        <option>braun</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">Größe</label>
                                </div>

                                <div className="col-sm-1">
                                    <label className="control-label">von</label>
                                </div>

                                <div className="col-sm-4">
                                    <select id="groeseVon" className="form-control">
                                        <option>beliebig</option>
                                        {(() => {
                                            let elements = [];

                                            _.times(10, (i) => {
                                                elements.push(<option key={Math.random()}>{120 + i * 10}</option>);
                                            });

                                            return elements;
                                        })()}
                                    </select>
                                </div>

                                <div className="col-sm-1">
                                    <label className="control-label">bis</label>
                                </div>

                                <div className="col-sm-4">
                                    <select id="groesseBis" className="form-control">
                                        <option>beliebig</option>
                                        {(() => {
                                            let elements = [];

                                            _.times(10, (i) => {
                                                elements.push(<option key={Math.random()}>{120 + i * 10}</option>);
                                            });

                                            return elements;
                                        })()}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label className="control-label">
                                        Raucher
                                    </label>
                                </div>

                                <div className="col-sm-10">
                                    <label className="radio-inline">
                                        <input id="smoker" type="radio"/> Ja
                                    </label>
                                    <label className="radio-inline">
                                        <input id="smoker" type="radio"/> Nein
                                    </label>
                                    <label className="radio-inline">
                                        <input id="smoker" type="radio"/> Egal
                                    </label>
                                </div>
                            </div>

                            <button className="btn btn-primary" type="button"
                                    onClick={this.showSearchResult}>
                                <span className="glyphicon glyphicon-search"></span> Suche
                            </button>
                        </div>

                        <div id="searchresult" className="row" style={{
                            marginTop: "2rem"
                        }}>
                            <div className="col-sm-12">
                                {this.state.searchResultElements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showSearchResult() {
        this.datingService.findAll()
            .then((data) => {
                let searchResultElements = [];

                data.forEach((result) => {
                    if (result.haircolor === haircolor) {
                        searchResultElements.push(
                            <div key={Math.random()}>
                                {result.firstname} {result.lastname}
                            </div>
                        );
                    }
                });

                this.setState({
                    searchResultElements: searchResultElements
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }
}
