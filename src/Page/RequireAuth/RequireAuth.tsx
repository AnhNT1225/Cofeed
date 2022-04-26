
import { useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
// import userHelper from "../../helpers/user";


const RequireAuth = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  let isAuthenticated = false
  // const authenticateUser = useAppSelector(authSelector)
  // let isAuthenticated = localStorage.get('isAuth');
  let location = useLocation();
  // console.log("authenticate state: ", isAuthenticated);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
