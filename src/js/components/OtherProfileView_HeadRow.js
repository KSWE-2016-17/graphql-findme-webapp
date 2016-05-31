import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class FriendProfileView_HeadRow extends React.Component {

    create() {
        return (
		    <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <DefaultProfilImage />
                        <br /><br />
                        <button type="button" className="btn btn-primary">
						    <span className="glyphicon glyphicon-plus"></span> Freundschaftsanfrage<br />senden
						</button>
                    </div>
			    <div className="col-md-8">			    
                    <h1>Frank Fremd</h1>
					<p>
                    "There is no reason anyone would want a computer in the home."<br />
                    Kenneth Olson, 1977
                    </p>
                </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary">
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
