import React from "react";

import DatingService from "../services/DatingService";
import ProfilService from "../services/ProfilService";

export default class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.searchUser = this.searchUser.bind(this);

        this.datingService = new DatingService();
        this.profileService = new ProfilService();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div>
                        <div className="navbar-header">
                            <button className="navbar-toggle" type="button" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" role="button">findMe</a>
                        </div>

                        <div id="myNavbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href={`#/profiles/${localStorage.getItem("sessionProfileId")}`}>
                                        <span className="glyphicon glyphicon-user"></span> Profil
                                    </a>
                                </li>
                                <li>
                                    <a href="#/dating">
                                        <span className="glyphicon glyphicon-send"></span> Dating
                                    </a>
                                </li>
                                <li>
                                    <a href="#/friendstab">
                                        <span className="glyphicon glyphicon-asterisk"></span> Freunde
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" role="button" data-toggle="dropdown">
                                        <span className="glyphicon glyphicon-envelope"></span> Nachrichten
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#/mails/inbox">Posteingang</a>
                                        </li>
                                        <li>
                                            <a href="#/mails/outbox">Postausgang</a>
                                        </li>
                                        <li>
                                            <a href="#/mails/new">Neue Nachricht</a>
                                        </li>
                                        <li>
                                            <a href="#/mails/archive">Archiv</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <form className="navbar-form navbar-input-group" role="form"
                                          onSubmit={this.searchUser}>
                                        <div className="input-group">
                                            <div className="form-group">
                                                <input id="searchField" className="form-control input-sm" type="text"
                                                       placeholder="Suche"/>
                                            </div>
                                            <div className="input-group-btn">
                                                <button className="btn btn-default btn-sm" type="submit">
                                                    <span className="glyphicon glyphicon-search"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#/settings">
                                        <span className="glyphicon glyphicon-wrench"></span> Einstellungen
                                    </a>
                                </li>
                                <li>
                                    <a href="#/logout">
                                        <span className="glyphicon glyphicon-log-out"></span> Ausloggen
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    searchUser() {
        let name = $("#searchField").val();

        if (name.trim().length === 0) {
            alert("Suchfeld ist leer!");
        } else {
            this.datingService.findIdByName(name)
                .then((data) => {
                    return this.profilService.findProfileByUserId(data[0]._id);
                })
                .then((data) => {
                    location.href = "#/profile/" + data[0]._id;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
