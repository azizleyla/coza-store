import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Shop from "../components/products/ProductsContainer";
import Spinner from "../components/common/Spinner";
import { BacktoTopBtn } from "../components/Buttons/Button";

const Accessories = ({ scrolltoTop }) => {
  const products = useSelector((state) =>
    state.products.filter(
      (item) => item.category === "bag" || item.category === "watches",
    ),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <>
      <Navbar fixed="true" />
      {loading ? (
        <Spinner />
      ) : (
        <Shop isShow={false} label="Accessories" products={products} />
      )}
      <BacktoTopBtn onClick={scrolltoTop}>
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </BacktoTopBtn>
      <Footer />
    </>
  );
};

export default Accessories;
