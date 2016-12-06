import React from "react";

export default class IndexPage extends React.Component {
    render() {
        let self = this;

        return (
            <div className="container">
                {self.props.children}
            </div>
        );
    }
}
