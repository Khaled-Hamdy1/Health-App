import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login&SignIn/Login";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);

//Database Password: R1DtGifo3vjc7xHv
//Wi-Fi SSID:zz , Password: 12345678
