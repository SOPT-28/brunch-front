import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import client from '../../lib/api/client';
import { writersName } from '../../states.js';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const setWritersName = useSetRecoilState(writersName);

  const getArticle = async () => {
    const { data } = await client.get('/api/articles');
    return data;
  };

  useEffect(async () => {
    const { data } = await getArticle();
    setArticles(data.articles);

    const AllWriters = [];
    data.articles.map(article => AllWriters.push(article.writtenBy));
    setWritersName(AllWriters);
  }, []);

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <ArticlesWrapper>
      <div className="slider">
        <div className="slider__title">RECOMMENDED ARTICLES</div>
        <div className="slider__sub">브런치의 다양한 글을 만나보세요.</div>
        {articles && (
          <div className="slider__content">
            {articles.map((article, index) => (
              <div className="slider__content--wrapper" key={index}>
                <img className="slider__content--img" src={article.articleImg} alt="slider" />
                <div className="slider__content--title">{article.title}</div>
                <div className="slider__content--description">{article.discription}</div>
                <div className="slider__content--written">
                  <span className="slider__content--by">by</span>
                  {article.writtenBy}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ArticlesWrapper>
  );
};

export default Articles;

const ArticlesWrapper = styled.div`
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14.6rem;
    &__title {
      letter-spacing: 0.4rem;
      font-size: 1.8rem;
      font-family: 'Noto Serif KR', serif;
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
      &--wrapper {
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
      }
      &--title {
        margin-top: 2.6rem;
        color: ${({ theme }) => theme.colors.gray_3};
        font-size: 1.6rem;
        font-weight: normal;
        line-height: 150%;
        letter-spacing: -0.02em;
      }
      &--description {
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.gray_4};
        font-size: 1.2rem;
        line-height: 165%;
        letter-spacing: -0.02em;
      }
      &--written {
        margin-top: 2.4rem;
        color: ${({ theme }) => theme.colors.gray_4};
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
      &--by {
        margin-right: 0.4rem;
        font-family: sans-serif;
        font-style: italic;
      }
    }
  }
`;
