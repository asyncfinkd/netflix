import React from "react";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";
import Feature from "../feature";
import OptForm from "../opt-form";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
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
    </>
  );
}
