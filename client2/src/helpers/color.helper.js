import * as api from '../api/app.api'
var colors = [];

const getColors = async() =>{
  colors = await api.fetchTools('colors');
  
}

const getColorsData = async() =>{
  await getColors();
  if(colors === undefined){
    return { colors: [
      {colorHex: 'rgb(12, 140, 230)'},
      {colorHex: 'rgb(120, 14, 23)'},
      {colorHex: 'rgb(120, 14, 230)'},
      {colorHex: 'rgb(120, 140, 230)'},
      {colorHex: 'rgb(12, 140, 23)'},
      {colorHex: 'rgb(120, 14, 23)'}
     ] }
  }else{
    return { colors: colors.data}
  }
}

export default getColorsData;