import React from "react";
import { Inner, Container } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <>
      <Inner direction={direction}>{children}</Inner>
    </>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <>
      <Container {...restProps}>{children}</Container>
    </>
  );
};
