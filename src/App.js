import React, { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h1>Welcome, {name}!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
