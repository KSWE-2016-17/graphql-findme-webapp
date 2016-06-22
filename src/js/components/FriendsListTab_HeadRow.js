import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class FriendProfileView_HeadRow extends React.Component {

    render() {
        return (
            <div className="container">
				<div className="row">
				    <div className="col-md-11">
					    <span style={{}} className="glyphicon glyphicon-asterisk"></span>
					    <font size="5"> Deine Freunde </font>
						<span style={{}} className="glyphicon glyphicon-asterisk"></span>
					</div>
				</div>
				<div className="row">
				    <div className="col-md-12">
					    <div style={{border:"1px solid"}}></div>
					</div>
				</div>
			</div>
        );
    }
}
