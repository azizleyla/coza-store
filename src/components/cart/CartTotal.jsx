import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/helpers";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const cartTotal = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  return (
    <Wrapper>
      <h4>Cart Totals</h4>
      <div className="flex-w bor12">
        <div className="size-34">
          <span>Total:</span>
        </div>
        <div className="size-65">
          <span>{formatPrice(cartTotal)}</span>
        </div>
      </div>
      <div className="shipping-container bor12">
        <div className="flex-w">
          <div className="size-34">
            <span>Shipping</span>
          </div>
          <div className="size-65">
            <p>
              There are no shipping methods available. Please double check
              your address, or contact us if you need any help.
            </p>
            <div className="pt-15">
              <span>Calculate Shipping</span>
              <div className="select-country">
                <select className="bor8">
                  <option>Choose a country</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="select-state bor8">
                <input
                  className="text-11"
                  type="text"
                  name="state"
                  placeholder="State /  country"
                />
              </div>
              <div className="post-code bor8">
                <input
                  className="text-11"
                  type="text"
                  name="postcode"
                  placeholder="Postcode / Zip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  margin-left: 4rem;
  padding: 3rem 4rem 4rem 4rem;

  @media (max-width: 992px) {
    margin-left: 0rem;
    margin-top: 3rem;
  }
  .bor12 {
    border-bottom: 1px dashed #d9d9d9;
  }
  .flex-w {
    align-items: flex-start;
    flex-wrap: wrap;
    display: flex;
    padding: 13px 0;
    .size-34 {
      width: 34.5%;
    }
    .size-65 {
      width: 65.5%;
      p {
        font-size: 13px;
        line-height: 1.6923;
        color: #888;
        padding-top: 2px;
      }
      span {
        font-size: 13px;
        line-height: 1.6923;
        text-transform: uppercase;
        color: #555;
      }
      select,
      input {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        outline: none;
      }
      select {
        margin-bottom: 12px;
        margin-top: 9px;
      }
      .bor8 {
        border: 1px solid #e6e6e6;
        border-radius: 2px;
        margin-bottom: 12px;
      }
      .pt-15 {
        padding-top: 15px;
      }
      .text-11 {
        font-size: 13px;
        line-height: 1.6923;
        color: #555;
      }
    }
  }
  h4 {
    font-size: 20px;
    line-height: 1.3;
    text-transform: uppercase;
    color: #333;
    padding-bottom: 3rem;
  }
  span {
    font-size: 15px;
    line-height: 1.466667;
    color: #333;
    font-weight: 500;
  }
`;

export default CartTotal;
