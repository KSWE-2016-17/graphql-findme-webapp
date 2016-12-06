import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/ReportsView_HeadRow";
import ReportsList from "../components/ReportsView_ReportsListRow";

export default class FriendsListTab extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Head/>
                <ReportsList/>
            </div>
        );
    }
}
