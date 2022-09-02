import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className="bg-red-700 text-white group   rounded-3xl flex flex-row items-center p-4"
      onClick={props.onClick}
    >
      <CartIcon />

      <p className="font-bold group-hover:text-gray-500">{numberOfCartItems}</p>
    </button>
  );
};

export default HeaderCartButton;

