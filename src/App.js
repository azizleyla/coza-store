import SidebarCart from "./components/SidebarCart";
import routes from "./routes/routes";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from "./redux/actions/actionTypes";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import ShopPage from "./pages/ShopPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import PageNotFound from "./components/common/PageNotFound";

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  const ScrolltoTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const filters = useSelector((state) => state.filters);
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionType.FILTER_PRODUCTS });
  }, [filters]);

  return (
    <div>
      <SidebarCart />
      <Routes>
        <Route path="/" element={<Home scrolltoTop={ScrolltoTop} />} />
        <Route
          path="/collections/women"
          element={<Women scrolltoTop={ScrolltoTop} />}
        />
        <Route
          path="/collections/men"
          element={<Men scrolltoTop={ScrolltoTop} />}
        />
        <Route
          path="/collections/accessories"
          element={<Accessories scrolltoTop={ScrolltoTop} />}
        />
        <Route
          path="/shop"
          element={
            <ShopPage products={products} scrolltoTop={ScrolltoTop} />
          }
        />
        <Route
          path="/about"
          element={<About scrolltoTop={ScrolltoTop} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/contact"
          element={<Contact scrolltoTop={ScrolltoTop} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
