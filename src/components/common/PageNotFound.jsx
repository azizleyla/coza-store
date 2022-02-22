import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import PageNotFoundImg from "../../images/page_not_found.jpg";
import { ContinueShoppingBtn } from "../Buttons/Button";


const PageNotFound = () => {
  return (
    <Wrapper>
      <Navbar fixed="true" />
      <div className="error-container">
        <img src={PageNotFoundImg} alt="error" />
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <ContinueShoppingBtn to="/">Continue Shopping</ContinueShoppingBtn>
      </div>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .error-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.4;
    color: #444;
    letter-spacing: 0.02em;
  }
  p {
    color: #444;
    font-size: 13px;
    line-height: 1.4;
    margin: 15px 0;
  }
`;

export default PageNotFound;
