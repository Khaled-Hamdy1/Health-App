import { useState } from "react";
import "./login.css";
import useGetUserData from "../../hooks/useGetUserData";
import {  useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";
// import { Navigate, useNavigate } from "react-router-dom";
export default function Login() {
  let [register, setRegister] = useState(false);
  const [fullName, setFullName] = useState("");
  const [drEmail, setDrEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { data, loading } = useGetUserData("users");
  const navigate = useNavigate();


  function handleSignInSubmit(e) {
    e.preventDefault();
    const postData = {
      username: userName,
      full_name: fullName,
      doctor_email: drEmail,
      password: password,
    };
    if(loading) return;
    const userExist =  data.username === userName;
    if(!userExist) {
      fetch(`https://ctfuvqknojlnfxlkqccc.supabase.co/rest/v1/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0ZnV2cWtub2psbmZ4bGtxY2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NjQ4NTYsImV4cCI6MjAxODI0MDg1Nn0.7Q4Xtp_kJuo7dMeZuAF0ZZKRShJidQvfUSeGmjljvWs",
        },
        body: JSON.stringify(postData),
      })
        .then(data => {
          console.log('Data posted successfully:', data);
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
        alert("User created successfully");
        return;
      }else {
      alert("Username already exist");
      // setRegister(false);
    }
  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    const userExist = (data.username=== userName && password === data.password);
    console.log(data.username, userName, password, data.password);
    if(userExist) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    }else {
      alert("Wrong username or password");
    }
  }

  return (
    <section className={`wrapper ${register && "active"} sign-wrapper`}>
      <div className="form signup">
        <header onClick={() => setRegister(false)}>Signup</header>
        <form onSubmit={handleSignInSubmit}>
          <LoginInput value={fullName} setValue={setFullName} placeholder={"Full name"} />
          <LoginInput value={userName} setValue={setUserName} placeholder={"Username"} />
          <LoginInput value={drEmail} setValue={setDrEmail} placeholder={"Doctor Email"} />
          <LoginInput value={password} setValue={setPassword} placeholder={"Password"} />
          <button type="submit" className="login-btn">
            Signup
          </button>
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setRegister(true)}>Login</header>
        <form onSubmit={handleLogInSubmit}>
          <LoginInput value={userName} setValue={setUserName} placeholder={"Username"} />
          <LoginInput value={password} setValue={setPassword} placeholder={"Password"} />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}