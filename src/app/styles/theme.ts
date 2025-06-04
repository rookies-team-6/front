// color, font 등 공통적으로 사용하는 속성들을 정의하고 해당 파일에 import하게 되면
// rgb값을 직접 이용하는 대신 속성 key로 사용할 수 있습니다.

// color (진함 500 -> 100 연함)
const red = {
  r500: '#FF362D',
  r400: '#FF5A53',
  r300: '#FF7A74',
  r200: '#FF9A95',
  r100: '#FFBCB9'
};

const orange = {
  o500: '#FFAF2E',
  o400: '#FFBC50',
  o300: '#FFC76C',
  o200: '#FFD38B',
  o100: '#FFDEA8'
};

const yellow = {
  y500: '#FFE878',
  y400: '#FFED95',
  y300: '#FFF3B9',
  y200: '#FFF8DD',
  y100: '#FFFCEE'
};

const theme = {
    red,
    orange,
    yellow,
};


// const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
//   font-family: "${family}";
//   font-weight: ${weight};
//   font-size: ${size}px;
//   line-height: ${lineHeight}px;
//   letter-spacing: 0%;
// `;

// export const fonts: FontsTypes = {
//   heading_bold_24px: createFontStyle('Pretendard', 700, 24, 34),
//   heading_bold_22px: createFontStyle('Pretendard', 700, 22, 34),
//   heading_bold_18px: createFontStyle('Pretendard', 700, 18, 34),
//   heading_medium_20px: createFontStyle('Pretendard', 500, 20, 34),
//   heading_medium_18px: createFontStyle('Pretendard', 500, 18, 34),
//   body_bold_16px: createFontStyle('Pretendard', 700, 16, 24),
//   body_bold_14px: createFontStyle('Pretendard', 700, 14, 24),
//   body_medium_16px: createFontStyle('Pretendard', 500, 16, 24),
//   caption_bold_14px: createFontStyle('Pretendard', 700, 14, 24),
//   caption_medium_14px: createFontStyle('Pretendard', 500, 14, 24),
//   detail_medium_12px: createFontStyle('Pretendard', 500, 12, 22),
//   button_medium_16px: createFontStyle('Pretendard', 500, 16, 24),
// };
export default theme;
