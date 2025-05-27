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

export default theme;
