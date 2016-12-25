import React from "react";

import Navigation from "../components/Navigation";
import Head from "../components/ReportsView_HeadRow";
import ReportsList from "../components/ReportsView_ReportsListRow";

export default class ReportsPage extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Head/>
                <ReportsList/>
            </div>
        );
    }
}
