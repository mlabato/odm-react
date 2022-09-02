import Product from "../Products/Product";
import Layout from "../UI/Layout";
import { renderSwitch } from "../App";

function AllProducts(props) {
  return (
    <Layout onClick={props.onShowCart}>
      {props.products !== undefined ? (
        props.products.map((product, i) => {
          return (
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
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </Layout>
  );
}

export default AllProducts;
