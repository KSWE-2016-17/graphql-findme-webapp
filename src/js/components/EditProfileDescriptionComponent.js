import React from "react";

import PS from "../services/ProfilService";

export default class EditProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.changeAboutMe = this.changeAboutMe.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Profilbeschreibung</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="aboutme">Über mich</label>
                                <input id="aboutme" type="text" name="aboutme" className="form-control"
                                       placeholder="Breit gebaut, braun gebrannt, 100 Kilo Hantelbank"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" onClick={this.changeAboutMe}>
                                    Speichern
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    changeAboutMe() {
        let ps = new PS();

        var about = $("#aboutme").val();
        if (about === "") {
            about = "find.me ist toll";
        }

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                //data[0].aboutme = about;

                //var dummy = about;
                var dummy = data[0].aboutme;

                var parts = dummy.split("{");

                parts[0] = about;

                about = parts[0] + "{" + parts[1];

                console.log(parts[0]);
                console.log(parts[1]);

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
