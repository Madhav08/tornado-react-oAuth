import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const SecretPage = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(Cookies.get("user"));
  }, []);
  return (
    <div className="App">
      <h3>Hello {user}</h3>
      {console.log("USer>>>>>>>>>>>.", JSON.stringify(user))}
      {console.log("Cookies>>>>>>>..", Cookies.get("user"))}
    </div>
  );
};

export default SecretPage;
