import { useContext } from "react";
import { Navigate, Outlet } from "react-router"
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { loginUser } = useContext(Auth);

    if (!loginUser) {
        return <Navigate to='/' />;
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoute