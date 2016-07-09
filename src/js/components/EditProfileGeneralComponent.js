import React from "react";
import Image from "./DefaultImage";

import PS from "../services/ProfilService";

export default class EditProfileGeneralComponent extends React.Component {

    changeLooks(){
        let ps = new PS();

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function(data){

                data[0].familystatus = $("#status").val();

                data[0].privacy.friends = $("#privacy").val();
                data[0].privacy.pictures = $("#privacy").val();

                if($("#children").val()!=="")
                data[0].children = $("#children").val();

                data[0].haircolor = $("#hair").val();

                data[0].eyecolor = $("#eye").val();

                data[0].figure = $("#figure").val();

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
        return <div>
            <br/>
            <div>
                <div className="row">
                    <div className="col-md-3 col-md-offset-1">
                        <label>Familienstatus</label>
                        <select className="form-control" id="status">
                            <option value="0">Single</option>
                            <option value="1">Geschieden</option>
                            <option value="2">Verheiratet</option>
                        </select>
                        <label>Kinder</label>
                        <br></br>
                        <input id="children" type="text" placeholder="Kinderanzahl"></input>
                        <br></br>
                        <label>Privatsphäre</label>
                        <select className="form-control" id="privacy">
                            <option value="0">Privat</option>
                            <option value="1">Für Freunde</option>
                            <option value="2">Öffentlich</option>
                        </select>
                        <label>Haarfarbe</label>
                        <select className="form-control" id="hair">
                            <option value="0">Rot</option>
                            <option value="1">Blond</option>
                            <option value="2">Brünette</option>
                            <option value="3">Schwarz</option>
                        </select>
                        <label>Augenfarbe</label>
                        <select className="form-control" id="eye">
                            <option value="0">Blau</option>
                            <option value="1">Grün</option>
                            <option value="2">Braun</option>
                        </select>
                        <label>Statur</label>
                        <select className="form-control" id="figure">
                            <option value="0">Dünn</option>
                            <option value="1">Normal</option>
                            <option value="2">Schrank</option>
                        </select>
                        <br></br>
                        <button onClick={this.changeLooks} type="submit" className="btn btn-primary">Speichern</button>
                    </div>
                </div>




            </div>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}