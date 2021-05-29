import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <TitleWrap>
      <div className="title">
        <div className="title__col--first">
          글이 작품이 되는 공간, 브런치
          <div className="title__col--circle" />
        </div>
        <div className="title__col--second">브런치에 담긴 아름다운 작품을 감상해 보세요.</div>
        <div className="title__col--third">그리고 다시 꺼내 보세요.</div>
        <div className="title__col--fourth">서랍 속 간직하고 있는 글과 감성을.</div>
      </div>
    </TitleWrap>
  );
};

export default Title;

const TitleWrap = styled.div`
  .title {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    padding: 0 20rem;
    letter-spacing: -0.1rem;
    font-family: 'Nanum Myeongjo', serif;
    &__col {
      &--first {
        display: flex;
        flex-direction: row;
        font-size: 4rem;
        color: #000000;
        margin-bottom: 1.1rem;
      }
      &--circle {
        position: relative;
        bottom: 2rem;
        left: 1rem;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 100%;
        background-color: #000000;
      }
      &--second {
        font-size: 3.2rem;
        color: #bdbdbd;
        margin-bottom: 1.4rem;
      }
      &--third {
        font-size: 3.2rem;
        color: #bdbdbd;
        margin-bottom: 1.4rem;
      }
      &--fourth {
        font-size: 3.2rem;
        color: #e0e0e0;
        margin-bottom: 6.1rem;
      }
    }
    .column {
      margin-bottom: 1.4rem;
    }
  }
`;
