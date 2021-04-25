import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function isUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  return (
    <>
      <Route
        {...rest}
        render={() => {
          if (!user) {
            return children;
          }

          if (user) {
            return (
              <Redirect
                to={{
                  pathname: loggedInPath,
                }}
              />
            );
          }

          return null;
        }}
      />
    </>
  );
}
