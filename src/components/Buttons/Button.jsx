import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopBtn = styled.button`
  border-radius: 23px;
  background-color: #717fe0;
  padding: 1rem 4rem;
  border: none;
  cursor: pointer;
  animation: scale 1s ease-in-out;
  @keyframes scale {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  &:hover {
    background-color: #222;
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.466667;
    text-transform: uppercase;
  }
`;

export const BacktoTopBtn = styled.button`
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 0px;
  right: 40px;
  border-radius: 50%;
  background-color: #717fe0;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  border: none;
  &:hover {
    opacity: 1;
    background-color: #717fe0;
  }

  span {
    font-size: 18px;
    color: white;
  }
`;
export const FormSubmitBtn = styled.button`
  border-radius: 23px;
  background-color: #222;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.466667;
  text-transform: uppercase;
  color: #fff;
  border: none;
  width: 100%;
  height: 4.6rem;
  cursor: pointer;
  &:hover {
    border-color: #717fe0;
    background-color: #717fe0;
    color: #fff;
  }
`;

export const QuickViewBtn = styled.button`
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  line-height: 1.466667;
  color: #333;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  position: absolute;
  transition: all 0.4s;
  bottom: -70px;
  font-family: "Poppins", sans-serif;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  text-transform: capitalize;
  white-space: nowrap;
  &:hover {
    border-color: #222;
    background-color: #222;
    color: #fff;
  }
`;

export const AddBtn = styled.button`
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
  min-width: 155px;
  margin-bottom: 10px;
  transition: opacity 0.3s, left 0s 0.3s;
  transform: translateY(-30px);
  -webkit-transform: translateY(-30px);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  background-color: #e55151;
  color: #fff;
  line-height: 18px;
  border-radius: 25px;
  margin-top: 5rem;
  display: inline-block;
  text-transform: uppercase;
  &.green {
    background-color: green;
  }
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    -webkit-border-radius: inherit;
    background: inherit;
    content: "";
    opacity: 0.3;
  }
  &:hover p.icon {
    left: 50%;
  }
  &:hover::before {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s, opacity 0.5s, visibility 0s 0.5s;
    -webkit-transition: transform 0.5s, opacity 0.5s, visibility 0s 0.5s;
  }
  p {
    display: block;
    position: relative;
    left: 0;
    &.icon-wrapper {
      display: block;
      overflow: hidden;
      border-radius: inherit;
      -webkit-border-radius: inherit;
      position: relative;
    }
    &.icon {
      -webkit-transition: all 0.15s;
      transition: all 0.15s;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 20px;
      position: absolute;
      left: -50px;
      top: 50%;
      margin-top: -15px;
      margin-left: -15px;

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
      }
    }
    &.text {
      padding: 17px 30px 15px 30px;
      -webkit-transition: all 0.3s 0.05s;
      transition: all 0.3s 0.05s;
      font-size: 1.3rem;
      color: #fff;
    }
  }

  &:hover p.text {
    left: 100%;
  }
`;

export const AmountBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 45px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  margin: 20px 0;
  color: #555;
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: normal;
  cursor: pointer;
  background-color: transparent;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 45px;
    &:hover {
      background-color: #717fe0;
      color: #fff;
    }
  }
  input {
    width: calc(100% - 90px);
    height: 100%;
    text-align: center;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    background-color: #f7f7f7;
    touch-action: manipulation;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;
    color: #666;
    font-family: "Poppins", sans-serif;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
  i {
    font-size: 16px;
  }
`;

export const ViewBtn = styled.button`
  border-radius: 30px;
  display: inline-block;
  width: auto;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #111;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  font-size: 13px;
  padding: 10px 24px;
  white-space: nowrap;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-family: "Poppins", sans-serif;
  &:hover {
    color: #fff;
    background-color: #262525;
    border-color: #030505;
    opacity: 1;
  }
`;

export const DeleteBtn = styled.button`
  padding: 8px 15px;
  color: #e34848;
  border-radius: 3px;

  cursor: pointer;

  i {
    font-size: 17px;
  }
`;

export const HeartIconBtn = styled.div`
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  div {
    display: flex;
    align-items: center;
  }
  &.active {
    .icon2 {
      opacity: 1;
    }
    .icon1 {
      opacity: 0;
    }
  }
  &:hover {
  }
  .icon2 {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .icon1:hover .icon2 {
    opacity: 1;
  }
`;

export const SidebarCartBtn = styled.button`
  appearance: none;
  background-color: ${(props) =>
    props.title === "checkout" ? "#f27a1a" : "#333"};
  border: 2px solid
    ${(props) => (props.title === "checkout" ? "#f27a1a" : "#333")};
  border-radius: 20px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  outline: none;
  min-width: 145px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-transform: uppercase;
  margin-right: 10px;
  margin: 5px 7px 5px 0;
  @media (max-width: 576px) {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const AddButton2 = styled.div`
  height: 50px;
  display: flex;
  margin: 10px 0 15px;
  button {
    width: 100%;
    height: 50px;
    border: 1px solid #f27a1a;
    border-radius: 6px;
    background: #f27a1a;
    font-size: 20px;
    letter-spacing: 0.03em;
    color: #fff;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    overflow: hidden;
    font-family: source_sans_prosemibold, serif;
    -webkit-font-smoothing: antialiased;
    &.loading {
      background: #f68428
        url(https://cdn.dsmcdn.com/web/production/add-to-basket-loader.gif)
        no-repeat center center;
    }
    &.success {
      background-color: #46af62;
      color: #fff;
      border-color: #fff;
    }
  }
  .add-to-basket-text {
    transition: all 0.3s ease-in-out;
    transform: translateY(10px);
    font-family: "Poppins", sans-serif;
    &.success {
      transform: translateY(-30px);
    }
  }
  .add-to-basket-button-text-success {
    visibility: hidden;
    transform: translateY(40px);
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease-in-out;
    &.success {
      visibility: visible;
      transform: translateY(-20px);
    }
  }
`;
export const ContinueShoppingBtn = styled(Link)`
  position: relative;
  font-weight: 400;
  padding: ${(props) =>
    props.color === "purple" ? "1rem 4rem" : "1rem 1.5rem"};
  font-size: 13px;
  border-radius: 45px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  z-index: 0;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 1px;
  background: ${(props) =>
    props.color === "purple" ? "#717fe0" : "#0a3e5f"};
  color: #fff;
  border: none;
  margin-top: 10px;
  &::before {
    background: ${(props) =>
      props.color === "purple" ? "#717fe0" : "#0a3e5f"};
    border: 1px solid #0076b5;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    border-radius: 45px;
    z-index: -1;
    opacity: 0;
  }

  &:hover::before {
    animation-name: top-offer-button;
    animation-duration: 1s;
    animation-iteration-count: 100;
  }
  i {
    margin-left: 5px;
  }
`;
