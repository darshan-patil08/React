import { Navigate, Outlet } from "react-router"
import { useSelector } from "react-redux";

const PublicProtected = () => {
    const {user} = useSelector((state) => state.auth);
    if(user){
        return <Navigate to="/main" />;
    }
    return <Outlet />
}

export default PublicProtected
