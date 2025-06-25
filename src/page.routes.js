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
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
      },
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
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
      },
      {
        name: "Reports",
        key: "reports",
        route: "/ecommerce/reports",
        icon: <CreditCard size="12px" color="white" />,
      },
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Products List",
            key: "products-list",
            route: "/ecommerce/products/products-list",
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
          },
        ],
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
      },
    ],
  },
];

export default pageRoutes;