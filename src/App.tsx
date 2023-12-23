import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductInfo from "./pages/ProductInfo";
import NotFoundPage from "./pages/NotFoundPage";
//Layout
import Layout from "./layouts/Layout";
import ShopLayout from "./layouts/ShopLayout";

function App() {
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
