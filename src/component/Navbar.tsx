import { useNavigate } from "react-router-dom";
import logo from "../images/IssueTracker-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button"; // Make sure to import the Button component

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed ">
      <div className="navbar bg-white border-b border-black w-full h-24">
        <div className="navbar-start">
          <img
            src={logo}
            alt="logo"
            className="w-32 ml-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="navbar-center hidden lg:flex text-black">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                Company
                <svg
                  className="fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white border border-black">
                <li>
                  <a className="">Why we're here ?</a>
                </li>
                <li>
                  <a className="">Meet the team</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Contact us
                <svg
                  className="fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white border border-black">
                <li>
                  <a className="">Location</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Button onClick={() => navigate("/Login")} text="Log in" />
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn bg-white border-none lg:hidden text-black scale-100"
          >
            <GiHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content dropdown dropdown-bottom dropdown-end menu p-2 shadow border border-black bg-white text-black rounded-box w-52"
          >
            <li>
              <a>Company</a>
            </li>

            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
