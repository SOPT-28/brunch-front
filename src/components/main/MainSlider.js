import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  MainSliderOne,
  MainSliderTwo,
  MainSliderThree,
  MainSliderFour,
  MainSliderFifth,
  MainSliderSixth,
  MainSliderSeventh,
  NextArrow,
} from '../../assets';

const MainSlider = () => {
  const slideRef = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideHandler = () => {
    if (currentSlide >= 4) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };
  useEffect(() => {
    const slide = currentSlide * 470;
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slide}px)`;
  }, [currentSlide]);
  return (
    <MainSliderWrapper>
      <div className="notice">
        <span className="notice__title">Notice</span>
        <span className="notice__content">3월 업데이트 및 소셜 로그인 종료 사전 안내</span>
      </div>
      <div className="main-slider">
        <div className="main-slider__container" ref={slideRef}>
          <div className="main-slider__content" ref={slideRef}>
            <img src={MainSliderOne} alt="" />
          </div>
          <div className="main-slider__content double-img">
            <img src={MainSliderTwo} alt="" />
            <img src={MainSliderThree} alt="" />
          </div>
          <div className="main-slider__content">
            <img src={MainSliderFour} alt="" />
          </div>
          <div className="main-slider__content double-img">
            <img src={MainSliderFifth} alt="" />
            <img src={MainSliderSixth} alt="" />
          </div>
          <div className="main-slider__content">
            <img src={MainSliderSeventh} alt="" />
          </div>
        </div>
        <img className="next-icon" src={NextArrow} alt="" onClick={slideHandler} />
        <div className="btn">
          <div
            className="btn__circle"
            style={currentSlide === 0 ? { backgroundColor: '#289bd1' } : {}}
          ></div>
          <div
            className="btn__circle"
            style={currentSlide === 1 ? { backgroundColor: '#289bd1' } : {}}
          ></div>
          <div
            className="btn__circle"
            style={currentSlide === 2 ? { backgroundColor: '#289bd1' } : {}}
          ></div>
          <div
            className="btn__circle"
            style={currentSlide === 3 ? { backgroundColor: '#289bd1' } : {}}
          ></div>
          <div
            className="btn__circle"
            style={currentSlide === 4 ? { backgroundColor: '#289bd1' } : {}}
          ></div>
        </div>
      </div>
    </MainSliderWrapper>
  );
};

export default MainSlider;
const MainSliderWrapper = styled.div`
  .notice {
    margin: 2.3rem 0;
    font-size: 1.2rem;
    float: right;
    margin-right: 24rem;
    &__title {
      color: #289bd1;

      line-height: 1.6rem;
      margin-right: 0.6rem;
      font-style: italic;
    }
    &__content {
      color: #bdbdbd;
    }
  }
  .main-slider {
    width: 120rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 24rem;
    margin-bottom: 15.4rem;
    &__container {
      display: flex;
      width: 120rem;
      height: 52rem;

      margin-bottom: 2.8rem;
    }
    &__content {
      width: 47rem;
      height: 52rem;
    }
  }

  .btn {
    width: 25rem;
    display: flex;
    height: 2rem;
    justify-content: space-between;
  }
  .btn__circle {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: #bdbdbd;
  }
  .next-icon {
    cursor: pointer;
    position: absolute;
    top: 16rem;
    right: 3rem;
  }
`;
