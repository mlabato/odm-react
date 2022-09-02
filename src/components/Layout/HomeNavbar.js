import HamburguerMenu from "./HamburgerMenu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import CartButton from "../Layout/CartButton";

//THIS NAVBAR HAS 0 OPACITY AND IS FIXED. IT'S BEING USED ONLY IN THE HOMEPAGE

const HomeNavbar = (props) => {
  return (
    <section className="fixed z-50  w-full opacity-80  bg-white ">
      <article className="mx-[6rem] justify-between flex  flex-row items-center">
        <HamburguerMenu />

        <div className=" md:h-[120px] md:w-[120px] h-[50px] w-[50px] ">
          <img src="/images/logo.png" alt="" className="  " />
        </div>

        <div className="p-4 flex flex-row ">
          <CartButton onClick={props.onClick} />

          <div className="flex flex-row items-center mx-10">
            <a href="https://www.instagram.com/outletde_mates/">
              {" "}
              <FaInstagram className=" text-2xl sm:4xl mx-auto text-red-800 mr-4 hover:text-gray-500" />
            </a>

            <a href="https://api.whatsapp.com/send/?phone=5492323517210&text&app_absent=0">
              {" "}
              <FaWhatsapp className="text-2xl sm:4xl mx-auto text-red-800  hover:text-gray-500" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeNavbar;
