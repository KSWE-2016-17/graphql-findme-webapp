import React from "react";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let self = this;

        return (
            <div className="container">
                {self.props.children}
            </div>
        );
    }
}
