import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import client from '../../lib/api/client';
import Writer from './Writer';

const Writers = () => {
  const [allWriters, setAllWriters] = useState(null);
  const [writers, setWriters] = useState(null);

  const petRef = useRef();
  const createRef = useRef();
  const journeyRef = useRef();

  const getWriters = async () => {
    const { data } = await client.get('/api/Writers');
    return data;
  };
  useEffect(async () => {
    const { data } = await getWriters();
    setAllWriters(data);
    setWriters(data.writer[0].pet);
  }, []);

  const filterTag = event => {
    switch (event.target.innerText) {
      case '반려동물':
        setWriters(allWriters.writer[0].pet);
        petRef.current.classList.add('selected');
        createRef.current.classList.remove('selected');
        journeyRef.current.classList.remove('selected');
        break;
      case '창작':
        setWriters(allWriters.writer[0].create);
        petRef.current.classList.remove('selected');
        createRef.current.classList.add('selected');
        journeyRef.current.classList.remove('selected');
        break;
      case '여행':
        setWriters(allWriters.writer[0].journey);
        petRef.current.classList.remove('selected');
        createRef.current.classList.remove('selected');
        journeyRef.current.classList.add('selected');
        break;
      default:
        break;
    }
  };

  return (
    <ThirdContainer>
      <section className="writers">
        <p className="writers__title">BRUNCH WRITERS</p>
        <p className="writers__sub">브런치 추천 작가</p>
        <div className="writers__category">
          <button className="writers__category--btn selected" ref={petRef} onClick={filterTag}>
            반려동물
          </button>
          <button className="writers__category--btn" ref={createRef} onClick={filterTag}>
            창작
          </button>
          <button className="writers__category--btn" ref={journeyRef} onClick={filterTag}>
            여행
          </button>
        </div>
        <div className="writers__cards">
          {writers && writers.map(writer => <Writer writerData={writer} />)}
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

    &__title {
      letter-spacing: 0.4rem;
      font-size: 1.8rem;
      margin-top: 9.3rem;
      font-family: 'Noto Serif KR', serif;
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
        background-color: ${({ theme }) => theme.colors.white};
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
      display: grid;
      grid-template-columns: repeat(3, 30.7rem);
      grid-template-rows: repeat(2, 38rem);
      gap: 0.75rem 1rem;
    }
  }
`;

export default Writers;
