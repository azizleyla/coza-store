import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import closeImg from "../../images/close-btn.png";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/actions/productActions";
import { formatPrice } from "../../utils/helpers";
import DeleteModal from "../cart/DeleteModal";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Cart = ({ setIsLoading }) => {
  const [className, setClassName] = useState("");
  const cart = useSelector((state) => state.cart);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedCartItem, setSelectedCartItem] = useState("");

  const dispatch = useDispatch();

  const handleClick = (item) => {
    const selectedItem = cart.find((cartItem) => cartItem.id === item.id);
    setSelectedCartItem(selectedItem);
  };
  const handleChange = (id, type) => {
    if (type === "inc") {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }

    toast.success("Basket successfuly updated");
    setIsLoading(true);
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(time);
  };

  return (
    <>
      <Wrapper>
        <table className="table-shopping-cart">
          <tbody>
            <tr className="table_head">
              <th className="column-0"></th>
              <th className="column-1">Product</th>
              <th className="column-2"></th>
              <th className="column-3">Price</th>
              <th className="column-4">Quantity</th>
              <th className="column-5">Total</th>
            </tr>
            {cart &&
              cart.map((item) => (
                <tr key={item.id} className="table_row">
                  <td className="column-0">
                    <button
                      type="button"
                      onClick={() => {
                        handleClick(item);
                        setIsOpenDeleteModal(true);
                        setClassName("modalOpen");
                      }}
                    >
                      <img src={closeImg} alt="close-btn" />
                    </button>
                  </td>
                  <td className="column-1">
                    <div className="how-itemcart1">
                      <img src={item.img} alt="IMG" />
                    </div>
                  </td>
                  <td className="column-2">
                    {item.title}

                    <p>Size: {item.size}</p>
                  </td>
                  <td className="column-3">{formatPrice(item.price)}</td>
                  <td className="column-4">
                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                      <div
                        className={
                          item.quantity === 1 ? "disable-btn" : null
                        }
                        disable={true}
                        onClick={() => handleChange(item.id, "decs")}
                      >
                        <i className="fas fa-minus"></i>
                      </div>

                      <input type="number" value={item.quantity} />

                      <div
                        className={
                          item.quantity === item.stock
                            ? "disable-btn"
                            : null
                        }
                        onClick={() => handleChange(item.id, "inc")}
                      >
                        <i className="fas fa-plus" />
                      </div>
                    </div>
                  </td>
                  <td className="column-5">
                    {formatPrice(item.quantity * item.price)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Wrapper>
      {isOpenDeleteModal && (
        <DeleteModal
          setClassName={setClassName}
          className={className}
          isOpenDeleteModal={isOpenDeleteModal}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
          selectedCartItem={selectedCartItem}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  flex: 0 0 65%;
  max-width: 0 0 65%;
  @media (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 0 0 100%;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    width: 680px;
    @media (max-width: 992px) {
      width: 100%;
    }

    th {
      font-size: 13px;
      color: #555;
      text-transform: uppercase;
      line-height: 1.6;
      padding-top: 15px;
      padding-bottom: 15px;
      @media (max-width: 992px) {
        display: none;
      }
    }
    tr {
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
    }
    .table_row {
      height: 185px;
      td {
        padding-bottom: 30px;
        width: 133px;
        color: #555;
        font-size: 15px;

        .how-itemcart1 {
          width: 60px;
          position: relative;
          margin-right: 20px;
          cursor: pointer;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .column-0 {
    padding-left: 30px;
    @media (max-width: 992px) {
      padding-left: 0;
    }
    button {
      display: inline-block;
      vertical-align: middle;
      width: 40px;
      height: 40px;
      cursor: pointer;
      position: relative;
      &::before {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        border-radius: 50%;
        -webkit-border-radius: 50%;
        transform: scale(0);
        -webkit-transform: scale(0);
        pointer-events: none;
        background: #f27a1a;
      }
      &:hover::before {
        transform: scale(1.5);
        -webkit-transform: scale(1.5);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s, visibility 0s 0.5s;
        -webkit-transition: transform 0.5s, opacity 0.5s,
          visibility 0s 0.5s;
      }
      /* @media (max-width: 992px) {
        display: none;
      } */
    }
    i {
      color: #fff;
    }
  }
  .column-1 {
    @media (max-width: 992px) {
      width: 120px;
    }
  }
  .column-2 {
    font-weight: bold;
    @media (max-width: 992px) {
      width: 30px;
      font-weight: normal;
    }
    p {
      font-size: 11px;
      font-weight: normal;
      font-style: italic;
    }
  }
  .column-3 {
    padding-left: 50px;
  }
  .column-4 {
    text-align: right;
    padding-left: 30px;
    @media (max-width: 992px) {
    }
  }
  .column-5 {
    width: 172px;
    padding-right: 50px;
    text-align: right;
    @media (max-width: 992px) {
      padidng-right: 0px;
      display: none;
    }
  }
  .wrap-num-product {
    display: flex;
    flex-wrap: wrap;

    width: 140px;
    height: 45px;

    border-radius: 3px;
    margin-left: auto;

    div {
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      display: flex;
      width: 45px;
      height: 100%;
      cursor: pointer;
      color: #555;
      border: 1px solid #e6e6e6;
      background-color: #fafafa;
      @media (max-width: 992px) {
        width: 30px;
      }
      &.disable-btn {
        pointer-events: none;
        border: 1px solid #e6e6e6;
      }
      &.disable-btn i {
        color: #e6e6e6;
      }
      &:hover {
        background-color: #e6e6e6;
      }
      i {
        color: #f27a1a;
      }
    }

    input {
      font-size: 16px;
      line-height: 1.6;
      width: calc(100% - 90px);
      height: 100%;
      border-top: solid 1px #e6e6e6;
      border-bottom: solid 1px #e6e6e6;
      background-color: #ffffff;
      color: #666;
      text-align: center;
      -webkit-appearance: none !important;
      appearance: none;
      @media (max-width: 992px) {
        width: 30px;
      }
    }
  }
  .cart-message {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 500px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    border: 1px solid red;
    h4 {
    }
  }
  .continue-btn {
  }
`;
export default Cart;
