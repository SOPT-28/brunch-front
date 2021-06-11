import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { HeaderSearch, SearchSuggest } from '../assets';
import { Header } from '../components';
import client from '../lib/api/client';
import { writersName } from '../states.js';

const SearchPage = () => {
  const [search, setSearch] = useState();
  const AllwritersName = useRecoilValue(writersName);
  const [autocompleted, setAutocompleted] = useState([]);
  const inputRef = useRef();

  const searchWord = async word => {
    try {
      const { data } = await client.post(`/api/search`, {
        searchWord: word,
      });
      return data.data;
    } catch (err) {
      console.error('[FAIL] 작가 검색 실패');
      throw err;
    }
  };

  const handleChange = event => {
    const input = event.target.value;
    if (!input) {
      setAutocompleted([]);
      return;
    }
    // const autocomplete = AllwritersName.filter(writer => writer.includes(input));
    const autocomplete = AllwritersName.filter(writer => writer.match(new RegExp(input, 'i')));
    // 대소문자를 구분하지 않는다 - match / cf. includes
    setAutocompleted(autocomplete);
  };

  const handleSearch = async event => {
    event.preventDefault();
    const data = await searchWord(inputRef.current.value);
    if (data !== null) {
      setSearch(data.searchArticle);
      setAutocompleted([]);
    } else {
      setSearch({ msg: '검색 결과가 없습니다.' });
    }
  };

  const handleClick = async event => {
    const data = await searchWord(event.target.innerText);
    setSearch(data.searchArticle);
    setAutocompleted([]);
    inputRef.current.value = event.target.innerText;
  };
  return (
    <SearchWrap>
      <Header />
      <div className="search">
        <div className="search__container">
          <form className="search__input--box" onSubmit={handleSearch}>
            <input
              ref={inputRef}
              type="text"
              className=""
              placeholder="검색어를 입력해 주세요."
              onChange={handleChange}
            />
            <img src={HeaderSearch} alt="input" />
          </form>
          {autocompleted &&
            autocompleted.map((writer, index) => (
              <div key={index} className="search__container--auto" onClick={handleClick}>
                {writer}
              </div>
            ))}
        </div>
        {!search && (
          <div className="animation_up">
            <p className="search__desc">
              <b>그림</b> 그리는 사람들
            </p>

            <div className="writers__category">
              <button className="writers__category--btn selected">반려동물</button>
              <button className="writers__category--btn selected">크리에이터</button>
              <button className="writers__category--btn selected">디자이너</button>
            </div>

            <div className="search__suggest">
              <img src={SearchSuggest} alt="suggest" />
              <img src={SearchSuggest} alt="suggest" />
              <img src={SearchSuggest} alt="suggest" />
              <img src={SearchSuggest} alt="suggest" />
              <img src={SearchSuggest} alt="suggest" />
            </div>
          </div>
        )}
        {search &&
          (search.msg ? (
            <div className="errorMsg">{search.msg}</div>
          ) : (
            <div className="article">
              <div className="article__metadata">
                <h2 className="article__metadata__title">{search.title}</h2>
                <p className="article__metadata__description">{search.discription}</p>
                <p className="article__metadata__writer">
                  <span className="article__metadata__by">By</span> {search.writtenBy}
                </p>
              </div>
              <img className="article__img" src={search.articleImg} alt="article" />
            </div>
          ))}
      </div>
    </SearchWrap>
  );
};

export default SearchPage;

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30rem 3rem;
    position: fixed;
    top: 0rem;
    left: 0rem;

    width: 100%;
    height: 100%;

    &__container {
      width: 93.6rem;

      &--auto {
        background-color: #959595;
        color: white;
        height: 3rem;
        max-width: 93.6rem;
        margin: 0.8rem 0;
        padding-left: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }

    &__input--box {
      width: 100%;
      position: relative;
      max-width: 93.6rem;
      input {
        font-size: 2.8rem;
        outline: 0;
        border: 0;
        border-bottom: 1px solid black;
        width: 100%;
      }
      img {
        top: 0.4rem;
        position: absolute;
        right: 0.5rem;
      }
    }
    .animation_up {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: animationup 0.5s;
    }
    @keyframes animationup {
      from {
        opacity: 0;
        transform: translate(0, 30px);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    .search__desc {
      font-size: 2.8rem;
      margin-top: 6.8rem;

      b {
        color: ${({ theme }) => theme.colors.main_blue};
      }
    }

    .writers__category {
      margin: 5rem 0;
      &--btn {
        background-color: white;
        cursor: pointer;
        outline: 0;
        border: 0;
        border: 1px solid #bdbdbd;
        border-radius: 2.5rem;
        height: 3.2rem;
        font-size: 1.5rem;
        color: #bdbdbd;
        margin: 0 0.3rem;
        padding: 0 1rem;
      }
      &--btn:nth-child(1) {
      }

      .selected {
        color: ${({ theme }) => theme.colors.main_blue};
        border: 1px solid ${({ theme }) => theme.colors.main_blue};
      }
    }
    &__suggest {
      display: flex;

      img {
        margin: 0 3.2rem;
        cursor: pointer;
      }
    }
  }
  .article {
    margin-top: 4rem;
    padding-left: 2rem;
    max-width: 93.6rem;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    cursor: pointer;

    &__metadata {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 2rem;
        margin-top: 2rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &__description {
        font-size: 1.4rem;
        line-height: 2.1rem;
        margin-top: 2rem;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &__writer {
        font-size: 1.2rem;
        margin: 2rem 0;
        color: #959595;
      }
      &__by {
        margin-right: 0.4rem;
        font-family: sans-serif;
        font-style: italic;
        color: #959595;
      }
    }

    &__img {
      width: 12rem;
      height: 12rem;
      margin-left: 2.5rem;
    }
  }
  .errorMsg {
    margin-top: 5rem;
    font-size: 3rem;
  }
`;
