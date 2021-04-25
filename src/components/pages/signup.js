import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../context/firebase";
import { useHistory } from "react-router-dom";
import Form from "../form/index";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import * as ROUTES from "../../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName == "" || password == "" || emailAddress == "";

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <FooterContainer />
    </>
  );
}
