import { useNavigate } from "react-router-dom";
import logo from "../images/IssueTracker-logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer items-center p-4  text-neutral-content bg-white md:bg-primary lg:bg-warning border-t border-black grid grid-cols-1 lg:grid-cols-3   ">
      <div className="flex text-black col-span-1 md:col-span-1 lg:col-span-1 place-self-center justify-self-center md:place-self-start md:justify-self-start order-2 md:order-1 ">
        <BsTwitter />
        <BsYoutube />
        <BsInstagram />
        <BsFacebook />
      </div>
      <div className="col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1 order-1  md:order-3 lg:place-self-end lg:justify-self-end ">
        <img src={logo} alt="logo" className="w-40" />
      </div>
      <div className=" col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1  order-3  md:order-2 hidden md:block">
        <p className="">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
