import React from "react";
import q from "q";
import _ from "lodash";

import MailItemComponent from "./MailItemComponent";

import InboxService from "../services/InboxService"

export default class InboxMailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mails: []
        };

        this.inboxService = new InboxService();
    }

    render() {
        return (
            <div id="inboxMessages">
                {this.state.mails}
            </div>
        );
    }

    componentDidMount() {
        this.inboxService.findMsgToMeUndeleted(localStorage.getItem("sessionUserId"))
            .then((data) => {
                console.debug("received messages: " + data.length);
                let messages = data;

                let mappedData = _.map(messages, (msg) => {
                    return {
                        user: {},
                        message: msg
                    };
                });

                let uniqueUsers = _.uniqBy(messages, "from");
                console.debug("unique senders to identify: " + uniqueUsers.length);

                let promises = [];

                for (let i = 0; i < uniqueUsers.length; i++) {
                    let uniqueUser = uniqueUsers[i];

                    promises.push(this.inboxService.resolveUserName(uniqueUser.from));
                }

                q.all(promises)
                    .then((data) => {
                        for (let i = 0; i < data.length; i++) {
                            let promiseResult = data[i];

                            _.forEach(mappedData, (value, index, arr) => {
                                if (promiseResult.length > 0) {
                                    if (value.message.from === promiseResult[0]._id) {
                                        value.user = promiseResult[0];
                                    }
                                }
                            });

                            for (let j = 0; j < mappedData.length; j++) {
                                let md = mappedData[j];

                                let mails = this.state.mails;
                                mails.push(
                                    <MailItemComponent
                                        key={Math.random()}
                                        data={md}/>
                                );
                                this.setState({mails: mails});
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

