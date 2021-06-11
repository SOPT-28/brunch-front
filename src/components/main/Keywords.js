import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NewIcon } from '../../assets';
import client from '../../lib/api/client';

const Keywords = () => {
  const [keywords, setKeywords] = useState(null);
  const getKeywords = async () => {
    try {
      const { data } = await client.get('/api/keywords');
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  useEffect(async () => {
    const { data } = await getKeywords();
    setKeywords(data.keywords);
  }, []);

  if (!keywords) <div>Loading...</div>;

  return (
    <KeywordsWrapper>
      <div className="keywords">
        <h2 className="keywords__title">BRUNCH KEYWORD</h2>
        <h4 className="keywords__sub">키워드로 분류된 다양한 글 모음</h4>
        {keywords && (
          <div className="keywords__content">
            {keywords.map((keyword, index) => (
              <div key={index} className="keywords__content__item">
                <div className="keywords__content__item__title">{keyword.keyword}</div>
                <img
                  className="keywords__content__item--newIcon"
                  style={keyword.new ? {} : { display: 'none' }}
                  src={NewIcon}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
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
      font-family: 'Noto Serif KR', serif;
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
