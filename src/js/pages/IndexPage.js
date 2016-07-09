import React from "react";

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}
