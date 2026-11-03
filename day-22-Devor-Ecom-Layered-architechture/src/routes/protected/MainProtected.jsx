import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const MainProtected = () => {
// eslint-disable-next-line no-unused-vars
let {isAuthenticated, user,isLoading} = useSelector((state) => state.auth);{
  if(isLoading){
    return <div>Loading...</div>
  }
  if(!user){
    return <Navigate to={"/"}  />
  }
}
  return <Outlet />
}

export default MainProtected