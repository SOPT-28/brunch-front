import React from 'react';
import styled from 'styled-components';
import { HeaderSearch, SearchSuggest } from '../assets';
import { Header } from '../components';

const SearchPage = () => {
  return (
    <SearchWrap>
      <Header />
      <div className="search">
        <div className="search__input--box">
          <input type="text" className="" placeholder="검색어를 입력해 주세요." />
          <img src={HeaderSearch} alt="input" />
        </div>

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

    &__input--box {
      width: 100%;
      position: relative;
      max-width: 93.6;
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
`;
