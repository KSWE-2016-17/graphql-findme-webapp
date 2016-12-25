import IndexPage from "./pages/IndexPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import EditProfilePage from "./pages/EditProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ArchivePage from "./pages/ArchivePage";
import InboxPage from "./pages/InboxPage";
import OutboxPage from "./pages/OutboxPage";
import WriteMailPage from "./pages/WriteMailPage";
import ReadMailPage from "./pages/ReadMailPage";
import DatingPage from "./pages/DatingPage";
import FriendsPage from "./pages/FriendsPage";
import ReportsPage from "./pages/ReportsPage";

export default {
    path: "/",
    component: IndexPage,
    indexRoute: {component: LoginPage},
    childRoutes: [
        {path: "profiles/:id", component: ProfilePage},
        {path: "login", component: LoginPage},
        {path: "logout", component: LogoutPage},
        {path: "register", component: RegisterPage},
        {path: "edit", component: EditProfilePage},
        {path: "settings", component: SettingsPage},
        {path: "mails/archive", component: ArchivePage},
        {path: "mails/inbox", component: InboxPage},
        {path: "mails/outbox", component: OutboxPage},
        {path: "mails/new", component: WriteMailPage},
        {path: "mails/:id", component: ReadMailPage},
        {path: "dating", component: DatingPage},
        {path: "friendstab", component: FriendsPage},
        {path: "reports", component: ReportsPage}
    ]
};
