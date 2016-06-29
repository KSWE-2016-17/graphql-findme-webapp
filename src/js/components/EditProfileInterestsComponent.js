import React from "react";
import Image from "./DefaultImage";

import PS from "../services/ProfilService";

export default class EditProfileInterestsComponent extends React.Component {

    updateInterests(){

        let ps = new PS();

        var complete = "#";

        for(let x=0;x<10;x++){
            var help = "#" + x;
            if($(help).val()===""){

            }else{
                var nwo = "+" + $(help).val();
                complete = complete.concat(nwo);
            }
        }

        console.log(complete);


        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function(data){

                var dummy = data[0].aboutme;

                var parts = dummy.split("{");



                var about = parts[0] + "{" + complete;

                data[0].aboutme = about;

                ps.updateProfile(data[0])
                    .then(function(data){
                        console.log("SUCCESS");
                    })
                    .catch(function(err){
                        console.log(err);
                    });

            })
            .catch(function(err){
                console.log(err);
            });



    }

    createContent() {

        let ps = new PS();

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function(data){
                var dummy = data[0].aboutme;

                var i = dummy.split("#");

                var interests = i[1].split("+");


                for(let x=0;x<10;x++){
                    var help = "#" + x;
                    if(x<interests.length){
                        $(help).val(interests[x]);
                    }
                }


            })
            .catch(function(err){
                console.log(err);
            });


        return <div className="container">
            <br/>
            <div>

                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <form>
                            <table class="table" style={{width: "100%"}}>
                                <tr>
                                    <font size="4">Interessen ändern</font>
                                    <br/>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-md-10 col-md-offset-1">
                                                <input id="0" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="1" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="2" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="3" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="4" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="5" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="6" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="7" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="8" type="text" placeholder="Wird nicht angezeigt"></input>
                                                <input id="9" type="text" placeholder="Wird nicht angezeigt"></input>
                                            </div>

                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <br/>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <br/>
                                        <button onClick={this.updateInterests} type="submit" className="btn btn-success">
                                            <span className="glyphicon glyphicon-ok"></span> Hinzufügen</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                <br/><hr/>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <a href="#/profile" type="button" className="btn btn-primary btn-lg btn-block">
                            <span className="glyphicon glyphicon-chevron-left"></span> Zurück zum Profil
                        </a>
                    </div>
                </div>


            </div>

            <br/><br/><br/>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}