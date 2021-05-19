import React from 'react';
import styled from 'styled-components';
import {
  SliderOne,
  SliderTwo,
  SliderThree,
  SliderFour,
  SliderFifth,
  SliderSixth,
  SliderSeventh,
} from '../../assets';

const sliders = [
  SliderOne,
  SliderTwo,
  SliderThree,
  SliderFour,
  SliderFifth,
  SliderSixth,
  SliderSeventh,
];

const ScrollSlider = () => {
  return (
    <ScrollSliderWrapper>
      <div className="slider">
        <div className="slider__title">RECOMMENDED ARTICLES</div>
        <div className="slider__sub">브런치의 다양한 글을 만나보세요.</div>
        <div className="slider__content">
          {sliders.map(slider => (
            <img className="slider__content--img" src={slider} alt="slider" />
          ))}
        </div>
      </div>
    </ScrollSliderWrapper>
  );
};

export default ScrollSlider;

const ScrollSliderWrapper = styled.div`
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
