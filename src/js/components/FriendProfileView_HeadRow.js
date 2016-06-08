import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class FriendProfileView_HeadRow extends React.Component {

    reportUser(){
        //logiklogiklogik
        alert("Report");
    }

    create() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <DefaultProfilImage />
                        <br /><br />
                        <a href="#/mails/new" type="button" className="btn btn-primary"><span className="glyphicon glyphicon-envelope"></span> Nachricht senden</a>
                    </div>
			    <div className="col-md-8">			    
                    <h1 style={{float:"left"}}>Stefan Schmidt</h1>
                    <div className="box_friend" style={{color:"#ffffff", backgroundColor:"#009900",
                        borderRadius:"4px", float:"left",  paddingTop:"2px", paddingBottom:"2px", 
                        paddingLeft:"5px", paddingRight:"5px", marginTop:"15px", marginLeft:"10px"}}>befreundet
                    </div>
                    <div style={{clear:"both"}}/>
                    <p>
                    "Reden ist Schweigen - Silber ist Gold."<br />
                    Unbekanntes Genie
                    </p>
                </div>
                    <div className="col-md-2">

                        <button type="button" id="REPORT" className="btn btn-primary" onClick={this.reportUser}>

                            <span className="glyphicon glyphicon-screenshot"></span> Benutzer melden
                        </button> 
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>{this.create()}</div>
        );
    }


}
