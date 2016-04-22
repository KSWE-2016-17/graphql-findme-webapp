import React from "react";

import HelloWorldComponent from "../HelloWorldComponent";

describe("HelloWorldComponent", () => {
    describe(".sayHelloWorld method", () => {
        it("should return 'Hello, world!' string", () => {
            let tester = new HelloWorldComponent();

            expect(tester.sayHelloWorld()).toEqual("Hello, world!");
        });
    });
    describe(".render method", () => {
        it("should return '<h1>Hello, world!</h1>'", () => {
            let tester = new HelloWorldComponent();

            expect(tester.render()).toEqual(<h1>Hello, world!</h1>);
        });
    });
});
