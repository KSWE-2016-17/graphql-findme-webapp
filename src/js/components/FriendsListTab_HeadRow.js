import React from "react";

export default class FriendProfileView_HeadRow extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-11">
                        <h1>Deine Freunde</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div style={{border: "1px solid"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}
