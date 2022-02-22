import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BacktoTopBtn } from "../components/Buttons/Button";
import BreadCrumb from "../components/common/BreadCrumb";
import FilterBySize from "../components/FilterBySize";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Shop from "../components/products/ProductsContainer";

const ShopPage = ({ scrolltoTop }) => {
  const products = useSelector((state) => state.filteredProducts);

  return (
    <Wrapper>
      <Navbar fixed="true" />
      <BreadCrumb label="Products" />
      <div className="row container">
        <div className="filterbox">
          <FilterBySize />
        </div>
        <div className="products-box">
          <Shop isShow="true" products={products} />
        </div>
      </div>
      <BacktoTopBtn onClick={scrolltoTop}>
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </BacktoTopBtn>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .row {
    display: flex;
    grid-gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .filterbox {
    width: 250px;

    span {
      text-transform: uppercase;
      color: #111;
      font-size: 15px;
      margin-bottom: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }
  }
  .products-box {
    width: 100%;
    margin-left: 3rem;
    @media (max-width: 992px) {
      margin-left: 0;
    }
  }
`;

export default ShopPage;
