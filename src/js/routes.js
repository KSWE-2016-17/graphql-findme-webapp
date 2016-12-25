import IndexPage from "./pages/IndexPage";
import ProfilViewComponent from "./pages/ProfilViewComponent";
import LoginPage from "./pages/LoginPage";
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
    indexRoute: {component: LoginPage},
    childRoutes: [
        {path: "profiles/:id", component: ProfilViewComponent},
        {path: "login", component: LoginPage},
        {path: "logout", component: LogoutPage},
        {path: "register", component: RegistrierenViewPage},
        {path: "edit", component: EditProfilePage},
        {path: "settings", component: ProfileinstellungenViewPage},
        {path: "mails/archive", component: ArchiveViewPage},
        {path: "mails/inbox", component: InboxViewPage},
        {path: "mails/outbox", component: OutboxViewPage},
        {path: "mails/new", component: NewMailPage},
        {path: "mails/:id", component: ReadMailPage},
        {path: "dating", component: DatingViewPage},
        {path: "friendstab", component: FriendListTab},
        {path: "reports", component: ReportsView}
    ]
};
