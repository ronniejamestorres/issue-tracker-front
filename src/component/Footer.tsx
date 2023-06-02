import { useNavigate } from "react-router-dom";
import logo from "../images/IssueTracker-logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ButtonFooter from "./ButtonFooter";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer items-center p-4  text-neutral-content  bg-white  border-t border-black grid grid-cols-1 lg:grid-cols-3 lg:h-24 ">
      <div className="col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1 order-2 text-black  md:order-1 md:place-self-center md:justify-self-start lg:place-self-center lg:justify-self-start flex  ">
        <BsTwitter
          size={20}
          className="hover:scale-150 m-2 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <BsYoutube
          size={20}
          className="hover:scale-150 m-2 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <BsInstagram
          size={20}
          className="hover:scale-150 m-2 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <BsFacebook
          size={20}
          className="hover:scale-150 m-2 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1 order-1  md:order-3 lg:place-self-center lg:justify-self-end ">
        <img
          src={logo}
          alt="logo"
          className="w-32  cursor-pointer hover:scale-105"
          onClick={() => navigate("/")}
        />
      </div>
      <div className=" col-span-1 place-self-center justify-self-center  md:col-span-1 lg:col-span-1  order-3  md:order-2 hidden md:block lg:place-self-center lg:justify-self-end text-xs  ">
        <ButtonFooter onClick={() => navigate("/Company")} text="Company" />
        <ButtonFooter
          onClick={() => navigate("/ContactUs")}
          text="Contact us"
        />
      </div>
    </footer>
  );
}

export default Footer;
