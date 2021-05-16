import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer"></div>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  height: 34.9rem;
  background-color: ${({ theme }) => theme.colors.black};
  .footer {
    width: 96.2rem;
  }
`;
