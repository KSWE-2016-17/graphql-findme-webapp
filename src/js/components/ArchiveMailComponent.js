import React from "react";
import q from "q";
import _ from "lodash";

import ArchiveMailFromComponent from "./ArchiveMailFromComponent";
import ArchiveMailToComponent from "./ArchiveMailToComponent";

import ArchiveService from "../services/ArchiveService"

export default class ArchiveMailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mails: []
        };

        this.archiveService = new ArchiveService();
    }

    render() {
        return (
            <div id="archiveMessages">
                {this.state.mails}
            </div>
        );
    }

    componentDidMount() {
        this.archiveService.findArchFromMe(localStorage.getItem("sessionUserId"))
            .then((data) => {
                console.debug("received messages: " + data.length);
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

                    promises.push(this.archiveService.resolveUserName(uniqueUser.to));
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

                                let mails = this.state.mails;
                                mails.push(
                                    <ArchiveMailFromComponent
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

        this.archiveService.findArchToMe(localStorage.getItem("sessionUserId"))
            .then((data) => {
                let messages = data;

                let mappedData = _.map(messages, (msg) => {
                    return {
                        user: {},
                        message: msg
                    };
                });

                let uniqueUsers = _.uniqBy(messages, "from");

                let promises = [];

                for (let i = 0; i < uniqueUsers.length; i++) {
                    let uniqueUser = uniqueUsers[i];

                    promises.push(this.archiveService.resolveUserName(uniqueUser.from));
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
                                    <ArchiveMailToComponent
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

