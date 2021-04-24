import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumbotronContainer from "./components/containers/jumbotron";
import FooterContainer from "./components/containers/footer";
import FaqsContainer from "./components/containers/faqs";
import * as ROUTES from "./constants/routes";
import HeaderContainer from "./components/containers/header";
import OptForm from "./components/opt-form/index";
import Feature from "./components/feature/index";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <HeaderContainer>
            <Feature>
              <Feature.Title>
                Unlimited films, TV programmes and more.
              </Feature.Title>
              <Feature.Subtitle>
                Watch anywhere. Cancel at any time.
              </Feature.Subtitle>
            </Feature>
            <OptForm>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership
              </OptForm.Text>
            </OptForm>
          </HeaderContainer>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}></Route>
      </Router>
    </>
  );
}
