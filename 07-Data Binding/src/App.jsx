import React, { useState } from 'react';

const App = () => {
  // 1. Move state to the top level of the component
  const [username, setUsername] = useState("");

  // 2. Keep the submit handler at the top level
  function handleSubmit(e) {
    e.preventDefault();
    alert("Welcome " + username);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder='Enter Your Name'
          value={username}
          onChange={(e) =>
            // console.log(e.target.value);
            setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
