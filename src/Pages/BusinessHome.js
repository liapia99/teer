import { Routes, Route, Link } from "react-router-dom";
import "./businesshome.css";

import Home from "../Pages/Home";
import Requests from "../Pages/Requests";
import Messages from "../Pages/BusinessMessages";
import Settings from "../Pages/BusinessSettings";

import Logo from "../Images/logo (1).png";

function BusinessHome() {
  return (
    <div className="Home">
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/requests">Requests</Link>
        <Link to="/businessmessages">Messages</Link>
        <Link to="/businesssettings">Settings</Link>
      </nav>
      <div></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/businessmessages" element={<Messages />} />
        <Route path="/businessmessages" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default BusinessHome;
