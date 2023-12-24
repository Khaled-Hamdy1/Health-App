import { useState } from "react";
import "./login.css";
import useGetUserData from "../../hooks/useGetUserData";
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";

const createUser = async (data) => {
  try {
    const res = await fetch(
      `https://ctfuvqknojlnfxlkqccc.supabase.co/rest/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0ZnV2cWtub2psbmZ4bGtxY2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NjQ4NTYsImV4cCI6MjAxODI0MDg1Nn0.7Q4Xtp_kJuo7dMeZuAF0ZZKRShJidQvfUSeGmjljvWs",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Error posting data");
    }

    const jsonData = await res.text();
    console.log("Data posted successfully:", jsonData);
    alert("User created successfully");
    return jsonData;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export default function Login() {
  let [register, setRegister] = useState(false);
  const { data, loading } = useGetUserData("users");
  const navigate = useNavigate();

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    if (loading) return;

    const userExist = data.find((el) => el.username === formData.username);
    
    if (userExist) {
      alert("Username already exist");
      return;
    }
    await createUser(formData);
    e.target.reset();
  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(e.target).entries()
    );
    const user = data.find(
      (el) => el.username === username && el.password === password
    );

    if (!user) {
      alert("Wrong username or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  }

  return (
    <section className={`wrapper ${register ? "active" : ""} sign-wrapper`}>
      <div className="form signup">
        <header onClick={() => setRegister(false)}>Signup</header>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full name"
            required
          />
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="email"
            name="doctor_email"
            placeholder="Doctor Email"
            required
          />
          <input
            type="Password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-btn">
            Signup
          </button>
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setRegister(true)}>Login</header>
        <form onSubmit={handleLogInSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
