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

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <HeaderContainer>
            <Feature>
              <Feature.Title>
                Unlimited movies, TV shows, and more.
              </Feature.Title>
              <Feature.Subtitle>
                Watch anywhere. Cancel at anytime.
              </Feature.Subtitle>
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership
              </OptForm.Text>
              <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break />
              </OptForm>
            </Feature>
          </HeaderContainer>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
      </Router>
    </>
  );
}
