import React, { useState } from "react";
import Form from "../form/index";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
