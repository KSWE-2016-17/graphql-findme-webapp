import React from "react";

import ProfileService from "../services/ProfilService";

export default class RowInteressenComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Interessen</h1>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {(() => {
                            let result = [];

                            _.times(10, (i) => {
                                result.push(<div id={"interest" + i} key={Math.random()} className="box_interessen"
                                                 style={{
                                                    color: "#ffffff",
                                                    backgroundColor: "#eb9316",
                                                    fontWeight: "bold",
                                                    borderRadius: "4px",
                                                    float: "left",
                                                    paddingTop: "5px",
                                                    paddingBottom: "5px",
                                                    paddingLeft: "15px",
                                                    paddingRight: "15px",
                                                    marginTop: "10px",
                                                    marginBottom: "10px",
                                                    marginRight: "10px",
                                                    marginLeft: "0px"
                                                }}></div>);
                            });

                            return result;
                        })()}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let profileService = new ProfileService();

        profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then(function (data) {
                let aboutme = data[0].aboutme;

                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts[1].split("+");
                let finished = aboutmeParts[0] + "#";

                for (let i = 0; i < 10; i++) {
                    let selector = "#interest" + i;

                    if (i < interests.length && interests[i] && interests[i].trim()) {
                        $(selector).text(interests[i + 1]);
                    } else {
                        $(selector).hide();
                    }
                }

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
