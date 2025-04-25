import React, { useEffect, useState } from "react";
import "./navbar.css";
import header_logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { app } from "../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

const Navbar = () => {
  const [homePage, setHomePage] = useState(true);
  const [aboutPage, setAboutPage] = useState(false);
  const [jobPage, setJobPage] = useState(false);
  const [collegePage, setCollegePage] = useState(false);
  const [servicePage, setServicePage] = useState(false);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  function onHomeActive() {
    setHomePage(true);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
    setAboutPage(false);
  }

  function onGovtActive() {
    setJobPage(true);
    setAboutPage(false);
    setHomePage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  function onServiceActive() {
    setServicePage(true);
    setAboutPage(false);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
  }

  function onCollegeActive() {
    setCollegePage(true);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  function onAboutActive() {
    setAboutPage(true);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  return (
    <div className="main-bar sticky-top">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="logo-header">
          <Link to="/">
            <img src={header_logo} />
          </Link>
        </div>

        <ul>
          {/* <li className="active"><Link to="/">Home</Link></li> */}
          <li
            className={`${homePage ? "active" : ""}`}
            onClick={() => onHomeActive()}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${jobPage ? "active" : ""}`}
            onClick={() => onGovtActive()}
          >
            <Link to="/govt-jobs">Govt-Jobs</Link>
          </li>
          <li
            className={`${collegePage ? "active" : ""}`}
            onClick={() => onCollegeActive()}
          >
            <Link to="/college-notification">College Notification</Link>
          </li>
          <li
            className={`${servicePage ? "active" : ""}`}
            onClick={() => onServiceActive()}
          >
            <Link to="/our-services">Our Services</Link>
          </li>
          <li
            className={`${aboutPage ? "active" : ""}`}
            onClick={() => onAboutActive()}
          >
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            {user ? (
              <div className="flex">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-semibold">{user.user.trim()[0].toUpperCase()}</div>
              <button
                onClick={signInWithGoogle}
                className="hover:bg-blue-700 px-6 text-white text-xl rounded py-1"
              >
                Logout
              </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="hover:bg-blue-700 px-6 text-white text-xl rounded py-1"
              >
                Login
              </button>

            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
