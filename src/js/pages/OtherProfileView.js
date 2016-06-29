import React from "react";

import NavigationBar from "../components/ProfilAnsichtNavigationElement";
import Head from "../components/OtherProfileView_HeadRow";
import Message from "../components/OtherProfileView_RestrictedRow";


export default class OtherProfileView extends React.Component {

	constructor(props) {
        super(props);
    }

    render() {
		let self = this;
		
        return (
            <div>
				<NavigationBar />
				<Head profileID={self.props.params.id} />
                <hr />
				<Message />
            </div>
        );
    }
}
