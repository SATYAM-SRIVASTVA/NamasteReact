import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../Assets/Logo.jpg'
import { useOnline } from "./Hooks/useOnline";


// Composing Comopnentss
export const Header = () => {
  const [isUser, setIsUser] = useState(false);
  const isOnline=useOnline();

  return (
    <div className="header">
      <a href="/">
    <img
      className="logo"
      alt="logo"
      src={Logo}
    />
  </a>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>

          {
            isOnline?<li>✅</li>:<li>❌</li>
          }
          <li>
            {isUser ? (
              <button
                className="nav-btn"
                onClick={() => setIsUser(false)}
              >
                Logout
              </button>
            ) : (
              <button 
                className="nav-btn"
                onClick={() => setIsUser(true)}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
