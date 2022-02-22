import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  deleteAddtoFavorites,
  deleteCartItem,
} from "../../redux/actions/productActions";

const DeleteModal = ({
  selectedCartItem,
  setIsOpenDeleteModal,
  isOpenDeleteModal,
  setClassName,
  className,
}) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    toast.success("Basket successfully updated");
    dispatch(deleteCartItem(id));
    setIsOpenDeleteModal(false);
  };
  const handleDeleteAddtoFavorites = (id) => {
    dispatch(deleteAddtoFavorites(id));
    setIsOpenDeleteModal(false);
    toast.success("Basket successfully updated");
  };
  return (
    <ModalContainer className={className}>
      <div className="modal-content">
        <button
          className="close-btn"
          onClick={() => {
            setIsOpenDeleteModal(false);
            setClassName("modalClose");
          }}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="icon-box">
          <span>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
          </span>
          <p> Delete and add favorites</p>
        </div>
        <p>
          {selectedCartItem.title} product would you like to add to your
          favourite, after removing it from your cart?
        </p>
        <div className="btn-container">
          <div>
            <button
              onClick={() => {
                setIsOpenDeleteModal(false);
                setClassName("modalClose");
              }}
              className="btn-cancel border"
            >
              Cancel
            </button>
            <button
              className="btn-delete border"
              onClick={() => handleClick(selectedCartItem.id)}
            >
              Delete
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleDeleteAddtoFavorites(selectedCartItem.id)}
            className="delete-add"
          >
            Delete and Add Favorites
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(102, 102, 102, 0.4);
  transition: all 0.3s ease-out;
  display: flex;
  align-items: center;
  &.modalOpen {
    animation: openModal 0.4s ease-out forwards;
  }
  &.modalClose {
    animation: closeModal 0.4s ease-out forwards;
  }
  .modal-content {
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 540px;
    min-height: 320px;
    margin: auto;
    position: relative;

    padding: 0 20px;
  }
  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 0;
    color: #f27a1a;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff0e4;
      border-radius: 50%;
      font-size: 20px;
      margin-bottom: 10px;
      width: 74px;
      height: 74px;
      position: relative;
    }
    p {
      color: #f27a1a;
      font-size: 18px;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    i.fa-heart {
      font-size: 10px;
      padding: 6px 5px 5px 5px;
      border-radius: 50%;
      background: #f27a1a;
      color: #fff;
      position: absolute;
      right: 3px;
      top: 3px;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
    }
  }
  p {
    color: #666;
    margin: 20px 0;
    text-align: center;
    font-size: 14px;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
    /* margin-top: 30px; */
    button {
      padding: 9px 12px;
      font-size: 14px;
      line-height: 18px;
      transition: all 0.4s;
      border-radius: 6px;
      font-weight: 600;
    }
  }
  .btn-cancel {
    margin-right: 10px;
  }
  .border {
    color: #666 !important;
    width: 90px;
    border: solid 1px #e6e6e6;
    &:hover {
      border-color: #f27a1a;
    }
  }
  .delete-add {
    background: #f27a1a;
    border-color: #f27a1a;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
  .close-btn {
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #999;
    font-size: 2rem;
  }
`;

export default DeleteModal;
