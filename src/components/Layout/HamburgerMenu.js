import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const HamburguerMenu = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section>
      <BiMenu
        onClick={() => setShowNav(!showNav)}
        className="text-4xl mr-10 text-red-800 hover:text-gray-500"
      />

      <article
        className={
          (showNav ? "left-0 " : "-left-full") +
          " fixed top-15   bg-red-900  w-100 text-white space-y-5 z-20 p-2 transition-left"
        }
      >
        <div className="p-2 font-bold">
          {" "}
          <a href="/" className="md:text-2xl text-base hover:text-gray-500">
            Home
          </a>
        </div>
        <div className="p-2 font-bold">
          {" "}
          <a
            href="/productos"
            className="md:text-2xl text-base hover:text-gray-500"
          >
            Productos
          </a>
        </div>
        <div className="p-2 ">
          {" "}
          <a
            href="/mates"
            className="md:text-2xl text-base ml-2 hover:text-gray-500"
          >
            Mates
          </a>
        </div>
        <div className="p-2">
          <a
            href="/materas"
            className="md:text-2xl text-base ml-2 hover:text-gray-500"
          >
            Materas
          </a>
        </div>
        <div className="p-2 ">
          <a
            href="/bombillas"
            className="md:text-2xl text-base ml-2 hover:text-gray-500"
          >
            Bombillas
          </a>
        </div>
        <div className="p-2 ">
          <a
            href="/termos"
            className="md:text-2xl text-base ml-2 hover:text-gray-500"
          >
            Termos
          </a>
        </div>
        <div className="p-2 font-bold">
          {" "}
          <a
            href="/ofertas"
            className="md:text-2xl text-base hover:text-gray-500"
          >
            Ofertas
          </a>
        </div>
        <div className="p-2 font-bold">
          {" "}
          <a
            href="/contacto"
            className="md:text-2xl text-base hover:text-gray-500"
          >
            Contactanos
          </a>
        </div>
        <div className="p-2 font-bold">
          {" "}
          <a
            href="/nosotros"
            className="md:text-2xl text-base hover:text-gray-500"
          >
            Sobre nosotros
          </a>
        </div>
      </article>
    </section>
  );
};

export default HamburguerMenu;
