import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import ReportListItemComponent from "../components/ReportListItemComponent";

import AdminService from "../services/AdminService";

export default class ReportsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: []
        };

        this.adminService = new AdminService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Meldungen</h1>

                <div>
                    {this.state.reports}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.adminService.allProfiles()
            .then((data) => {
                let newReportList = this.state.reports;

                for (let i = 0; i < data.length; i++) {
                    if (data[i].reported == true) {
                        newReportList.push(
                            <ReportListItemComponent profileId={data[i]._id}/>
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
