import React from "react";

import TeaserComponent from "../components/TeaserComponent";

export default class LoginDreiPunkte extends React.Component {
    render() {
        let self = this;

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <TeaserComponent header="Interessen" description={self.createRandomDescription()}
                                         destination="#"/>
                    </div>
                    <div className="col-md-4">
                        <TeaserComponent header="Vorlieben" description={self.createRandomDescription()}
                                         destination="#"/>
                    </div>
                    <div className="col-md-4">
                        <TeaserComponent header="Vorstellungen" description={self.createRandomDescription()}
                                         destination="#"/>
                    </div>
                </div>
            </div>
        );
    }

    createRandomDescription() {
        return "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor " +
            "mauris condimentum nibh, ut fermentum massa justo sit amet risus." +
            "Etiam porta sem malesuada magna mollis euismod. Donec sed" +
            "odio dui.";
    }
}
