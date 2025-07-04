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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function DocsMenu({ routes, open = false, close = false, mobileMenu = false }) {
  const renderDocsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) => {
        if (key === routeName && collapse && Array.isArray(collapse)) {
          return collapse.map(({ key: collapseKey, href, name, icon, description }) => (
            <MenuItem
              key={collapseKey}
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={mobileMenu ? undefined : close}
            >
              <SoftBox display="flex" py={0.25}>
                {typeof icon === "string" ? <Icon>{icon}</Icon> : <SoftBox mt={0.5}>{icon}</SoftBox>}
                <SoftBox pl={2} lineHeight={0}>
                  <SoftTypography variant="h6" fontWeight="bold">
                    {name}
                  </SoftTypography>
                  <SoftTypography variant="button" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </MenuItem>
          ));
        }
        return null;
      }
    );

  return mobileMenu ? (
    renderDocsMenuRoute("docs")
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderDocsMenuRoute("docs")}
    </DefaultNavbarMenu>
  );
}


// Typechecking props for the DocsMenu
DocsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default DocsMenu;