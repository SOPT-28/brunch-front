import { css } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  main_blue: '#289BD1',
  gray_3: '#828282',
  gray_4: '#BDBDBD',
};
// how to use : ${({ theme }) => theme.colors.white};

const sizes = {
  desktop: 1440,
  tablet: 769,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
// how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;

const theme = {
  colors,
  media,
};

export default theme;
