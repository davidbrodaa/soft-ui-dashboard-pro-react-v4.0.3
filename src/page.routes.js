// Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";
import CreditCard from "examples/Icons/CreditCard";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
      },
      {
        name: "Smart Home",
        key: "smart-home",
        route: "/dashboards/smart-home",
      },
      { name: "CRM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <Office size="12px" color="white" />,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <Shop size="12px" color="white" />,
    route: "/pages/profile/profile-overview",
  },
  {
    name: "Extra",
    key: "extra",
    icon: <Document size="12px" color="white" />,
    collapse: [
      { name: "Notifications", key: "notifications", route: "/pages/notifications" },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <CustomerSupport size="12px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
      {
        name: "Security",
        key: "security",
        route: "/pages/account/security",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <Cube size="12px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
      {
        name: "New Project",
        key: "new-project",
        route: "/pages/projects/new-project",
      },
    ],
  },
  {
    name: "Transmissions",
    key: "transmissions",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
      },
    ],
  },
  {
    name: "Images",
    key: "images",
    icon: <Cube size="12px" color="white" />,
  },
  {
    name: "Authentication",
    key: "authentication",
    icon: <SpaceShip size="12px" color="white" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
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
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-up/illustration",
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
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/reset-password/illustration",
          },
        ],
      },
    ],
  },
];

export default pageRoutes;