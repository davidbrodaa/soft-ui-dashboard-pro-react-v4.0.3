import React from "react";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function ImageReports() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftTypography variant="h3" fontWeight="bold">
            Image Reports
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <SoftTypography variant="body2" color="text">
            This section contains all reports related to image processing and analysis.
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ImageReports;