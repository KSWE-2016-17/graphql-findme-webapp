import React from "react";

import DatingService from "../services/DatingService";
import ProfilService from "../services/ProfilService";

export default class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.searchUser = this.searchUser.bind(this);
    }


    searchUser(){
        var name = "";
        name = $("#searchField").val();

        if(name === ""){
            alert("Suchfeld ist leer!");
        } else {
            let datingService = new DatingService();
            datingService.findIdByName(name, {
                success: function(data) {
                    let profilService = new ProfilService();

                    profilService.findProfileByUserId(data[0]._id)
                        .then(function (data) {
                            location.href = "#/profile/" + data[0]._id;
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }

    }

    createNavigation() {
        return                 <div>
            <nav className="navbar navbar-default">
                <div>
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" >findMe</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><a href="#/profile"><span className="glyphicon glyphicon-user"></span> Profil</a></li>
                            <li><a href="#/dating"><span className="glyphicon glyphicon-send"></span> Dating</a></li>
                            <li><a href="#/friendstab"><span className="glyphicon glyphicon-asterisk"></span> Freunde</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-envelope"></span> Nachrichten <span class="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#/mails/inbox">Posteingang</a></li>
                                    <li><a href="#/mails/new">Nachricht erstellen</a></li>
                                    <li><a href="#/mails/outbox">gesendete Nachrichten</a></li>
                                    <li><a href="#/mails/archive">Archiv</a></li>
                                </ul>
                            </li>
                            <li>
                                <form role="form" className="navbar-form navbar-input-group">
                                    <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default btn-sm" type="button" onClick={this.searchUser}><span className="glyphicon glyphicon-search"></span></button>
                            </span>
                                        <div className="form-group">
                                            <input id="searchField" type="text" className="form-control input-sm" placeholder="Suche" />
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#/settings"><span className="glyphicon glyphicon-wrench"></span> Einstellungen</a></li>
                            <li><a href="#/logout"><span className="glyphicon glyphicon-log-out"></span> ausloggen</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>;
    }

    render() {
        return (
            <div>{this.createNavigation()}</div>
        );
    }
}
