import IndexPage from "./pages/IndexPage";
import HelloWorldPage from "./pages/HelloWorldPage";
import AnotherHelloWorldPage from "./pages/AnotherHelloWorldPage";
import ProfilViewComponent from "./pages/ProfilViewComponent";
import LoginViewComponent from "./pages/LoginViewComponent";
import LogoutPage from "./pages/LogoutPage";
import RegistrierenViewPage from "./pages/RegistrierenViewPage";
import OtherProfileView from "./pages/OtherProfileView";
import EditProfilePage from "./pages/EditProfilePage";
import ProfileinstellungenViewPage from "./pages/ProfileinstellungenViewPage";
import ArchiveViewPage from "./pages/ArchiveViewPage";
import InboxViewPage from "./pages/InboxViewPage";
import OutboxViewPage from "./pages/OutboxViewPage";
import NewMailPage from "./pages/NewMailPage";
import ReadMailPage from "./pages/ReadMailPage";
import FriendProfileView from "./pages/FriendProfileView";
import DatingViewPage from "./pages/DatingViewPage";
import FriendListTab from "./pages/FriendsListTab";
import ReportsView from "./pages/ReportsView";

export default {
    path: "/",
    component: IndexPage,
    indexRoute: { component: LoginViewComponent },
    childRoutes: [
        { path: "anotherhelloworld", component: AnotherHelloWorldPage },
        { path: "profile", component: ProfilViewComponent },
        { path: "login", component: LoginViewComponent },
        { path: "logout", component: LogoutPage },
        { path: "register", component: RegistrierenViewPage },
        { path: "profile/:id", component: OtherProfileView },
        { path: "edit", component: EditProfilePage },
        { path: "settings", component: ProfileinstellungenViewPage },
        { path: "mails/archive", component: ArchiveViewPage },
        { path: "mails/inbox", component: InboxViewPage },
        { path: "mails/outbox", component: OutboxViewPage },
        { path: "mails/new", component: NewMailPage },
        { path: "mails/:id", component: ReadMailPage },
        { path: "friends/:id", component: FriendProfileView },
        { path: "dating", component: DatingViewPage},
        { path: "friendstab", component: FriendListTab},
		{ path: "reports", component: ReportsView },

    ]
};
