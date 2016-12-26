import q from "q";
import _ from "lodash";
import React from "react";

import NavigationComponent from "../components/NavigationComponent";
import ArchiveMailFromComponent from "../components/ArchiveMailFromComponent";
import ArchiveMailToComponent from "../components/ArchiveMailToComponent";

import ArchiveService from "../services/ArchiveService";

export default class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mailItemComponents: []
        };

        this.archiveService = new ArchiveService();
    }

    render() {
        return (
            <div>
                <NavigationComponent/>

                <h1>Archiv</h1>

                <div>
                    {this.state.mailItemComponents}
                </div>
            </div>
        );
    }

    componentDidMount() {
        let mappedData = [];

        q.all([
            this.archiveService.findArchFromMe(localStorage.getItem("sessionProfileId"))
                .then((data) => {
                    let messages = data;

                    mappedData = mappedData.concat(_.map(messages, (msg) => {
                        return {
                            profile: {},
                            message: msg
                        };
                    }));

                    let uniqueRecipientProfiles = _.uniqBy(messages, "to_id");

                    let promises = [];

                    uniqueRecipientProfiles.forEach((elem) => {
                        promises.push(this.archiveService.resolveUserName(elem.to_id));
                    });

                    return q.all(promises);
                }),
            this.archiveService.findArchToMe(localStorage.getItem("sessionProfileId"))
                .then((data) => {
                    let messages = data;

                    mappedData = mappedData.concat(_.map(messages, (msg) => {
                        return {
                            profile: {},
                            message: msg
                        };
                    }));

                    let uniqueSenderProfiles = _.uniqBy(messages, "from_id");

                    let promises = [];

                    uniqueSenderProfiles.forEach((elem) => {
                        promises.push(this.archiveService.resolveUserName(elem.from_id));
                    });

                    return q.all(promises);
                })
        ])
            .then((data) => {
                let mailItemComponents = this.state.mailItemComponents;

                data.forEach((elem) => {
                    elem.forEach((elem) => {
                        let promiseResult = elem;

                        mappedData.forEach((elem) => {
                            if (elem.message.to_id === promiseResult._id) {
                                elem.profile = promiseResult;

                                mailItemComponents.push(<ArchiveMailFromComponent key={Math.random()} data={elem}/>);
                            } else if (elem.message.from_id === promiseResult._id) {
                                elem.profile = promiseResult;

                                mailItemComponents.push(<ArchiveMailToComponent key={Math.random()} data={elem}/>);
                            }
                        });
                    });
                });

                this.setState({mailItemComponents: mailItemComponents});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
