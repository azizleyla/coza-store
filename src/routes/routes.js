import { Route, Routes } from "react-router-dom";
import PageNotFound from "../components/common/PageNotFound";
import About from "../pages/About";
import Accessories from "../pages/Accessories";
import Blog from "../pages/Blog";
import CartPage from "../pages/CartPage";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Men from "../pages/Men";
import ShopPage from "../pages/ShopPage";
import Wishlist from "../pages/Wishlist";
import Women from "../pages/Women";

const ScrolltoTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
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
    <Route path="/shop" element={<ShopPage scrolltoTop={ScrolltoTop} />} />
    <Route path="/about" element={<About scrolltoTop={ScrolltoTop} />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route
      path="/contact"
      element={<Contact scrolltoTop={ScrolltoTop} />}
    />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
export default routes;
