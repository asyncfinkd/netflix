import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignIn from "./components/pages/signin";
import Signup from "./components/pages/signup";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import Home from "./components/pages/home";
import useAuthListener from "./hooks/use-auth-listener";

export default function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <p>browse</p>
        </ProtectedRoute>
      </Router>
    </>
  );
}
