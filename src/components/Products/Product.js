import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

//import ProductForm from "../Products/ProductForm"
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const price = props.price;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      model: props.model,
      category: props.category,
      discount: props.discount,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <article
      key={"article" + props.i}
      className="group lg:my-[50px] md:my-[20px] lg:w-1/5 lg:h-2/5 lg:flex-wrap bg-blend-hard-lighthover:border-solid  hover:border-grey-200 hover:border-[1px] rounded-lg "
    >
      {/* Image */}
      <img
        key={"img" + props.i}
        src={props.image}
        alt=""
        className="h-1/4 w-1/4 sm:h-full sm:w-full object-cover p-2  mx-auto "
      />

      {/* Model title*/}
      <div
        key={"model" + props.i}
        className="text-2xl text-center mt-2 p-2 text-red-900 font-extralight hover:text-gray-500 "
      >
        <a href="/id">
          {" "}
          {props.renderSwitch(props.category)} - {props.model}{" "}
        </a>
      </div>

      {/* Price title (with or whithout discount) */}
      {props.discount > 0 ? (
        <div className="flex flex-row justify-center ">
          <div
            key={"price1" + props.i}
            className="text-2xl  mt-2 p-2 font-bold line-through text-red-900 "
          >
            {" "}
            {"$" + props.price}{" "}
          </div>
          <div
            key={"price2" + props.i}
            className="text-4xl  mt-2 p-2 font-bold text-green-600"
          >
            {" "}
            {"$" + (props.price - props.price / props.discount)}{" "}
          </div>
          <div
            key={"discount" + props.i}
            className="text-xl  mt-2 p-2 text-green-600"
          >
            {" "}
            {props.discount + "%"}{" "}
          </div>
        </div>
      ) : (
        <div
          key={"price" + props.i}
          className="text-4xl text-center mt-2 p-2 font-bold  text-red-900"
        >
          {" "}
          {"$" + props.price}{" "}
        </div>
      )}

      {/* Detail / Whatsapp button */}
      <div className="  relative bottom-16-z-50 bottom-[40px] flex  group-hover:z-10 group-hover:bottom-0  duration-500 flex-row mx-auto justify-center p-4 w-1/3 opacity-0 group-hover:opacity-100">
        <button className="bg-transparent hover:bg-red-900  text-red-900  font-semibold hover:text-white mr-3 py-2 px-4 border  border-red-900 hover:border-transparent rounded">
          <a href={"/productos/" + props.id}> Detalle</a>
        </button>
        <button
          className="bg-transparent hover:bg-red-900  text-red-900  font-semibold hover:text-white mr-3 py-2 px-4 border  border-red-900 hover:border-transparent rounded"
          onClick={addToCartHandler}
        >
          <FaCartPlus />
        </button>
        {/*<ProductForm onAddToCart={addToCartHandler} /> */}
      </div>
    </article>
  );
};

export default Product;
