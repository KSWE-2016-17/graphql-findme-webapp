import React from "react";
import Image from "./DefaultImage";

import PS from "../services/ProfilService";

export default class EditProfileComponent extends React.Component {

    changeAboutMe(){
        let ps = new PS();

        var about = $("#aboutme").val();
        if(about===""){
            about="find.me ist toll";
        }
        
        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function(data){
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
                <div className="col-md-10 col-md-offset-1">
                    <form>
                        <table class="table" style={{width: "100%"}}>
                            <tr>

                                <font size="4">Profilbeschreibung ändern</font>

                            </tr>
                            <tr>
                                <td>

                                    <input type="text" className="form-control" id="aboutme" style={{width:"100%"}}
                                    placeholder="Breit gebaut, braun gebrannt, 100 Kilo Hantelbank">
                                    </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                    <button onClick={this.changeAboutMe} type="submit" className="btn btn-primary">Speichern</button>
                                </td>
                            </tr>

                        </table>
                    </form>
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