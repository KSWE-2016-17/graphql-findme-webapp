import React from "react";

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <a href="#/">Home</a><br />
                    <a href="#/anotherhelloworld">Another Hello World</a>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
