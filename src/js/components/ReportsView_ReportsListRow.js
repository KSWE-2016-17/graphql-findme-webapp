import React from "react";

import ReportRow from "./ReportsView_ReportRow";

import AdminService from "../services/AdminService";

export default class ReportsView_ReportsListRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: []
        };

        this.adminService = new AdminService();
    }

    render() {
        return (
            <div id="reportsList">
                <br/>
                {this.state.reports}
            </div>
        );
    }

    componentDidMount() {
        this.adminService.allProfiles()
            .then((data) => {
                console.debug("received profiles: " + data.length);

                let newReportList = this.state.reports;

                for (let i = 0; i < data.length; i++) {
                    console.debug(i + ". profile: " + data[i]._id + " - reported: " + data[i].reported);
                    if ((data[i].reported == true) || (data[i].reported == "true")) {
                        console.debug("report profile: " + data[i]._id);
                        newReportList.push(
                            <div>
                                <ReportRow
                                    profileId={data[i]._id}/>
                                <hr/>
                            </div>
                        );
                    }
                }

                this.setState({reports: newReportList});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
