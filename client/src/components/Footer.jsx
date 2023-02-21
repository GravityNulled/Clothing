import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto md:w-5/6">
        <div className="grid gap-2  md:grid-cols-3">
          {/* RIGHT */}
          <div className="flex gap-3 flex-col">
            <Link to={"/"}>
              <h1 className="font-bold text-xl md:text-2xl">CLOTHING.</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              blanditiis libero recusandae repellendus molestias a dolorum
              aliquid modi cum placeat.
            </p>
            <div className="flex gap-2">
              <BsFacebook size={25} className="text-teal-500" />
              <BsTwitter size={25} className="text-teal-500" />
              <BsInstagram size={25} className="text-teal-500" />
              <BsYoutube size={25} className="text-teal-500" />
            </div>
          </div>
          {/* CENTER */}
          <div className="flex gap-3 flex-col">
            <h1 className="font-bold text-xl md:text-2xl">Usefull Links</h1>
            <div className="flex gap-3 flex-col">
              <Link className="hover:text-teal-500" to={"/"}>
                Home
              </Link>
              <Link className="hover:text-teal-500" to={"/cart"}>
                Cart
              </Link>
              <Link className="hover:text-teal-500" to={"/login"}>
                Login
              </Link>
              <Link className="hover:text-teal-500" to={"/register"}>
                Register
              </Link>
            </div>
          </div>
          {/* LEFT */}
          <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-xl md:text-2xl">Contact</h1>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-teal-500" />{" "}
              <p>Mwembe Tayari, Mombasa Kenya</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill className="text-teal-500" />{" "}
              <p>0720179897</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-teal-500" />{" "}
              <p>annexomar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
