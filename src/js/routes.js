import IndexPage from "./pages/IndexPage";
import HelloWorldPage from "./pages/HelloWorldPage";
import AnotherHelloWorldPage from "./pages/AnotherHelloWorldPage";
import ProfilViewComponent from "./pages/ProfilViewComponent";

export default {
    path: "/",
    component: IndexPage,
    indexRoute: { component: HelloWorldPage },
    childRoutes: [
        { path: "anotherhelloworld", component: AnotherHelloWorldPage },
        { path: "profil", component: ProfilViewComponent }
    ]
};
