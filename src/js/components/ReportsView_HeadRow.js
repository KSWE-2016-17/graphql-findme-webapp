import React from "react";

export default class ReportsView_HeadRow extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-11">
                        <font size="5"> Offene Fälle </font>
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
