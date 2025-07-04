/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.3
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Menu from "@mui/material/Menu";
// import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

// DefaultNavbar dropdown menus
import PagesMenu from "examples/Navbars/DefaultNavbar/Menus/PagesMenu";
import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";
import ApplicationsMenu from "examples/Navbars/DefaultNavbar/Menus/ApplicationsMenu";
import EcommerceMenu from "examples/Navbars/DefaultNavbar/Menus/EcommerceMenu";

function DefaultNavbarMobile({ routes, open, close }) {
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <SoftBox px={0.5}>
        <DefaultNavbarLink
          name="company"
          collapseStatus={openCollapse === "company"}
          onClick={() => handleSepOpenCollapse("company")}
        >
          <SoftBox maxHeight="16rem" overflow="auto">
            <PagesMenu routes={routes} mobileMenu />
          </SoftBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="documentation"
          collapseStatus={openCollapse === "documentation"}
          onClick={() => handleSepOpenCollapse("documentation")}
        >
          <SoftBox maxHeight="16rem" overflow="auto">
            <DocsMenu routes={routes} mobileMenu />
          </SoftBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="transmissions"
          collapseStatus={openCollapse === "transmissions"}
          onClick={() => handleSepOpenCollapse("transmissions")}
        >
          <SoftBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </SoftBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="images"
          collapseStatus={openCollapse === "images"}
          onClick={() => handleSepOpenCollapse("images")}
        >
          <SoftBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </SoftBox>
        </DefaultNavbarLink>
      </SoftBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;