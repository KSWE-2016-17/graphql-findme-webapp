import React from "react";

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}

                <hr/>
                <div className="text-center">@ 2016 find.me Alle Rechte vorbehalten.</div>
            </div>
        );
    }
}
