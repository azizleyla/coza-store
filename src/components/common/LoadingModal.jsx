import React from "react";
import styled from "styled-components";

const LoadingModal = ({ isLoading, setIsLoading }) => {
  return (
    <ModalContainer>
      <div className="modal-content">
        <div className="spinner-4"></div>
        <button onClick={() => setIsLoading(false)}>
          <i className="fas fa-times"></i>
        </button>
        <h3>Your transaction is progress</h3>
        <p>Please wait...</p>
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
  background-color: rgba(102, 102, 102, 0.4);
  display: flex;
  align-items: center;
  z-index: 99999;
  @media (max-width: 992px) {
    padding: 0 2rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    position: relative;
    h3 {
      font-size: 18px;
      color: rgb(242, 122, 26);
      font-weight: normal;
      text-transform: uppercase;
    }
    p {
      font-size: 15px;
    }
    button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 20px;
      color: #999;
    }
  }
`;

export default LoadingModal;
