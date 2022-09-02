import Product from "../Products/Product";
import { renderSwitch } from "../App";

const DiscountWrapper = (props) => {
  return (
    <section className="relative w-full flex flex-col md:flex-row mx-auto justify-center p-2 ">
      
      {props.products !== undefined ? (
        props?.products?.map((product, i) => {
          return product.discount > 0 ? (
            
            <Product
              i={i}
              id={product.id}
              image={product.image}
              model={product.model}
              price={product.price}
              discount={product.discount}
              category={product.category}
              renderSwitch={renderSwitch}
            />
            
            
          ) : (
            ""
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </section>
  );
};

export default DiscountWrapper;
 