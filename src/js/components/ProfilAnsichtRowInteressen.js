import React from "react";

import ProfileService from "../services/ProfilService";

export default class ProfilAnsichtRowInteressen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state = {
            interestsElements: []
        };

        this.profileService = new ProfileService();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Interessen</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.state.interestsElements}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.profileService.findProfileByUserId(localStorage.getItem("sessionUserId"))
            .then((data) => {
                let aboutme = data[0].aboutme;

                let aboutmeParts = aboutme.split("#");
                let interests = aboutmeParts.length >= 2 ? aboutmeParts[1].split("+") : [];

                let interestsElements = this.state.interestsElements;

                for (let i = 0; i < interests.length; i++) {
                    let interest = interests[i];

                    if (interest && interest.trim()) {
                        interest = interest.trim();

                        interestsElements.push(
                            <div key={Math.random()} className="box_interessen"
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
                                 }}>
                                {interest}
                            </div>
                        );
                    }
                }

                this.setState({
                    interestsElements: interestsElements
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }
}
