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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { updatePassword, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and has access to this page
    if (!user) {
      navigate("/authentication/sign-in/basic");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await updatePassword(password);
      if (result) {
        setSuccess("Password updated successfully!");
        setTimeout(() => {
          navigate("/authentication/sign-in/basic");
        }, 3000);
      } else {
        setError("Failed to update password. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while updating the password");
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
                  Update Password
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  Enter your new password
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
                      type="password" 
                      placeholder="New Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftInput 
                      type="password" 
                      placeholder="Confirm New Password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                      {loading ? "Updating..." : "Update Password"}
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

export default UpdatePassword;