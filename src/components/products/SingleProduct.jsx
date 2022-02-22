import React, { useEffect } from "react";
import styled from "styled-components";
import { HeartIconBtn, QuickViewBtn } from "../Buttons/Button";
import iconHeart1 from "../../images/icon-heart-01.png";
import iconHeart2 from "../../images/icon-heart-02.png";
import {
  addWishlist,
  getSingleProduct,
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

const SingleProduct = ({ setShowDetail, id, img, title, price, like }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favoriteProducts);
  console.log(favoriteProducts);
  const { t } = useTranslation();
  const handleClick = () => {
    setShowDetail(true);
    dispatch(getSingleProduct(id));
  };
  useEffect(() => {
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify(favoriteProducts),
    );
  }, [favoriteProducts]);
  const addToFavorites = (id) => {
    dispatch(addWishlist(id, title, img, price, like));
  };

  return (
    <SingleProductContainer>
      <div className="product-img-box trans-04">
        <img src={img} alt="product" />
        <QuickViewBtn onClick={() => handleClick(id)}>
          {t("quick_view")}
        </QuickViewBtn>
      </div>
      <div className="product-footer">
        <div className="product-detail">
          <p className="product-title trans-04">{title}</p>
          <span className="product-price">{formatPrice(price)}</span>
        </div>
        <div className="heart-btn-container">
          <HeartIconBtn
            onClick={() => addToFavorites(id)}
            className={like ? "heart-icon active" : "heart-icon"}
          >
            <img
              className="icon1 trans-04"
              src={iconHeart1}
              alt="heart-icon"
            />
            <img
              className="icon2 trans-04"
              src={iconHeart2}
              alt="heart-icon"
            />
          </HeartIconBtn>
        </div>
      </div>
    </SingleProductContainer>
  );
};
const SingleProductContainer = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  .heart-btn-container {
    position: absolute;
    top: 1rem;
    z-index: 999;
    right: 1rem;
    background-color: #fff;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-img-box {
    position: relative;
    display: block;
    overflow: hidden;
    &:hover {
      button {
        bottom: 20px;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    img {
      vertical-align: middle;
      width: 100%;
      -webkit-transition: transform 0.9s ease;
      -o-transition: transform 0.9s ease;
      -moz-transition: transform 0.9s ease;
      transition: transform 0.9s ease;
    }
  }
  .product-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 1.4rem;

    p,
    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 1.466667;
    }
    p {
      color: #999;
      padding-bottom: 6px;
    }
    span {
      color: #666;
    }
  }
`;

export default SingleProduct;
