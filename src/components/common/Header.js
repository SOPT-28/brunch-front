import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderStart, HeaderSearch, HeaderHamburger, Logo } from '../../assets';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/search');
  };
  return (
    <HeaderWrap>
      <nav className="header">
        <div className="header__right">
          <img src={HeaderHamburger} alt="header" />
          <img src={Logo} alt="header" />
        </div>
        <div className="header__left">
          <img src={HeaderStart} alt="header" />
          <img src={HeaderSearch} alt="header" onClick={handleClick} />
        </div>
      </nav>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.5rem;

    img {
      cursor: pointer;
    }

    &__right {
      display: flex;
      align-items: center;
      margin-left: 3rem;

      & > img:nth-child(1) {
        margin-right: 1.2rem;
      }
    }

    &__left {
      display: flex;
      align-items: center;
      margin-right: 3rem;

      & > img:nth-child(1) {
        margin-right: 1.6rem;
      }
    }
  }
`;

export default Header;
