import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeItemFromWishList } from "../redux/actions/productActions";
import { DeleteBtn, ViewBtn } from "../components/Buttons/Button";
import Navbar from "../components/navbar/Navbar";
import { formatPrice } from "../utils/helpers";
import Breadcrumb from "../components/common/BreadCrumb";

const Wishlist = () => {
  const favoriteProducts = useSelector((state) => state.favoriteProducts);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeItemFromWishList(id));
  };
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <>
      <Wrapper>
        <Navbar fixed={true} />
        <Breadcrumb label="WishList" />
        {loading ? (
          <div className="center">
            <div className="spinner-4"></div>
          </div>
        ) : (
          <div className="wrapper-container container">
            <h1>Wishlist</h1>
            <ul className="wishlist">
              <li className="header">
                <div>Product</div>
                <div>Price</div>
              </li>
              {favoriteProducts
                .filter((item) => item.like)
                .map((item) => (
                  <li className="item">
                    <img src={item.img} alt="product" />
                    <div className="flex">
                      <p className="title">{item.title}</p>
                      <div className="right-container">
                        <div className="price">
                          <p>{formatPrice(item.price)}</p>
                        </div>
                        <div className="right">
                          <ViewBtn>View Product</ViewBtn>
                        </div>
                      </div>
                    </div>
                    <div className="delete-btn-container">
                      <DeleteBtn onClick={() => handleClick(item.id)}>
                        <i className="fas fa-trash-alt" />
                      </DeleteBtn>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 150px 0;
  position: relative;
  height: 100vh;

  h1 {
    letter-spacing: normal;
    font-weight: 700;
    position: relative;
    text-align: center;
    font-size: 30px;
    color: #333;
    margin-bottom: 50px;
  }
  p.title {
    width: 45%;
    white-space: nowrap;
  }
  .delete-btn-container {
    margin-right: 1rem;
  }
  .wishlist {
    width: 100%;
    li.item {
      display: flex;
      align-items: center;
    }

    img {
      width: 100px;
      object-fit: contain;
      height: 150px;
    }

    .flex {
      display: flex;
      align-items: center;
      flex: 0 0 80%;
      @media (max-width: 776px) {
        flex-direction: column;
        flex: 0 0 70%;
        align-items: flex-start;
        margin-left: 2rem;
      }
      div {
        flex: 0 0 33.333%;
        display: flex;
        column-gap: 10px;
      }
    }
    li {
      display: flex;
      border-top: 1px solid #e5e5e5;
      padding: 15px 0;
      align-items: center;
      @media (max-width: 776px) {
        margin-bottom: 30px;
        align-items: flex-start;
      }
    }
    .header {
      display: flex;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #000;
      font-weight: 700;
      padding: 10px 30px;
      background-color: #f9f9f9;
      border-bottom: 1px solid #e5e5e5;
      margin: 15px 0;
      font-size: 13px;
      @media (max-width: 776px) {
        display: none;
      }
      div {
        flex: 0 0 50%;
      }
    }

    p {
      color: #222;
      font-size: 13px;
    }
    .price {
      p {
        align-self: center;
        margin: 15px 0;
      }
    }
    .left-container {
      flex: 0 0 50%;

      @media (max-width: 776px) {
        flex: 0 0 20%;
      }
    }
    .right-container {
      flex: 0 0 50%;
      margin-left: 10px;
      @media (max-width: 776px) {
        flex-direction: column;
        flex: 0 0 100%;
        margin-left: 0;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
`;
export default Wishlist;
