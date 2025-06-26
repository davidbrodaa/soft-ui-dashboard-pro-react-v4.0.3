// React layouts
import Default from "layouts/dashboards/default";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Notifications from "layouts/pages/notifications";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import UpdatePassword from "layouts/authentication/reset-password/update";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Custom layouts
import Documentation from "layouts/images/documentation";
import ImageReports from "layouts/images/reports";

// React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
import Basket from "examples/Icons/Basket";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
        component: <Default />,
      },
      { name: "CRM", key: "crm", route: "/dashboards/crm", component: <CRM /> },
    ],
  },
  { type: "title", title: "Company", key: "title-company" },
  {
    type: "collapse",
    name: "Company",
    key: "company",
    icon: <Office size="12px" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        route: "/pages/profile/profile-overview",
        component: <ProfileOverview />,
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "Reports",
            key: "reports",
            route: "/pages/users/reports",
            component: <Reports />,
          },
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: <Invoice />,
          },
          {
            name: "Security",
            key: "security",
            route: "/pages/account/security",
            component: <Security />,
          },
        ],
      },
      {
        name: "Notifications",
        key: "notifications",
        route: "/pages/notifications",
        component: <Notifications />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Transmissions",
    key: "transmissions",
    icon: <SettingsIcon size="12px" />,
    collapse: [
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <Wizard />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: <DataTables />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        component: <Analytics />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Images",
    key: "images",
    icon: <Basket size="12px" />,
    collapse: [],
  },
  {
    type: "collapse",
    name: "Documentation",
    key: "documentation",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "General",
            key: "general",
            route: "/pages/projects/general",
            component: <General />,
          },
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: <Timeline />,
          },
          {
            name: "New Project",
            key: "new-project",
            route: "/pages/projects/new-project",
            component: <NewProject />,
          },
        ],
      },
    ],
    route: "/documentation",
    component: <Documentation />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <CreditCard size="12px" />,
    route: "/reports",
    component: <ImageReports />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-up/basic",
            component: <SignUpBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-up/illustration",
            component: <SignUpIllustration />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/reset-password/basic",
            component: <ResetBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/reset-password/illustration",
            component: <ResetIllustration />,
          },
          {
            name: "Update Password",
            key: "update",
            route: "/authentication/reset-password/update",
            component: <UpdatePassword />,
          },
        ],
      },
      {
        name: "Lock",
        key: "lock",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/lock/basic",
            component: <LockBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/lock/cover",
            component: <LockCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/lock/illustration",
            component: <LockIllustration />,
          },
        ],
      },
      {
        name: "2-Step Verification",
        key: "2-step-verification",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/verification/basic",
            component: <VerificationBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/verification/cover",
            component: <VerificationCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/verification/illustration",
            component: <VerificationIllustration />,
          },
        ],
      },
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
];

export default routes;