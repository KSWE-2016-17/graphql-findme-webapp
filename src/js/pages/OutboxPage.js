import q from "q";
import _ from "lodash";
import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import OutboxMailItemComponent from "../components/OutboxMailItemComponent";

import OutboxService from "../services/OutboxService";

export default class OutboxPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state = {
            mailItemComponents: []
        };

        this.outboxService = new OutboxService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Postausgang</h1>

                <div>
                    {this.state.mailItemComponents}
                </div>
            </div>
        );
    }

    componentDidMount() {
        let mappedData = [];

        this.outboxService.findMsgFromMeUndeleted(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                let messages = data;

                mappedData = _.map(messages, (msg) => {
                    return {
                        profile: {},
                        message: msg
                    };
                });

                let uniqueRecipientProfiles = _.uniqBy(messages, "to_id");

                let promises = [];

                uniqueRecipientProfiles.forEach((elem) => {
                    promises.push(this.outboxService.resolveUserName(elem.to_id));
                });

                return q.all(promises);
            })
            .then((data) => {
                let mailItemComponents = this.state.mailItemComponents;

                data.forEach((elem) => {
                    let promiseResult = elem;

                    mappedData.forEach((elem) => {
                        if (elem.message.to_id === promiseResult._id) {
                            elem.profile = promiseResult;
                        }

                        mailItemComponents.push(<OutboxMailItemComponent key={Math.random()} data={elem}/>);
                    });
                });

                this.setState({mailItemComponents: mailItemComponents});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
