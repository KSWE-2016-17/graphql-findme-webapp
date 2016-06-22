import React from "react";
import q from "q";
import _ from "lodash";

import MailComponent from "./OutboxMailItemComponent";

import OutboxService from "../services/OutboxService"

export default class OutboxMailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mails: []
        };
    }

    componentDidMount() {
        let self = this;

        let outboxService = new OutboxService();

        outboxService.findMsgFromMe(localStorage.getItem("sessionUserId"))
            .then(function(data) {
                console.debug("sent messages: " + data.length);
                let messages = data;

                let mappedData = _.map(messages, function(msg) {
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

                    promises.push(outboxService.resolveUserName(uniqueUser.to));
                }

                q.all(promises)
                    .then(function(data) {
                        for (let i = 0; i < data.length; i++) {
                            let promiseResult = data[i];

                            _.forEach(mappedData, function(value, index, arr) {
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
                                    <MailComponent
                                        key={Math.random()}
                                        data={md} />
                                );
                                self.setState({mails: mails});
                            }
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    render() {
        let self = this;

        return (
            <div id="outboxMessages" className="container">
                {self.state.mails}
            </div>
        );
    }
}

