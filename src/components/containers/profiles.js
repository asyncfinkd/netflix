import React from "react";
import * as ROUTES from "../../constants/routes";
import Header from "../header/index";
import Profiles from "../profiles/index";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg"
            alt="netflix"
          />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} alt="" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
