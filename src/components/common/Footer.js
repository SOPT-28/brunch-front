import React from 'react';
import styled from 'styled-components';
import { Circle } from '../../assets';

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer">
        <div className="footer__col--first">
          <img src={Circle} alt="circle" />
          <div className="desc">
            You can make anything
            <br />
            by writing
          </div>
          <div className="author">C.S.Lewis</div>
        </div>
        <div className="footer__col--second">
          <div className="column">브런치 이용안내</div>
          <div className="column">작가신청</div>
          <div className="column">작가 지원 프로젝트</div>
          <div className="column">제휴제안</div>
          <div className="column">고객센터</div>
        </div>
        <div className="footer__col--third">
          <div className="column">이용약관</div>
          <div className="column">이전 이용약관</div>
          <div className="column">브런치 개인정보 처리방침</div>
          <div className="column">카카오 개인정보 처리방침</div>
          <div className="column">청소년 보호정책</div>
          <div className="column">운영정책</div>
        </div>
        <div className="footer__col--fourth">
          <div className="column">브런치팀 공지사항</div>
          <div className="column">브런치 카카오톡 채널</div>
          <div className="column">브런치 인스타그램</div>
          <div className="column">브런치 페이스북</div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 34.9rem;
  background-color: ${({ theme }) => theme.colors.black};

  .footer {
    display: flex;
    justify-content: space-around;
    margin-top: 4.7rem;
    width: 96.2rem;
    color: #828282;
    &__col {
      &--first {
        font-style: italic;
        img {
          margin-bottom: 2rem;
        }
        .desc {
          color: #f2f2f2;
          font-size: 1.6rem;
          font-family: 'Noto-serif';
        }
        .author {
          color: #828282;
          margin-top: 0.5rem;
          font-size: 1.3rem;
        }
      }
      &--second {
        font-size: 1.4rem;
      }
      &--third {
        font-size: 1.4rem;
      }
      &--fourth {
        font-size: 1.4rem;
      }
    }
    .column {
      margin-bottom: 1.4rem;
    }
  }
`;
