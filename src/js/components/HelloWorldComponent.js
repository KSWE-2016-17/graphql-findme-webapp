import React from "react";

export default class HelloWorldComponent extends React.Component {
    sayHelloWorld() {
        return "Hello, World!";
    }

    render() {
        return (
            <p>{this.sayHelloWorld()}</p>
        );
    }
}
