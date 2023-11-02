import React, { useState } from "react";
import Navigation from "./navigation";

import UserDetailsContext from "./context/user-details-context";

export default function App() {
  const [userDetails, setUserDetails] = useState({ username: "" });

  return (
    <>
      <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <Navigation initialRouteName="HOME" />
      </UserDetailsContext.Provider>
    </>
  );
}
