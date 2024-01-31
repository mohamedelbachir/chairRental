import React, { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { nprogress } from "@mantine/nprogress";
import { useLocation } from "react-router-dom";

//pages
//import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductInfo = lazy(() => import("./pages/ProductInfo"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

//Layout
import Layout from "./layouts/Layout";
import ShopLayout from "./layouts/ShopLayout";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Shop" element={<ShopLayout />}>
            <Route index element={<Shop />}></Route>
            <Route path="Detail/:id" element={<ProductInfo />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
