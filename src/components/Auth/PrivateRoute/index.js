import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../../provider/AuthContext";

const PrivateRoute = ({ component: Component, hasPermissions, permission, ...rest }) => {
    const { isSignedIn, hasPermission } = useAuth()
    return (
      <Route {...rest} render={(props) => (
        (isSignedIn && hasPermission(permission))
          ? <Component {...props} />
          : <Redirect to={"/"} />
      )} />
    )
  }

export default PrivateRoute;
