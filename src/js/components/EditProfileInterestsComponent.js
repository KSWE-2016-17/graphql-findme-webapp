import React from "react";

import PS from "../services/ProfilService";

export default class EditProfileInterestsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateInterests = this.updateInterests.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Interessen</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="0" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="1" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="2" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="3" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="4" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="5" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="6" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="7" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="8" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input id="9" type="text" className="form-control"
                                               placeholder="Interesse eingeben"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success"
                                                onClick={this.updateInterests}>
                                            <span className="glyphicon glyphicon-ok"></span> Hinzufügen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <a href="#/profile" type="button" className="btn btn-primary btn-lg btn-block">
                            <span className="glyphicon glyphicon-chevron-left"></span> Zurück zum Profil
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let ps = new PS();

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let dummy = data[0].aboutme;
                let i = dummy.split("#");
                let interests = i[1].split("+");

                for (let x = 0; x < 10; x++) {
                    let help = "#" + x;

                    if (x < interests.length) {
                        $(help).val(interests[x]);
                    }
                }

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    updateInterests() {
        let ps = new PS();

        let complete = "#";

        for (let x = 0; x < 10; x++) {
            let help = "#" + x;

            if ($(help).val() === "") {

            } else {
                var nwo = "+" + $(help).val();
                complete = complete.concat(nwo);
            }
        }

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let dummy = data[0].aboutme;
                let parts = dummy.split("{");
                let about = parts[0] + "{" + complete;

                data[0].aboutme = about;

                ps.updateProfile(data[0])
                    .then(function (data) {
                        console.log("SUCCESS");
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
