import React, { useEffect, useContext, useState } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../../context/firebase";
import Loading from "../../components/loading/index";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return (
    <>
      {profile.displayName ? (
        loading ? (
          <Loading src={user.photoURL} />
        ) : null
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
}
