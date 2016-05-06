import IndexPage from "./pages/IndexPage";
import HelloWorldPage from "./pages/HelloWorldPage";
import AnotherHelloWorldPage from "./pages/AnotherHelloWorldPage";

export default {
    path: "/",
    component: IndexPage,
    indexRoute: { component: HelloWorldPage },
    childRoutes: [
        { path: "anotherhelloworld", component: AnotherHelloWorldPage }
    ]
};
