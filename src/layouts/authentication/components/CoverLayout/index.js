// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Images
import bizbeamLogo from "assets/images/bizbeam-logo (1).png";

function CoverLayout({ color = "info", header = "", title = "", description = "", image, top = 20, children }) {
  return (
    <PageLayout background="white">
      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <SoftBox mt={top}>
            <SoftBox pt={3} px={3}>
              {!header ? (
                <>
                  <SoftBox mb={1} display="flex" justifyContent="center">
                    <SoftBox component="img" src={bizbeamLogo} alt="BizBeam Logo" width="60%" />
                  </SoftBox>
                  <SoftTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </>
              ) : (
                header
              )}
            </SoftBox>
            <SoftBox p={3}>{children}</SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <SoftBox
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-12rem", xl: "-16rem" }}
            mr={-16}
            sx={{
              transform: "skewX(-10deg)",
              overflow: "hidden",
              borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
            }}
          >
            <SoftBox
              ml={-8}
              height="100%"
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: "skewX(10deg)",
              }}
            />
          </SoftBox>
        </Grid>
      </Grid>
      <Footer />
    </PageLayout>
  );
}


// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;