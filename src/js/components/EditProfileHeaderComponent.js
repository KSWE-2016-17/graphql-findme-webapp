import React from "react";

export default class EditProfileHeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Profil bearbeiten
                            &nbsp;
                            <span className="glyphicon glyphicon-edit"></span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
