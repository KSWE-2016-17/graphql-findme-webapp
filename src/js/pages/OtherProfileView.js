import React from "react";

import NavigationBar from "../components/PostLoginNavigationBar";
import Head from "../components/OtherProfileView_HeadRow";
import Message from "../components/OtherProfileView_RestrictedRow";


export default class OtherProfileView extends React.Component {
	
    createView() {
        return (
            <div>
				<NavigationBar />
				<Head />
                <hr />
				<Message />
            </div>
        );
    }

    render() {
        return (
            <div>{this.createView()}</div>
        );
    }
}
