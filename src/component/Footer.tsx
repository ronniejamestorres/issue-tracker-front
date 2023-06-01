import { useNavigate } from "react-router-dom";
import logo from "../images/IssueTracker-logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer items-center p-4  text-neutral-content bg-white  border-t border-black grid grid-cols-1 lg:grid-cols-3 h-24   ">
      <div className="col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1 order-2 text-black  md:order-1 md:place-self-center md:justify-self-start lg:place-self-center lg:justify-self-start flex ">
        <BsTwitter />
        <BsYoutube />
        <BsInstagram />
        <BsFacebook />
      </div>
      <div className="col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1 order-1  md:order-3 lg:place-self-center lg:justify-self-end ">
        <img
          src={logo}
          alt="logo"
          className="w-32 ml-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className=" col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1  order-3  md:order-2 hidden md:block lg:place-self-center lg:justify-self-end ">
        <p className="">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
