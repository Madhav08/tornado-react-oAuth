import React from "react";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <h3>Welcome to 3-2-1 Go Check</h3>
      <p>Login to get Started</p>
      <a href="http://localhost:8888/" className="google-login">
        Login with Google
      </a>
    </div>
  );
};

export default App;
