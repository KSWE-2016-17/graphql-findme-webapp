import React from "react";

export default class RowInteressenComponent extends React.Component {

    createRowInteressen() {
        return  <div className="container"> <div className="row">
                <div className="col-md-12">
                    <h1>Interessen</h1>
                    <br />
                </div>
            </div>
            <div className="row">
            <div class="col-md-12">
            <div className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Festivals</div>

             <div className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Tanzen</div>

             <div className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Laufen</div>

             <div className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Bowling</div>

             <div className="box_interessen" style={{color:"#ffffff", backgroundColor:"#eb9316",
             fontWeight:"bold", borderRadius:"4px", float:"left", paddingTop:"5px",
             paddingBottom:"5px", paddingLeft:"15px", paddingRight:"15px",
             marginTop:"10px", marginBottom:"10px", marginRight:"10px", marginLeft:"0px"}}>Esen gehen</div>
        </div>
        </div>
        </div>;
    }

    render() {
        return (
            <div className="container">{this.createRowInteressen()}
                <br />
                <br />
                <hr />
            </div>
        );
    }
}
