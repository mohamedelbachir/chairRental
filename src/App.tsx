import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { nprogress } from "@mantine/nprogress";
import { useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductInfo from "./pages/ProductInfo";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";

//Layout
import Layout from "./layouts/Layout";
import CartLayout from "./layouts/CartLayout";
//import ShopLayout from "./layouts/ShopLayout";

//links
import LINK from "./utils/LinkApp";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    const start = () => {
      nprogress.start();
      setTimeout(() => {
        done();
      }, 250);
    };

    const done = () => {
      nprogress.complete();
    };
    start();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path={LINK.HOME.shortlink} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={LINK.CONTACT.shortlink} element={<Contact />}></Route>
          <Route path={LINK.SHOP.shortlink}>
            <Route index element={<Shop />}></Route>
            <Route
              path={LINK.SHOP.DETAILS.shortlink + "/:id"}
              element={<ProductInfo />}
            ></Route>
          </Route>
          <Route path={LINK.CART.shortlink} element={<CartLayout />}>
            <Route index element={<Cart />}></Route>
            <Route
              path={LINK.CART.CHECKOUT.shortlink}
              element={<CheckoutPage />}
            ></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
