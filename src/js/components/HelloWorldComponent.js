import React from "react";

export default class HelloWorldComponent extends React.Component {
    sayHelloWorld() {
        return "Hello, world!";
    }

    render() {
        return (
            <p>{this.sayHelloWorld()}</p>
        );
    }
}
