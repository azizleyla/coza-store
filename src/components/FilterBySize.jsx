import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  filterByCategories,
  updateFilters,
} from "../redux/actions/productActions";
import Checkbox from "./common/Checkbox";
const sizes = [
  {
    id: 1,
    size: "M",
  },
  {
    id: 2,
    size: "L",
  },
  {
    id: 3,
    size: "S",
  },
  {
    id: 4,
    size: "XS",
  },
  {
    id: 5,
    size: "XL",
  },
  {
    id: 6,
    size: "38",
  },
  {
    id: 7,
    size: "39",
  },
  {
    id: 8,
    size: "40",
  },
  {
    id: 9,
    size: "XXL",
  },
  {
    id: 10,
    size: "36mm",
  },
  {
    id: 11,
    size: "36",
  },
];
const prices = [
  {
    minPrice: 0,
    maxPrice: 10,
  },
  {
    minPrice: 10,
    maxPrice: 20,
  },
  {
    minPrice: 20,
    maxPrice: 30,
  },
  {
    minPrice: 30,
    maxPrice: 40,
  },
  {
    minPrice: 40,
    maxPrice: 50,
  },
];

const categories1 = ["all", "women", "men", "shoes", "watches"];
const FilterBySize = () => {
  const products = useSelector((state) => state.products);
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));
  // const sizes = [...new Set(products.map((product) => product.sizes))];

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [checked1, setChecked] = useState([]);

  const handleClick = (e, id) => {
    dispatch(updateFilters(e));
    const find = sizes.filter((item) => item.id === id);
    find.checked = true;
    //   const curIndex = checked1.indexOf(id);
    //   const newChecked = [...checked1];
    //   if (curIndex === -1) {
    //     newChecked.push(id);
    //   } else {
    //     newChecked.splice(curIndex, 1);
    //   }
    //   setChecked(newChecked);
    // };
  };
  return (
    <Wrapper>
      <div className="filter-category">
        <span>Categories</span>
        <Checkbox filterElements={categories1} />
      </div>
      <div className="filter-size">
        <span>Size</span>
        <ul>
          {prices.map((price) => (
            <div className="price-radio">
              <input
                onChange={handleClick}
                name="priceQuery"
                type="radio"
                data-price={(price.minPrice, price.maxPrice)}
              />
              <span>
                ${price.minPrice} - ${price.maxPrice}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ul {
    label {
      display: flex;
      align-items: center;
    }
    li {
      padding: 3px 0;
      label {
        font-weight: 400;
        font-size: 12px;
      }

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
          background-color: #f27a1a;
        }
        &:checked ~ span::after {
          display: block;
        }
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 17px;
        width: 17px;
        background-color: #eee;
        &:after {
          content: "";
          position: absolute;
          display: none;
          left: 6px;
          top: 1px;
          width: 3px;
          height: 9px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }
  .filter-size {
    margin: 50px 0;
    label {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 5px;
      cursor: pointer;
      font-size: 13px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    ul {
      gap: 0.5rem;
      /* display: flex;
      flex-direction: column; */
    }
  }
  span {
    display: inline-block;
    margin-bottom: 20px;
  }
  .filter-price {
    position: relative;
    margin-bottom: 30px;
    label {
      right: 5rem;
      position: absolute;
      bottom: 15px;
      font-size: 12px;
    }
  }
  .price-input {
    width: 80%;
  }
  .price-radio {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    span {
      font-weight: normal !important;
      margin: 0 10px !important;
    }
  }
`;

export default FilterBySize;
