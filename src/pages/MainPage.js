import React from 'react';
import styled from 'styled-components';
import {
  Banner,
  SliderOne,
  SliderTwo,
  SliderThree,
  SliderFour,
  SliderFifth,
  SliderSixth,
  SliderSeventh,
} from '../assets';

const MainPage = () => {
  return (
    <MainWrap>
      <MainContainer>
        <FourthContainer>
          <img className="banner" src={Banner} alt="banner" />
          <div className="slider">
            <div className="slider__title">RECOMMENDED ARTICLES</div>
            <div className="slider__sub">브런치의 다양한 글을 만나보세요.</div>
            <div className="slider__content">
              <img className="slider__content--img" src={SliderOne} alt="slider" />
              <img className="slider__content--img" src={SliderTwo} alt="slider" />
              <img className="slider__content--img" src={SliderThree} alt="slider" />
              <img className="slider__content--img" src={SliderFour} alt="slider" />
              <img className="slider__content--img" src={SliderFifth} alt="slider" />
              <img className="slider__content--img" src={SliderSixth} alt="slider" />
              <img className="slider__content--img" src={SliderSeventh} alt="slider" />
            </div>
          </div>
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
  width: 96rem;
`;

const FourthContainer = styled.div`
  height: 131.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    margin-top: 15.5rem;
  }
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14.6rem;
    &__title {
      letter-spacing: 0.4rem;
      font-size: 1.8rem;
    }
    &__sub {
      margin-top: 0.8rem;
      color: #bdbdbd;
      font-size: 1.2rem;
      letter-spacing: -0.03rem;
    }
    &__content {
      width: 96rem;
      height: 68rem;
      margin-top: 4.4rem;
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-bottom: 10rem;
      &--img {
        margin-left: 2rem;
      }
    }
  }
`;
