import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {

    const isAuthenticated = false;

    if( !isAuthenticated) {
        return <Navigate to="/"  />
    }




  return children;
}

export default ProtectedRoute