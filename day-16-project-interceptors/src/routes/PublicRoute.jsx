import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
    console.log("public route rendering");
  const { loginUser } = useContext(Auth);

    if (loginUser) {
        return <Navigate to='/main' />;
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PublicRoute