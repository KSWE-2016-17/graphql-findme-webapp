import React from "react";
import q from "q";
import _ from "lodash";

import OutboxMailItemComponent from "./OutboxMailItemComponent";

import OutboxService from "../services/OutboxService"

export default class OutboxMailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state = {
            mails: []
        };

        this.outboxService = new OutboxService();
    }

    render() {
        let self = this;

        return (
            <div id="outboxMessages">
                {self.state.mails}
            </div>
        );
    }

    componentDidMount() {
        let self = this;

        this.outboxService.findMsgFromMeUndeleted(localStorage.getItem("sessionUserId"))
            .then((data) => {
                console.debug("sent messages: " + data.length);
                let messages = data;

                let mappedData = _.map(messages, (msg) => {
                    return {
                        user: {},
                        message: msg
                    };
                });

                let uniqueUsers = _.uniqBy(messages, "to");
                console.debug("unique senders to identify: " + uniqueUsers.length);

                let promises = [];

                for (let i = 0; i < uniqueUsers.length; i++) {
                    let uniqueUser = uniqueUsers[i];

                    promises.push(this.outboxService.resolveUserName(uniqueUser.to));
                }

                q.all(promises)
                    .then((data) => {
                        for (let i = 0; i < data.length; i++) {
                            let promiseResult = data[i];

                            _.forEach(mappedData, (value, index, arr) => {
                                if (promiseResult.length > 0) {
                                    if (value.message.to === promiseResult[0]._id) {
                                        value.user = promiseResult[0];
                                    }
                                }
                            });

                            for (let j = 0; j < mappedData.length; j++) {
                                let md = mappedData[j];

                                let mails = self.state.mails;
                                mails.push(
                                    <OutboxMailItemComponent
                                        key={Math.random()}
                                        data={md}/>
                                );
                                self.setState({mails: mails});
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

