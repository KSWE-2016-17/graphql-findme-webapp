import q from "q";
import React from "react";

import AdminService from "../services/AdminService";

export default class ReportListItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            profileName: ""
        };

        this.ignoreReport = this.ignoreReport.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);

        this.adminService = new AdminService();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>{this.state.profileName}</h2>

                    <button className="btn btn-link" type="button" onClick={this.ignoreReport}>
                        <span className="glyphicon glyphicon-sunglasses"></span> Fall ignorieren
                    </button>
                    <button className="btn btn-link" type="button" onClick={this.deleteProfile}>
                        <span className="glyphicon glyphicon-remove"></span> Profil löschen
                    </button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.adminService.getProfile(this.props.profileId)
            .then((data) => {
                if (data && data[0]) {
                    this.setState({userId: data[0].user_id});

                    return this.adminService.getUser(data[0].user_id);
                } else {
                    console.log("profile not found");
                }
            })
            .then((data) => {
                if (data && data[0]) {
                    this.setState({profileName: data[0].login});
                } else {
                    console.log("user not found");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    ignoreReport() {
        this.adminService.removeReportedMark(this.props.profileId)
            .then((data) => {
                window.location.reload();
            });
    }

    deleteProfile() {
        q.all([
            this.adminService.deleteUser(this.state.userId),
            this.adminService.removeProfile(this.props.profileId)
        ])
            .then((data) => {
                window.location.reload();
            });
    }
}
