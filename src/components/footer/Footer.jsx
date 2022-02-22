import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContinueShoppingBtn } from "../Buttons/Button";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content container">
        <div className="footer-list">
          <h4>Categories</h4>
          <ul>
            <li>
              <Link className="trans-04" to="/women">
                Women
              </Link>
            </li>
            <li>
              <Link className="trans-04" to="/men">
                Men
              </Link>
            </li>
            <li>
              <Link className="trans-04" to="/accessories">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h4>Help</h4>
          <ul>
            <li>
              <Link className="trans-04" to="/order">
                Track order
              </Link>
            </li>
            <li>
              <Link className="trans-04" to="/returns">
                Returns
              </Link>
            </li>
            <li>
              <Link className="trans-04" to="/shopping">
                Shipping
              </Link>
            </li>
            <li>
              <Link className="trans-04" to="/faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson
            St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.ca/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Newsletter</h4>
          <form>
            <div className="wrap-input">
              <input type="email" placeholder="email@example.com" />
              <div className="focus-input trans-04"></div>
            </div>
            <ContinueShoppingBtn color="purple" to="/">
              Subscribe
            </ContinueShoppingBtn>
          </form>
        </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  background-color: #222;
  padding-top: 7.5rem;
  padding-bottom: 3.2rem;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.5rem;
    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      grid-row-gap: 4rem;
    }
    h4 {
      font-size: 15px;
      line-height: 1.6;
      text-transform: uppercase;
      color: #fff;
      padding-bottom: 3rem;
    }
    .footer-list {
      li {
        padding-bottom: 10px;
        a {
          font-size: 1.3rem;
          font-weight: normal;
          line-height: 1.923;
          color: #b2b2b2;
          cursor: pointer;
          &:hover {
            color: #717fe0;
          }
        }
      }
    }
    .footer-contact {
      display: flex;
      flex-direction: column;
      button {
        background-color: #717fe0;
        border: none;
        border-radius: 2.3rem;
        line-height: 1.466667;
        margin-top: 2rem;
        padding: 1rem 4rem;
        color: #fff;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 1.5rem;
        outline: none;
        &:hover {
          background-color: #fff;
          color: #717fe0;
        }
      }
      input {
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.3rem;
        color: #b2b2b2;
        display: block;
        line-height: 1.923;
        ::placeholder {
          font-size: 1.5rem;
          color: #b2b2b2;
        }
      }

      .focus-input {
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #6774d5;
        left: 0;
        bottom: -2px;
      }
      .wrap-input {
        position: relative;
        border-bottom: 2px solid rgba(204, 204, 204, 0.1);
        padding-bottom: 4px;
      }
      p {
        max-width: 270px;
        font-size: 13px;
        line-height: 1.923;
        color: #b2b2b2;
      }
    }
    .footer-icons {
      padding-top: 2.7rem;
      a {
        color: #b2b2b2;
        font-size: 1.8rem;
        margin-right: 1.6rem;
        &:hover {
          color: #717fe0;
        }
      }
    }
  }
`;

export default Footer;
