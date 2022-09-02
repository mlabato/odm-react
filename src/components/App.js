import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductContext from"../store/products-context"
import Home from "../components/Pages/Home";
import AllProducts from "./Pages/AllProducts";
import ProductCategories from "./Pages/ProductCategories";
import ProductSales from "./Pages/ProductSales";
import ProductDetails from "./Pages/ProductDetails";

import CartProvider from "../store/CartProvider";
import Cart from "./Cart/Cart";

//FN TO SHOW PRODUCT CATEGORY
export const renderSwitch = (category) => {
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
};

//FN TO CHECK PARAMS VS CATEGORY IN CATEGORIES PAGES
export const renderCategory = (params) => {
  switch (params) {
    case "mates":
      return 1;
    case "materas":
      return 2;
    case "bombillas":
      return 3;
    case "termos":
      return 4;
    default:
      return "foo";
  }
};


function App() {
  const productsCtx = useContext(ProductContext);
  const products = productsCtx.products.products;

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="font-league">
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
      
        <Routes>
          <Route
            path="/ofertas"
            element={
              <ProductSales products={products} onShowCart={showCartHandler} />
            }
          />
          <Route
            path="/productos"
            element={
              <AllProducts products={products} onShowCart={showCartHandler} />
            }
          />
          <Route
            path="/productos/:id"
            element={
              <ProductDetails
                products={products}
                onShowCart={showCartHandler}
              />
            }
          />
          <Route
            path="/:category"
            element={
              <ProductCategories
                products={products}
                onShowCart={showCartHandler}
              />
            }
          />

          <Route
            path="/"
            element={
              <Home
                products={products}
                onShowCart={showCartHandler}
              />
            }
          />

         
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
