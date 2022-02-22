import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import banner1 from "../../images/banner-01.jpg";
import banner2 from "../../images/banner-02.jpg";
import banner3 from "../../images/banner-03.jpg";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <CategoriesContainer className="categories container">
      <Link to="/collections/women">
        <div className="box women-box">
          <div className="box-img">
            <img src={banner1} alt="img" />
          </div>
          <div className="overlay">
            <div className="box-title">
              <span className="block1-name">{t("women")}</span>
              <span className="block2-name">{t("spring")} 2018</span>
            </div>
            <div className="btn-container">
              <button className="shop-now">{t("shop_now")}</button>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/collections/men">
        <div className="box men-box">
          <div className="box-img">
            <img src={banner2} alt="img" />
          </div>
          <div className="overlay">
            <div className="box-title">
              <span className="block1-name">{t("men")}</span>
              <span className="block2-name">{t("spring")} 2018</span>
            </div>
            <div className="btn-container">
              <button className="shop-now">{t("shop_now")}</button>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/collections/accessories">
        <div className="box accessories-box">
          <div className="box-img">
            <img src={banner3} alt="img" />
          </div>
          <div className="overlay">
            <div className="box-title">
              <span className="block1-name">{t("accessories")}</span>
              <span className="block2-name">{t("new_arrivial")}</span>
            </div>
            <div className="btn-container">
              <button className="shop-now">{t("shop_now")}</button>
            </div>
          </div>
        </div>
      </Link>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem 2rem;
  padding-top: 8rem;
  padding-bottom: 5rem;
  /* cursor: pointer; */
  .box {
    position: relative;
    border: 1px solid #e6e6e6;
    user-select: none;

    &-img {
      img {
        max-width: 100%;
      }
    }

    &-title {
      display: flex;
      flex-direction: column;
    }
    .btn-container {
      border-bottom: 2px solid #fff;
      overflow: hidden;
      transform: scaleX(0);
      transition: all 0.5s;
      padding-top: 4px;
    }
    .shop-now {
      font-size: 15px;
      line-height: 1.466667;
      text-transform: uppercase;
      font-weight: 500;
      color: #fff;
      border: none;
      transition: all 0.9s;
      background-color: transparent;
      transform: translateY(250%);
    }
  }
  .block1-name {
    font-size: 28px;
    line-height: 1.1;
    font-weight: bold;
    color: #333;
  }
  .block2-name {
    font-size: 14px;
    line-height: 1.7;
    color: #555;
    font-weight: normal;
  }

  .overlay {
    user-select: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 3.4rem 0 3.4rem 3.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .box-title {
      span {
        text-transform: capitalize;
      }
    }
    &:hover {
      background-color: rgba(103, 117, 214, 0.8);
    }
    &:hover {
      span {
        color: #fff;
      }
      .shop-now {
        transform: translateY(0%);
      }
      .btn-container {
        transform: scaleX(1);
      }
    }
  }
`;
export default Categories;
