import React from "react";

import LoginHeader from "../components/LoginHeader";
import TeaserComponent from "../components/TeaserComponent";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("sessionProfileId")) {
            location.href = `#/profiles/${localStorage.getItem("sessionProfileId")}`;
        }
    }

    render() {
        return (
            <div>
                <LoginHeader/>

                <div className="row" style={{backgroundColor: "#F7F7F7", paddingBottom: "2rem"}}>
                    <div className="col-md-12">
                        <h1 className="title">find.me</h1>

                        <p className="info">
                            Anhand Ihrer Interessen, Vorlieben und Vorstellungen erstellt find.me<br/>
                            eine Liste mit vielversprechenden Dates.<br/>
                            <br/>
                            Finden Sie den Richtigen.
                        </p>

                        <a className="btn btn-primary" href="#/register">Registrieren</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <TeaserComponent
                            header="Interessen"
                            description={"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."}
                            destination="#"
                        />
                    </div>
                    <div className="col-md-4">
                        <TeaserComponent
                            header="Vorlieben"
                            description={"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."}
                            destination="#"
                        />
                    </div>
                    <div className="col-md-4">
                        <TeaserComponent
                            header="Vorstellungen"
                            description={"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."}
                            destination="#"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
