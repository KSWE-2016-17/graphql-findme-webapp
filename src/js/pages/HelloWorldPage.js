import React from "react";

import HelloWorldComponent from "../components/HelloWorldComponent";

export default class HelloWorldPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World page</h1>
                <HelloWorldComponent />
            </div>
        );
    }
}
