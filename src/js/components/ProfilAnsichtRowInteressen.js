import React from "react";
import PS from "../services/ProfilService";

export default class RowInteressenComponent extends React.Component {

    createRowInteressen() {

        let ps = new PS();

        ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function(data){
                var stuff = data[0].aboutme;

                var dummy = stuff.split("#");

                var interests = dummy[1].split("+");

                var finished = dummy[0] + "#";

                for(let x=0;x<10;x++){
                    var help = "#" + x;
                    if(x<interests.length) {
                        $(help).text(interests[x]);
                    }
                    else{
                        $(help).hide();
                    }
                }

            })
            .catch(function(err){
                console.log(err);
            });



        return  <div> <div className="row">
                <div className="col-md-12">
                    <h1>Interessen</h1>
                    <br />
                </div>
            </div>
            <div className="row">
            <div class="col-md-12">
            <div id="1" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="2" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="3" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="4" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="5" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="6" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="7" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="8" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="0" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

                <div id="9" className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

        </div>
        </div>
        </div>;
    }

    render() {
        return (
            <div>{this.createRowInteressen()}
                <br />
                <br />
                <hr />
            </div>
        );
    }
}
