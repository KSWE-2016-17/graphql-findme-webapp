import React from "react";

import AdminService from "../services/AdminService";

export default class ReportsView_ReportRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.ignoreCase = this.ignoreCase.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);

        this.adminService = new AdminService();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <font size="5"> {this.state.profileName} </font><br/>
                    <button type="button" className="btn btn-link" onClick={this.ignoreCase}
                            style={{marginLeft: "25px", paddingLeft: "10px", paddingRight: "10px"}}>
                        <span className="glyphicon glyphicon-sunglasses"></span> Fall ignorieren
                    </button>
                    <button type="button" className="btn btn-link" onClick={this.deleteProfile}
                            style={{marginLeft: "25px", paddingLeft: "10px", paddingRight: "10px"}}>
                        <span className="glyphicon glyphicon-remove"></span> Profil löschen
                    </button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.adminService.getProfile(this.props.profileId)
            .then((data) => {
                if (data[0]) {
                    this.setState({userID: data[0].user_id});
                    this.adminService.getUser(data[0].user_id)
                        .then((data) => {
                            if (data[0]) {
                                this.setState({profileName: data[0].login});
                            } else {
                                console.log("user not found");
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    console.log("profile not found");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    ignoreCase() {
        this.adminService.removeReportedMark(this.props.profileId)
            .then((data) => {
                window.location.reload();
            });
    }

    deleteProfile() {
        this.adminService.deleteUser(this.state.userID);
        this.adminService.removeProfile(this.props.profileId)
            .then((data) => {
                window.location.reload();
            });
    }
}
