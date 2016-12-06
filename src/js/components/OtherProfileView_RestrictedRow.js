import React from "react";

export default class OtherProfileView_RestrictedRow extends React.Component {
    render() {
        return (
            <div>{this.create()}</div>
        );
    }

    create() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Dieses Profil ist f&uuml;r dich nur beschr&auml;nkt sichtbar.</h2>
            </div>
        );
    }
}
