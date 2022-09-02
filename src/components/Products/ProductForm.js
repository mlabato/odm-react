import { useRef, useState } from 'react';
import {FaShoppingBag} from "react-icons/fa"

import Input from "../UI/Input"


const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="flex flex-row items-center border  border-red-900 hover:border-transparent rounded" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        
        input={{
          id: 'cantidad',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button> <FaShoppingBag className="text-red-700 hover:text-gray-500 cursor-pointer text-2xl"/> </button>
      {!amountIsValid && <p>Ingresá una cantidad válida (1-5).</p>}
    </form>
  );
};

export default ItemForm;

