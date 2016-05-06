import IndexPage from "./pages/IndexPage";
import HelloWorldPage from "./pages/HelloWorldPage";

export default {
    path: "/",
    component: IndexPage,
    indexRoute: { component: HelloWorldPage },
    childRoutes: []
};
