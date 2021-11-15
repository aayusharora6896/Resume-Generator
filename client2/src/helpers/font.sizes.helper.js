// const fontSizes = [
//   { fontSize: 8},
//   { fontSize: 9},
//   { fontSize: 10},
//   { fontSize: 11},
//   { fontSize: 12},
//   { fontSize: 13},
//   { fontSize: 14},
//   { fontSize: 15},
//   { fontSize: 18},
//   { fontSize: 20},
//   { fontSize: 25},
//   { fontSize: 30},
//   { fontSize: 36},
//   { fontSize: 72},
// ];

// export default fontSizes;


import * as api from '../api/app.api'
var fontSizes = [];

const getFontSizes = async() =>{
  fontSizes = await api.fetchTools('fontsizes');
}

const getFontSizesData = async() =>{
  await getFontSizes();
  if(fontSizes === undefined){
    return { fontSizes: [
      {fontSize: 10},
      {fontSize: 12},
      {fontSize: 13},
      {fontSize: 14},
      {fontSize: 15}
    ] }
  }else{
    return { fontSizes: fontSizes.data}
  }
}

export default getFontSizesData;