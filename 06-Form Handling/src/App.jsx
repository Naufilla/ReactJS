import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Welcome " + username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;