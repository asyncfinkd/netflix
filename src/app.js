import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumbotronContainer from "./components/containers/jumbotron";
import FooterContainer from "./components/containers/footer";
import FaqsContainer from "./components/containers/faqs";
import * as ROUTES from "./constants/routes";
import HeaderContainer from "./components/containers/header";
import OptForm from "./components/opt-form/index";
import Feature from "./components/feature/index";
import Form from "./components/form/index";

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
          <HeaderContainer>
            <Form>
              <Form.Title>Sign In</Form.Title>
              {/* {error && <Form.Error data-testid="error">{error}</Form.Error>} */}

              <Form.Base
                // onSubmit={handleSignin}
                method="POST"
              >
                <Form.Input
                  placeholder="Email address"
                  // value={emailAddress}
                  // onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Input
                  type="password"
                  // value={password}
                  autoComplete="off"
                  placeholder="Password"
                  // onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Submit
                  // disabled={isInvalid}
                  type="submit"
                  data-testid="sign-in"
                >
                  Sign In
                </Form.Submit>
              </Form.Base>

              <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
              </Form.Text>
              <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </Form.TextSmall>
            </Form>
          </HeaderContainer>
          <FooterContainer />
        </Route>
      </Router>
    </>
  );
}
