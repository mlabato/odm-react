import Layout from "../UI/Layout";
import React from "react";
import Product from "../Products/Product";
import { useParams } from "react-router-dom";
import { renderSwitch } from "../App";
import { renderCategory } from "../App";

function Categories(props) {
  //HOOKS
  const { category } = useParams();

  return (
    <Layout onClick={props.onShowCart}>
      {props.products !== undefined ? (
        props?.products?.map((product, i) => {
          return product.category === renderCategory(category) ? (
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

export default Categories;
