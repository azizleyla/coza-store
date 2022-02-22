import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  filterByCategories,
  updateFilters,
} from "../../redux/actions/productActions";

const Checkbox = ({ filterElements }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const products = useSelector((state) => state.products);
  const [activeBtn, setActiveBtn] = useState("all");
  const handleClick = (e) => {
    dispatch(updateFilters(e));
    setActiveBtn(e.target.textContent);
  };
  return (
    <Wrapper>
      <ul>
        {filterElements.map((category) => (
          <li>
            <label>
              <button
                className={activeBtn === category ? "btn active" : "btn"}
                name="categoryQuery"
                onClick={handleClick}
              >
                {category}
              </button>
            </label>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  label {
    text-transform: capitalize;
  }
  button {
    font-size: 13px;
    line-height: 1.4;
    color: #000;
    min-width: 110px;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    text-align: left;
    padding: 3px 10px;
    &.active {
      background: orange;
      color: #fff;
      border-radius: 30px;
    }
  }
`;
export default Checkbox;
