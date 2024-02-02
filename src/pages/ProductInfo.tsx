import React, { useEffect } from "react";
import ViewProductComponent from "../components/ViewProduct.component";
//type Props = {}

function ProductInfo() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return <ViewProductComponent />;
}

export default ProductInfo;
