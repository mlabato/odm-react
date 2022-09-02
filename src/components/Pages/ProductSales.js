import Layout from "../UI/Layout";
import React from "react";
import Product from "../Products/Product";
import { renderSwitch } from "../App";

function Sales(props) {
  return (
    <Layout onClick={props.onShowCart}>
      {props.products !== undefined ? (
        props?.products?.map((product, i) => {
          return product.discount > 0 ? (
            //PRODUCT CARD
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
    </Layout>
  );
}

export default Sales;
