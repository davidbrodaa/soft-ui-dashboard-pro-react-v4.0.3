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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Soft UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

// Auth context
import { useAuth } from "context/auth/AuthContext";

function Basic() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    
    try {
      const result = await resetPassword(email);
      if (result) {
        setSuccess("Password reset email sent! Check your inbox for further instructions.");
      } else {
        setError("Failed to send reset email. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while sending the reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout background="light">
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
        }}
      />
      <Grid container spacing={3} justifyContent="center" sx={{ minHeight: "75vh" }}>
        <Grid item xs={10} md={6} lg={4}>
          <SoftBox mt={32} mb={3} px={{ xs: 0, lg: 2 }}>
            <Card>
              <SoftBox pt={3} px={3} pb={1} textAlign="center">
                <SoftTypography variant="h4" fontWeight="bold" textGradient>
                  Reset password
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  You will receive an e-mail in maximum 60 seconds
                </SoftTypography>
              </SoftBox>
              <SoftBox p={3}>
                <SoftBox component="form" role="form" onSubmit={handleSubmit}>
                  {error && (
                    <SoftBox mb={2}>
                      <Alert severity="error">{error}</Alert>
                    </SoftBox>
                  )}
                  {success && (
                    <SoftBox mb={2}>
                      <Alert severity="success">{success}</Alert>
                    </SoftBox>
                  )}
                  <SoftBox mb={2}>
                    <SoftInput 
                      type="email" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </SoftBox>
                  <SoftBox mt={5} mb={1}>
                    <SoftButton 
                      variant="gradient" 
                      color="dark" 
                      size="large" 
                      fullWidth
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send"}
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </SoftBox>
            </Card>
          </SoftBox>
        </Grid>
      </Grid>
      <Footer />
    </PageLayout>
  );
}

export default Basic;