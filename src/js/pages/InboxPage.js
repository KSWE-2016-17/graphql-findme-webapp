import q from "q";
import _ from "lodash";
import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import InboxMailItemComponent from "../components/InboxMailItemComponent";

import InboxService from "../services/InboxService"

export default class InboxPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mailItemComponents: []
        };

        this.inboxService = new InboxService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Posteingang</h1>

                <div>
                    {this.state.mailItemComponents}
                </div>
            </div>
        );
    }

    componentDidMount() {
        let mappedData = [];

        this.inboxService.findMsgToMeUndeleted(localStorage.getItem("sessionProfileId"))
            .then((data) => {
                let messages = data;

                mappedData = _.map(messages, (msg) => {
                    return {
                        profile: {},
                        message: msg
                    };
                });

                let uniqueSenderProfiles = _.uniqBy(messages, "from_id");

                let promises = [];

                uniqueSenderProfiles.forEach((elem) => {
                    promises.push(this.inboxService.resolveUserName(elem.from_id));
                });

                return q.all(promises);
            })
            .then((data) => {
                let mailItemComponents = this.state.mailItemComponents;

                data.forEach((elem) => {
                    let promiseResult = elem;

                    mappedData.forEach((elem) => {
                        if (elem.message.from_id === promiseResult._id) {
                            elem.profile = promiseResult;
                        }

                        mailItemComponents.push(<InboxMailItemComponent key={Math.random()} data={elem}/>);
                    });
                });

                this.setState({mailItemComponents: mailItemComponents});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
