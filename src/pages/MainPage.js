import React from 'react';
import styled from 'styled-components';
import { Banner } from '../assets';
import { Header, ScrollSlider, Writers, Keywords, Popup, Title, MainSlider } from '../components';

const MainPage = () => {
  return (
    <MainWrap>
      <MainContainer>
        <Popup />
        <Header />
        <Title />
        <MainSlider />
        <Keywords />
        <Writers />
        <FourthContainer>
          <img className="banner" src={Banner} alt="banner" />
          <ScrollSlider />
        </FourthContainer>
      </MainContainer>
    </MainWrap>
  );
};

export default MainPage;

const MainWrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
`;

const FourthContainer = styled.div`
  height: 131.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    margin-top: 15.5rem;
  }
`;
