import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import {
  deleteCartItem,
  hideSidebar,
} from "../redux/actions/productActions";
import { SidebarCartBtn } from "./Buttons/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SidebarCart = () => {
  const { t } = useTranslation();
  const isOpenSidebar = useSelector((state) => state.isOpenSidebar);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const dispatch = useDispatch();
  const totalItems = cart.reduce((a, c) => a + c.quantity, 0);
  const handleClick = () => {
    dispatch(hideSidebar());
  };
  const removeFromCart = (id) => {
    dispatch(deleteCartItem(id));
  };
  const totalAmount = () => {
    const totalAmount = cart.reduce((a, c) => a + c.price * c.quantity, 0);
    return totalAmount;
  };
  const closeSidebarCart = () => {
    dispatch(hideSidebar());
  };

  return (
    <>
      <SidebarCartContainer className={isOpenSidebar ? "active" : null}>
        <div className="cart-header">
          <span>
            {t("your_cart")} ({totalItems}) {t("items")}
          </span>
          <button onClick={handleClick}>
            <i className="fas fa-times" />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="empty-cart">{t("empty_cart")}</p>
        ) : (
          cart.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <div className="cart-body">
                <>
                  <div className="product-img">
                    <img src={cartItem.img} alt="cart" />
                  </div>
                  <div className="product-detail">
                    <span className="product-title trans-04">
                      {cartItem.title}
                    </span>
                    <p className="details">
                      <span className="size">
                        {t("size")}: {cartItem.selectedSize}
                      </span>
                      <span className="quantity">
                        {t("quantity")}: {cartItem.quantity}
                      </span>
                    </p>
                    <p className="price-info">
                      <span className="price">
                        {formatPrice(cartItem.price)}
                      </span>
                    </p>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(cartItem.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="cart-footer">
            <p className="total">
              {t("total")}: {formatPrice(totalAmount())}
            </p>
            <div className="cart-btns">
              <Link to="/cart" onClick={closeSidebarCart}>
                <SidebarCartBtn>{t("go_to_cart")}</SidebarCartBtn>
              </Link>
              <Link to="/cart" onClick={closeSidebarCart}>
                <SidebarCartBtn title="checkout">Checkout</SidebarCartBtn>
              </Link>
            </div>
          </div>
        )}
      </SidebarCartContainer>
    </>
  );
};

const SidebarCartContainer = styled.div`
  background-color: #fff;
  width: 350px;
  max-width: calc(100% - 30px);
  height: 100vh;
  position: fixed;
  right: -400px;
  top: 0;
  z-index: 10000000;
  transition: all 0.4s;
  box-shadow: 0 3px 6px 0px rgb(0 0 0 / 18%);
  -moz-box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0 3px 6px 0px rgb(0 0 0 / 18%);
  padding: 30px;
  overflow-y: auto;
  &.active {
    right: 0;
  }
  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    span {
      font-weight: 600;
      font-size: 14px;
      color: #333;
      text-transform: capitalize;
    }
    button {
      cursor: pointer;
      transition: all 0.4s;
      &:hover i {
        color: #717fe0;
      }
      i {
        font-size: 30px;
      }
    }
  }
  .cart-item {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .empty-cart {
    border-top: 1px solid #eee;
    color: #333;
    font-size: 13px;
    padding: 10px 0;
  }
  .cart-body {
    display: flex;
    gap: 2rem;
    .product-img {
      img {
        max-width: 52px;
        height: 82px;
        cursor: pointer;
        border: 1px solid #e2e2e2;
      }
    }
    .product-detail {
      display: flex;
      flex-direction: column;
    }
    .product-title {
      font-size: 14px;
      color: #555;
      line-height: 1.3;
      font-family: "Poppins", sans-serif;
      &:hover {
        color: #717fe0;
      }
    }
    .details {
      margin: 6px 0;
      display: flex;
      span {
        display: flex;
        color: #999;
        font-size: 12px;
        &.quantity {
          margin-left: 10px;
          @media (max-width: 576px) {
            margin-left: 0;
          }
        }
      }
    }
    .price-info {
      span {
        color: #f27a1a;
        font-size: 14px;
      }
    }
    .delete-btn {
      cursor: pointer;
      margin-left: auto;
      align-self: flex-start;
      border: 1px solid #e63946;
      border-radius: 50%;
      padding: 2px 5px;
      text-align: center;
      line-height: 2px;
      i {
        color: #e63946;
        font-size: 16px;
      }
    }
  }
  .cart-footer {
    margin-top: 20px;
    .cart-btns {
      display: flex;
      flex-direction: row;
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
    p {
      font-size: 18px;
      color: #222;
      line-height: 1.3;
      margin-bottom: 40px;
    }
  }
`;
export default SidebarCart;
