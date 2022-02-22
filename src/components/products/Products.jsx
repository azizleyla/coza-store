import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  const { t } = useTranslation();

  // const products = useSelector((state) => state.products);
  // const filteredProducts = useSelector((state) => state.filteredProducts);
  const [noofElement, setNoOfElement] = useState(12);
  // const productsSlice = products.slice(0, noofElement);

  const [showDetail, setShowDetail] = useState(false);

  const loadMore = () => {
    setNoOfElement(noofElement + noofElement / 2);
  };

  return (
    <>
      <Wrapper>
        <ProductsContainer className="container">
          {products.map((product) => (
            <SingleProduct
              setShowDetail={setShowDetail}
              {...product}
              key={product.id}
            />
          ))}
        </ProductsContainer>
        <div className="btn-container">
          <button className="trans-04" onClick={loadMore}>
            {t("load_more")}
          </button>
        </div>
      </Wrapper>
      {showDetail && (
        <ProductDetails
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};
const Wrapper = styled.div`
  padding: 2.3rem 0 14rem 0;
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4.5rem;
    button {
      border-radius: 23px;
      background-color: #e6e6e6;
      font-size: 15px;
      line-height: 1.466667;
      text-transform: uppercase;
      border: none;
      font-weight: 500;
      min-width: 179px;
      height: 46px;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
      border: 1px solid transparent;

      &:hover {
        border-color: #222;
        background-color: #222;
        color: #fff;
      }
    }
  }
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Products;
