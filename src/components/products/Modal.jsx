import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import iconClose from "../../images/icon-close.png";

const Modal = ({ setIsOpenModal, images, number, isOpenModal }) => {
  const ref = useRef();
  const [currentNumber, setCurrentNumber] = useState(number);
  const showNextImg = () => {
    if (currentNumber > images.length - 2) {
      setCurrentNumber(0);
    } else {
      setCurrentNumber((currentNumber) => currentNumber + 1);
    }
  };
  const showPrevImg = () => {
    if (currentNumber < 1) {
      setCurrentNumber(images.length - 1);
    } else {
      setCurrentNumber((currentNumber) => currentNumber - 1);
    }
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setIsOpenModal]);

  return (
    <ModalContainer>
      <div className="modal">
        <div className="modal-content" ref={ref}>
          <button type="button" className="close-btn">
            <img
              className="close-btn-img"
              src={iconClose}
              onClick={() => setIsOpenModal(false)}
              alt="close-icon"
            />
          </button>
          <div className="arrows-container">
            <button
              className="arrows trans-04 arrow-left"
              onClick={showPrevImg}
            >
              <i className="fal fa-chevron-left"></i>
            </button>
            <button
              className="arrows trans-04 arrow-right"
              onClick={showNextImg}
            >
              <i className="fal fa-chevron-right"></i>
            </button>
          </div>
          <figure>
            <img src={images[currentNumber]} alt="img" />
            <figcaption>
              <div className="fp-counter">
                {currentNumber + 1} of {images.length}
              </div>
            </figcaption>
          </figure>
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
  outline: none !important;

  background-color: rgba(0, 0, 0, 0.9);
  .modal {
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 8px;
    display: flex;
    align-items: center;
    .modal-content {
      position: relative;
      vertical-align: middle;
      margin: auto;
      z-index: 1045;
      img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 601px;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 40px 0 40px;
        margin: 0 auto;
      }
      .close-btn {
        position: fixed;
        top: -20px;
        right: 15px;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .arrows {
    position: fixed;
    top: 50%;
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;
    background-color: transparent;
    font-size: 35px;
    color: #fff;
    &-left {
      left: 2rem;
    }
    &-right {
      right: 2rem;
    }
  }
  figcaption {
    position: absolute;
    bottom: 10px;
    right: 0;
    color: #ccc;
    font-size: 12px;
    line-height: 18px;
    white-space: nowrap;
  }
`;

export default Modal;
