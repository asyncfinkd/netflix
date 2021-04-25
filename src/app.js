import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumbotronContainer from "./components/containers/jumbotron";
import FooterContainer from "./components/containers/footer";
import FaqsContainer from "./components/containers/faqs";
import * as ROUTES from "./constants/routes";
import HeaderContainer from "./components/containers/header";
import OptForm from "./components/opt-form/index";
import Feature from "./components/feature/index";
import SignIn from "./components/pages/signin";
import Signup from "./components/pages/signup";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import Home from "./components/pages/home";

export default function App() {
  const user = null;
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
