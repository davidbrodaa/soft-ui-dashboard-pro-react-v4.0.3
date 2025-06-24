import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "context/auth/AuthContext";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // You could render a loading spinner here
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/authentication/sign-in/basic" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;