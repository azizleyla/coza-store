import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  filterProducts,
  updateFilters,
} from "../../redux/actions/productActions";
import * as actionType from "../../redux/actions/actionTypes";
const FilterButtons = () => {
  const { t } = useTranslation();
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [activeLink, setActiveLink] = useState("all");
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleClick = (e) => {
    setActiveLink(e.target.textContent);
    dispatch(updateFilters(e));
  };

  return (
    <Wrapper className="container">
      <div className="buttons">
        {categories.map((category, index) => (
          <button
            className={category === activeLink ? "active" : "btn"}
            onClick={handleClick}
            name="categoryQuery"
            key={index}
          >
            {t(category)}
          </button>
        ))}
      </div>
      <div className="right-buttons">
        <div className="filter">
          <i className="far fa-filter"></i>
          {t("filter")}
        </div>
        <div
          className="search"
          onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}
        >
          <i className="fa fa-search"></i>
          {t("search")}
        </div>
      </div>
      <div
        className={isOpenSearchBar ? "panel-search show" : "panel-search"}
      >
        <div className="panel-search-inner">
          <button>
            <i className="fas fa-search"></i>
          </button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 5.2rem;
  gap: 2rem;
  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem 0;
    button {
      color: #888;
      font-size: 15px;
      line-height: 1.2;
      border: none;
      border-color: #797979;
      border-bottom: 1px solid transparent;
      background-color: transparent;

      font-family: "Poppins", sans-serif;
      cursor: pointer;
      text-transform: capitalize;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      min-width: 100px;
      &.active {
        color: #fff;
        background-color: orange;
      }
    }
  }
  .right-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      height: 40px;
      display: flex;
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      font-size: 15px;
      line-height: 1.2;
      cursor: pointer;
      transition: all 0.4s;
      font-family: "Poppins", sans-serif;
      &:hover {
        border-color: #717fe0;
        background-color: #717fe0;
        color: #fff;
      }
      i {
        margin-right: 8px;
      }
    }
    .filter {
      min-width: 94px;
      margin-right: 8px;
      text-transform: capitalize;
    }
    .search {
      min-width: 111px;

      text-transform: capitalize;
    }
  }
  .panel-search {
    width: 100%;
    /* padding-top: 15px;
    padding-bottom: 10px; */
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s ease-in-out;
    &.show {
      max-height: 100px;
    }
    .panel-search-inner {
      border: 1px solid #e6e6e6;
      border-radius: 2px;
      padding-left: 15px;
      font-size: 15px;
      display: flex;
      align-items: center;
      color: #666666;
      input {
        width: calc(100% - 38px);
        height: 60px;
        font-size: 16px;
        line-height: 1.625;
        color: #333;
        padding-left: 15px;
        font-family: "Poppins", sans-serif;
      }
    }
  }
`;

export default FilterButtons;
