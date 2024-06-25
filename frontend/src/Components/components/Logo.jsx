import {Link} from "react-router-dom";

import logo from "../../assets/logo.png";
import "../styles/Logo.css";

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </Link>
  );
}
