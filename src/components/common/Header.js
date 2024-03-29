import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderStart, HeaderSearch, HeaderHamburger, HeaderExit, Logo } from '../../assets';

const Header = ({ history }) => {
  const goToSearchPage = () => {
    history.push('/search');
  };
  const goToMainPage = () => {
    history.push('/');
  };

  return (
    <HeaderWrap pathname={history.location.pathname}>
      <nav className="header">
        <div className="header__right">
          <img src={HeaderHamburger} alt="header" />
          <img src={Logo} alt="header" />
        </div>
        <div className="header__left">
          {history.location.pathname === '/' && (
            <>
              <img src={HeaderStart} alt="header" />
              <img src={HeaderSearch} alt="header" onClick={goToSearchPage} />
            </>
          )}
          {history.location.pathname === '/search' && (
            <img src={HeaderExit} alt="header" onClick={goToMainPage} />
          )}
        </div>
      </nav>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.5rem;

    img {
      cursor: pointer;
      z-index: 1;
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
        margin-right: ${props => (props.pathname === '/' ? '1.6rem' : '0')};
      }
    }
  }
`;

export default withRouter(Header);
