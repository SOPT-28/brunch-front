import React from 'react';
import styled from 'styled-components';
import { Pop } from '../../assets';

const Popup = () => {
  return (
    <PopupWrap>
      <div className="popup">
        <img src={Pop} alt="banner" />
      </div>
    </PopupWrap>
  );
};

export default Popup;

const PopupWrap = styled.div`
  .popup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 6rem;
    background-color: #289bd1;
    font-size: 2.6rem;
    color: white;
    &__title {
      text-align: center;
    }
  }
`;
