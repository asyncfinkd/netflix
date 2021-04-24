import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div``;
export const Error = styled.div``;
export const Base = styled.div``;
export const Text = styled.p``;
export const Title = styled.h1``;
export const TextSmall = styled.p``;
export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration-line: underline;
  }
`;
