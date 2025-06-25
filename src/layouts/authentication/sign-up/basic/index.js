
import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved6.jpg";

// Auth context
import { useAuth } from "context/auth/AuthContext";

function Basic() {
  const [agreement, setAgreement] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSetAgreement = () => setAgreement(!agreement);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreement) {
      setError("You must agree to the Terms and Conditions");
      return;
    }
    
    setError("");
    setLoading(true);
    
    try {
      const response = await signUp(email, password);
      if (response) {
        setSuccess("Registration successful! Please check your email to confirm your account.");
        setTimeout(() => {
          navigate("/authentication/sign-in/basic");
        }, 3000);
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BasicLayout
      title="Welcome!"
      description="Login or create new account."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
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
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgreement} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgreement}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton 
                variant="gradient" 
                color="dark" 
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in/basic"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;