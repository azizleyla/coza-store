import React from "react";
import styled from "styled-components";
import { ContinueShoppingBtn } from "../Buttons/Button";

const EmptyCartMessage = () => {
  return (
    <Wrapper>
      <h4>You dont have any items in your cart</h4>
      <ContinueShoppingBtn to="/">Continue Shopping</ContinueShoppingBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  flex-direction: column;
  h4 {
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.02em;
    overflow-wrap: break-word;
    word-wrap: break-word;
    font-size: 18px;
  }
`;
export default EmptyCartMessage;
