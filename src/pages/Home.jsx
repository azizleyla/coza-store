import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BacktoTopBtn } from "../components/Buttons/Button";
import Categories from "../components/home/Categories";
import Footer from "../components/footer/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/navbar/Navbar";
import FilterButtons from "../components/products/FilterButtons";
import Products from "../components/products/Products";
import Title from "../components/common/Title";
import PageHeader from "../components/common/TopBar";
import { useTranslation } from "react-i18next";
import * as actionType from "../redux/actions/actionTypes";
const Home = ({ scrolltoTop }) => {
  const { t } = useTranslation();
  const products = useSelector((state) => state.products);
  return (
    <div>
      <PageHeader />
      <Navbar />
      <Hero />
      <Categories />
      <Title text={t("product_overview")} />
      {/* <FilterButtons /> */}
      <Products products={products} />
      <Footer />
      <BacktoTopBtn onClick={scrolltoTop}>
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </BacktoTopBtn>
    </div>
  );
};

export default Home;
