import React from "react";

import ProfileService from "../services/ProfilService";

export default class RowInteressenComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Interessen</h1>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-12">
                        <div id="interest0" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest1" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest2" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest3" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest4" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest5" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest6" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest7" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest8" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>

                        <div id="interest9" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let profileService = new ProfileService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let aboutme = data[0].aboutme;

                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts[1].split("+");
                let finished = aboutmeParts[0] + "#";

                for (let i = 0; i < 10; i++) {
                    let selector = "#interest" + i;

                    if (i < interests.length) {
                        $(selector).text(interests[i]);
                    } else {
                        $(selector).hide();
                    }
                }

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
