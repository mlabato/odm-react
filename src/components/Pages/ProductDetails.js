import React from "react";
import { useParams } from "react-router-dom";
import SectionsNavbar from "../Layout/SectionsNavbar";
import Footer from "../Layout/Footer";
import { FaWhatsapp } from "react-icons/fa";

function Details(props) {
  //HOOKS
  const { id } = useParams();

  //SWITCH PARA MOSTRAR CATEGORÍA EN TARJETA DE PRODUCTO
  function renderSwitch(category) {
    switch (category) {
      case 1:
        return "Mate";
      case 2:
        return "Matera";
      case 3:
        return "Bombilla";
      case 4:
        return "Termo";
      default:
        return "foo";
    }
  }

  return (
    <section>
      <SectionsNavbar />
      {props.products !== undefined
        ? console.log(typeof props.products[1].id.toString())
        : ""}

      {props.products !== undefined ? (
        <section className="flex flex-col flex-wrap sm:flex-col md:flex-col lg:flex-row mx-auto justify-center p-2 ">
          {props?.products?.map((product, i) => {
            return product.id.toString() === id ? (
              <article className="  p-4 flex flex-col md:flex-row lg:flex-row  w-full mx-auto  hover:drop-shadow-md">
                {/* Image */}

                <img
                  src={product.image}
                  alt=""
                  className="lg:object-contain object-scale-down w-2/3  mx-auto "
                />

                {/* PRODUCT DESCRIPTION */}
                <div className="flex flex-col  my-auto ">
                  {/* Model title */}
                  <div className="text-4xl text-center font-bold">
                    {renderSwitch(product.category)} - {product.model}
                  </div>

                  {/* Price title (with or whithout discount) */}
                  {product.discount > 0 ? (
                    <div className="flex flex-row justify-center ">
                      <div className="text-2xl  mt-2 p-2 font-bold line-through text-red-900 ">
                        {" "}
                        {"$" + product.price}{" "}
                      </div>
                      <div className="text-4xl  mt-2 p-2 font-bold text-green-600">
                        {" "}
                        {"$" +
                          (product.price -
                            product.price / product.discount)}{" "}
                      </div>
                      <div className="text-xl  mt-2 p-2 text-green-600">
                        {" "}
                        {product.discount + "%"}{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="text-4xl text-center mt-2 p-2 font-bold  text-red-900">
                      {" "}
                      {"$" + product.price}{" "}
                    </div>
                  )}

                  {/* Description */}
                  <div className=" mx-auto w-2/3 p-4 text-justify  ">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
                    purus in massa egestas mollis varius; dignissim elementum.
                    Mollis tincidunt mattis hendrerit dolor eros enim, nisi
                    ligula ornare.
                  </div>

                  {/* Contact */}

                  <a href="https://api.whatsapp.com/send/?phone=5492323517210&text&app_absent=0">
                    <FaWhatsapp className="text-4xl sm:8xl mx-auto text-red-800  hover:text-gray-500 w-1/10" />
                  </a>
                </div>
              </article>
            ) : (
              ""
            );
          })}
        </section>
      ) : (
        <span>Loading...</span>
      )}

      <Footer />
    </section>
  );
}

export default Details;
