import { useState } from "react";
import "./login.css";
// import { Navigate, useNavigate } from "react-router-dom";
export default function Login() {
  // get current user from local storage
  let [currentuser,setCurrentUser] =useState(localStorage.getItem("user") || "none");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate  = useNavigate();

  // get users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || {};

  const [register, setRegister] = useState(false);

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    // Check if username already exists
    const userExists = username in users;

    if (userExists) {
      alert("Username already exists");
      return;
    } else {
      alert("Account created successfully");
    }

    // add user to local storage
    users[username] = { fullName, username, password, measures: [] };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", username);

    // reset user data
    setFullName("");
    setUsername("");
    setPassword("");
    // redirect to login page
    // navigate("/Home");
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();

    // Check if username already exists
    const userExists = username in users;

    if (!userExists && users[currentuser].password !== password) {
      alert("Username or password is incorrect");
      return;
    }

    currentuser = users[username];

    // add user to local storage
    localStorage.setItem("user", username);

    // redirect to login page
    // navigate("/Home");
  };

  return (
    <section className={`wrapper ${register && "active"} sign-wrapper`}>
      <div className="form signup">
        <header onClick={() => setRegister(false)}>Signup</header>
        <form onSubmit={handleSignInSubmit}>
          <input
            type="text"
            placeholder="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            pattern="[a-z]{4,8}"
            title="Username must be 4-8 characters long and lowercase"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            pattern=".{8,}"
            title="Password must be 8 characters long"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Signup
          </button>
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setRegister(true)}>Login</header>
        <form onSubmit={handleLogInSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
