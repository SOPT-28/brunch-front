import React from 'react';
import styled from 'styled-components';

const Writer = ({ writerData }) => {
  const { profileImg, writerName, writerJob, description, tags } = writerData;
  return (
    <WriterWrapper>
      <div className="writer">
        <img className="writer__img" src={profileImg} alt="profile" />
        <span className="writer__name">{writerName}</span>
        <span className="writer__job">{writerJob}</span>
        <span className="writer__desc">{description}</span>
        <span className="writer__tags">
          {Object.keys(tags[0]).map(tag => (
            <span className="writer__tag">{tags[0][tag]}</span>
          ))}
        </span>
      </div>
    </WriterWrapper>
  );
};

export default Writer;

const WriterWrapper = styled.div`
  .writer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30.7rem;
    height: 38rem;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    ${({ theme }) => theme.media.tablet`
      width: 24rem;
    `}

    &__img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      margin-top: 4.6rem;
    }
    &__name {
      font-size: 2rem;
      margin-top: 1.8rem;
      color: #333333;
    }
    &__job {
      font-size: 1.2rem;
      margin-top: 0.6rem;
      color: ${({ theme }) => theme.colors.gray_3};
    }
    &__desc {
      font-size: 1.2rem;
      margin: 0 3rem;
      margin-top: 2rem;
      line-height: 1.5rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray_4};
    }
    &__tags {
      font-size: 1.2rem;
      margin-top: 6.1rem;
      color: ${({ theme }) => theme.colors.gray_4};
    }
    &__tag {
      border: 1px solid ${({ theme }) => theme.colors.gray_4};
      border-radius: 2.5rem;
      margin: 0 0.3rem;
      padding: 0.6rem 0.891rem;
    }
  }
`;
