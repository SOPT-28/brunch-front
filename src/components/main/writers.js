import React from 'react';
import styled from 'styled-components';
import {
  WriterOne,
  WriterTwo,
  WriterThree,
  WriterFour,
  WriterFifth,
  WriterSixth,
} from '../../assets';

const Writers = () => {
  return (
    <ThirdContainer>
      <section className="writers">
        <p className="writers__title">BRUNCH WRITERS</p>
        <p className="writers__sub">브런치 추천 작가</p>
        <div className="writers__category">
          <button className="writers__category--btn selected">반려동물</button>
          <button className="writers__category--btn">창작</button>
          <button className="writers__category--btn">여행</button>
        </div>
        <div className="writers__cards">
          <img src={WriterOne} className="writers__card" alt="writers" />
          <img src={WriterTwo} className="writers__card" alt="writers" />
          <img src={WriterThree} className="writers__card" alt="writers" />
          <img src={WriterFour} className="writers__card" alt="writers" />
          <img src={WriterFifth} className="writers__card" alt="writers" />
          <img src={WriterSixth} className="writers__card" alt="writers" />
        </div>
      </section>
    </ThirdContainer>
  );
};

const ThirdContainer = styled.section`
  .writers {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 113.5rem;
    background-color: #fafafa;
    padding: 0 20rem;

    &__title {
      letter-spacing: 0.4rem;
      font-size: 1.8rem;
      margin-top: 9.3rem;
    }
    &__sub {
      margin-top: 0.8rem;
      color: #bdbdbd;
      font-size: 1.2rem;
      letter-spacing: -0.03rem;
    }

    &__category {
      margin: 5rem 0;
      &--btn {
        cursor: pointer;
        outline: 0;
        border: 0;
        border: 1px solid #bdbdbd;
        border-radius: 2.5rem;
        height: 3.2rem;
        width: 6.2rem;
        font-size: 1.5rem;
        color: #bdbdbd;
        margin: 0 0.3rem;
      }
      &--btn:nth-child(1) {
        width: 8.9rem;
      }

      .selected {
        color: ${({ theme }) => theme.colors.main_blue};
        border: 1px solid ${({ theme }) => theme.colors.main_blue};
      }
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    &__card {
      margin: 0.75rem 1rem;
    }
  }
`;

export default Writers;
