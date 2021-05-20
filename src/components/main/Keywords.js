import React from 'react';
import styled from 'styled-components';
import { NewIcon } from '../../assets';

const keywords = [
  '지구한바퀴 세계여행',
  '그림·웹툰',
  '시사·이슈',
  'IT 트렌드',
  '사진·촬영',
  '취향 저격 영화리뷰',
  '오늘은 이런 책',
  '지구한바퀴 세계여행',
  '글쓰기 코치',
  '직장인 현실 조언',
  '스타트업 경험담',
  '육아 이야기',
  '요리·레시피',
  '건강·운동',
  '멘탈관리 심리탐구',
  '디자인 스토리',
  '문화·예술',
  '건축·설계',
  '인문학·철학',
  '쉽게 읽는 역사',
  '우리집 반려동물',
  '멋진 켈리그래피',
  '사랑·이별',
  '감성 에세이',
];
const newDisplay = [2, 6, 10, 23];
const Keywords = () => {
  return (
    <KeywordsWrapper>
      <div className="keywords">
        <h2 className="keywords__title">BRUNCH KEYWORD</h2>
        <h4 className="keywords__sub">키워드로 분류된 다양한 글 모음</h4>
        <div className="keywords__content">
          {keywords.map((keyword, index) => (
            <div key={index} className="keywords__content__item">
              <div className="keywords__content__item__title">{keyword}</div>
              <img
                className="keywords__content__item--newIcon"
                style={newDisplay.includes(index) ? {} : { display: 'none' }}
                src={NewIcon}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </KeywordsWrapper>
  );
};
const KeywordsWrapper = styled.div`
  .keywords {
    width: 100%;
    height: 67.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
      font-weight: 500;
      font-size: 1.8rem;
      text-shadow: 0rem 4rem 4rem rgba(0, 0, 0, 0.25);
      letter-spacing: 0.4em;
      margin-bottom: 0.8rem;
    }
    &__sub {
      font-weight: 400;
      font-size: 1.2rem;
      color: #bdbdbd;
      margin-bottom: 4.6rem;
      letter-spacing: -0.03em;
      line-height: 1.6rem;
    }
    &__content {
      display: flex;
      width: 96rem;
      flex-wrap: wrap;
      &__item {
        cursor: pointer;
        width: 12rem;
        height: 12rem;
        display: flex;
        border: 0.1rem solid #e0e0e0;
        justify-content: center;
        align-items: center;
        position: relative;
        &__title {
          word-break: keep-all;
          color: #828282;
          font-weight: normal;
          font-size: 1.4rem;
          text-align: center;
          line-height: 1.9rem;
          width: 60%;
        }
        &--newIcon {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }
`;
export default Keywords;
