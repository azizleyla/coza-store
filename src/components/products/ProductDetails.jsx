import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import iconClose from "../../images/icon-close.png";
import {
  addToCart,
  addWishlist,
} from "../../redux/actions/productActions";
import { formatPrice } from "../../utils/helpers";
import { AddButton2, HeartIconBtn } from "../Buttons/Button";
import Modal from "./Modal";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import iconHeart1 from "../../images/icon-heart-01.png";
import iconHeart2 from "../../images/icon-heart-02.png";

const ProductDetails = ({ setShowDetail }) => {
  const singleProduct = useSelector((state) => state.singleProduct);
  const {
    title,
    price,
    description,
    sizes,
    colors,
    img,
    stock,
    id,
    like,
    images,
  } = singleProduct;

  const { t } = useTranslation();

  const [, setMainImg] = useState(img);
  const cart = useSelector((state) => state.cart);
  const [amount] = useState(1);
  const [number, setNumber] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [size, setSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const ref = useRef();
  const handleClick = (id, amount, size) => {
    const cartItem = cart.find((item) => item.id === id + size);

    if (cartItem?.quantity + 1 > cartItem?.stock) {
      toast.error("Sistemde hata var");
    } else {
      dispatch(addToCart(singleProduct, amount, size));

      const time = setTimeout(() => {
        setIsClick(true);
      });
      return () => clearTimeout(time);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => setIsClick(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  const showNextImg = () => {
    if (number > images.length - 2) {
      setNumber(0);
    } else {
      setNumber((number) => number + 1);
    }
  };
  const showPrevImg = () => {
    if (number < 1) {
      setNumber(images.length - 1);
    } else {
      setNumber((number) => number - 1);
    }
  };
  const handleSize = (s) => {
    setActiveSize(s);
    setSize(s);
    // dispatch(chooseSize(s, id));
  };
  const handleColor = (color) => {
    setSelectedColor(color);
  };
  // useEffect((e) => {
  //   const checkIfClickedOutside = (e) => {
  //     if (
  //       (ref.current &&
  //         !ref.current.contains(e.target) &&
  //         !e.target.classList.contains("swal-modal") &&
  //         !e.target.classList.contains("swal-button") &&
  //         !e.target.classList.contains("swal-overlay") &&
  //         !e.target.classList.contains("close-btn-img")) ||
  //       e.target.classList.contains("close-btn")
  //     ) {
  //       setShowDetail(false);
  //     }
  //   };
  //   document.addEventListener("click", checkIfClickedOutside);
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("click", checkIfClickedOutside);
  //   };
  // }, []);

  return (
    <>
      <ProductDetailsContainer>
        <div className="container">
          <button
            className="close"
            type="button"
            onClick={() => setShowDetail(false)}
          >
            <img className="close-btn" src={iconClose} alt="close-icon" />
          </button>
          <div className="product-details-content" ref={ref}>
            <div className="row">
              <div className="images-container">
                <div className="small-images">
                  <ul>
                    {images.map((image, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setNumber(index);
                          setMainImg(image);
                        }}
                      >
                        <img src={image} alt="img" />
                        <div
                          className={
                            images[number] === image
                              ? "overlay active"
                              : "overlay"
                          }
                        ></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="main-img">
                  <img src={images[number]} alt="img" />

                  <button
                    onClick={() => setIsOpenModal(true)}
                    className="trans-04 view-btn"
                  >
                    <i className="far fa-expand-alt"></i>
                  </button>

                  {isOpenModal && (
                    <Modal
                      number={number}
                      setNumber={setNumber}
                      images={images}
                      setIsOpenModal={setIsOpenModal}
                    />
                  )}
                  <div className="arrows-container">
                    <button
                      className="arrow trans-04 arrow-left"
                      onClick={showPrevImg}
                    >
                      <i className="fal fa-chevron-left"></i>
                    </button>
                    <button
                      className="arrow trans-04 arrow-right"
                      onClick={showNextImg}
                    >
                      <i className="fal fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <div />
              </div>
              <div className="text-container">
                <h4>{title}</h4>
                <span>{formatPrice(price)}</span>
                <p className="alert">
                  {stock < 5 ? `Last ${stock} products` : ""}
                </p>
                <p className="description">{description}</p>
                <div className="options-container">
                  <div className="option">
                    <span>
                      {t("size")}: <strong>{activeSize}</strong>
                    </span>
                    {sizes.map((s) => (
                      <button
                        key={s}
                        className={
                          activeSize === s
                            ? "option-btn active"
                            : "option-btn"
                        }
                        type="button"
                        onClick={() => handleSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="option">
                    {colors.length > 0 && <span>{t("color")}</span>}

                    {colors.length > 0 &&
                      colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleColor(color)}
                          className={
                            color === selectedColor
                              ? "option-btn zoom active"
                              : "option-btn zoom"
                          }
                        >
                          <img
                            className="zoom-img"
                            src={color}
                            alt="color"
                          />
                        </button>
                      ))}
                  </div>
                  <div className="option">
                    <div className="btn-container">
                      <AddButton2>
                        <button
                          onClick={() => handleClick(id, amount, size)}
                          className={
                            isClick
                              ? "add-to-basket success"
                              : "add-to-basket"
                          }
                        >
                          <div
                            className={
                              isClick
                                ? "add-to-basket-text success"
                                : "add-to-basket-text"
                            }
                          >
                            {t("add_to_cart")}
                          </div>
                          <div
                            className={
                              isClick
                                ? "add-to-basket-button-text-success success"
                                : "add-to-basket-button-text-success"
                            }
                          >
                            {t("added_to_cart")}
                          </div>
                          <div className="add-to-bs-ldr"></div>
                        </button>
                      </AddButton2>
                    </div>
                  </div>
                </div>
                <div className="social-media trans-04">
                  <HeartIconBtn
                    onClick={() =>
                      dispatch(addWishlist(id, title, img, price, like))
                    }
                    className={like ? "heart-icon active" : "heart-icon"}
                  >
                    <div>
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
                    </div>
                  </HeartIconBtn>
                  <p>{t("add_to_wishlist")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductDetailsContainer>
    </>
  );
};

const ProductDetailsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  height: 100%;
  z-index: 10000;
  padding-top: 60px;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    position: relative;
  }
  button.close {
    position: absolute;
    right: 1rem;
    top: -3rem;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .arrows-container {
    .arrow {
      position: absolute;
      top: 50%;
      background-color: transparent;
      border: none;
      width: 40px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 25px;
      color: #fff;
      &:hover {
        background-color: rgba(0, 0, 0, 0.9);
      }
      &-left {
        left: 0;
      }
      &-right {
        right: 0;
      }
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 776px) {
      flex-direction: column;
    }
  }
  .product-details-content {
    position: relative;
    padding-top: 60px;

    padding-bottom: 30px;
    background-color: #fff;

    .images-container {
      display: flex;
      justify-content: space-between;
      flex: 0 0 50%;
      height: 100%;
      .main-img {
        width: 83.333333%;
        display: flex;
        position: relative;
        img {
          width: 100%;
        }
      }
      .small-images {
        width: 11.1111%;
        li {
          margin-bottom: 27px;
          position: relative;
          display: block;
          width: 100%;
          cursor: pointer;
          img {
            width: 100%;
            vertical-align: middle;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            transition: 0.4s;
            &:hover {
              border-color: #e55151;
            }
            &.active {
              border-color: #e55151;
            }
          }
        }
      }
    }
    .text-container {
      flex: 0 0 50%;
      padding-left: 3rem;
      @media (max-width: 776px) {
        padding-left: 0;
        margin-top: 2rem;
      }
      span {
        color: #333;
        font-size: 18px;
        line-height: 1.388888;
        font-weight: bold;
      }
      h4 {
        font-size: 24px;
        line-height: 1.5;
        font-weight: normal;
        color: #333;
        padding-bottom: 14px;
      }

      p.description {
        font-size: 14px;
        line-height: 1.7;
        color: #666;
        padding-top: 23px;
      }
      p.alert {
        color: #d21313;
        font-size: 12px;
        font-weight: 500;
        margin: 10px 0;
      }
    }
    .options-container {
      padding-top: 3.3rem;
      .option {
        margin-bottom: 20px;
        .btn-container {
          width: calc(100% - 105px);
        }
        span {
          font-size: 15px;
          color: #666666;
          font-weight: normal;
          margin-bottom: 8px;
          text-transform: uppercase;
          width: 105px;
          display: block;
        }
      }
    }
  }
  .social-media {
    display: flex;
    align-items: center;
    padding-left: 200px;
    padding-top: 4rem;
    flex-wrap: wrap;

    p {
      font-weight: 400;
      font-size: 15px;
      color: #444;
      margin-left: 7px;
    }
  }
  .view-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    color: #1d1d1d;
    &:hover {
      border-color: #717fe0;
      background-color: #717fe0;
      color: #fff;
    }
  }
  .option-btn {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    display: inline-block;
    min-width: 35px;
    height: 35px;
    padding: 0 10px;
    background-color: #f5f5f5;
    border: 2px solid transparent;
    border-radius: 5px;
    margin-right: 10px;
    &.zoom {
      background-color: transparent;
      width: 35px;
      height: 52px;
      overflow: hidden;
      padding: 0;
      border-radius: 6px;
      border: solid 2px #e6e6e6;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      border: 2px solid #e55151;
    }
  }
`;

export default ProductDetails;
