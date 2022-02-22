import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import FilterButtons from "./FilterButtons";
import Products from "./Products";
import Title from "../common/Title";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Shop = ({ products, isShow }) => {
  const { t } = useTranslation();
  return (
    <Wrapper isShow={isShow}>
      <Products products={products} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: ${(props) => (!props.isShow ? "100px" : "")};
`;
export default Shop;
