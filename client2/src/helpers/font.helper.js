// const fonts = [
//   { font: 'Roboto, sans-serif', name: 'Roboto' },
//   { font: 'Mukta, sans-serif', name: 'Mukta' },
//   { font: 'Encode Sans Expanded, sans-serif', name: 'Encode Sans Expanded' },
//   { font: 'Open Sans, sans-serif', name: 'Open Sans' },
//   { font: 'Oswald, sans-serif', name: 'Oswald' },
//   { font: "'Slabo 27px', serif", name: 'Slabo 27px' },
//   { font: 'Roboto Condensed, sans-serif', name: 'Roboto Condensed' },
//   { font: 'Lato, sans-serif', name: 'Lato' },
//   { font: 'Montserrat, sans-serif', name: 'Montserrat' },
//   { font: 'Source Sans Pro, sans-serif', name: 'Source Sans Pro' },
//   { font: 'Raleway, sans-serif', name: 'Raleway' },
//   { font: 'PT Sans, sans-serif', name: 'PT Sans' },
//   { font: 'Ubuntu, sans-serif', name: 'Ubuntu' },
//   { font: 'Open Sans Condensed, sans-serif', name: 'Open Sans Condensed' },
//   { font: 'Merriweather, serif', name: 'Merriweather' },
//   { font: 'Roboto Slab, serif', name: 'Roboto Slab' },
//   { font: 'Asap Condensed, sans-serif', name: 'Asap Condensed' },
//   { font: 'Noto Sans, sans-serif', name: 'Noto Sans' },
//   { font: 'Arimo, sans-serif', name: 'Arimo' },
//   { font: 'Poppins, sans-serif', name: 'Poppins' },
//   { font: 'Titillium Web, sans-serif', name: 'Titillium Web' },
//   { font: 'Muli, sans-serif', name: 'Muli' },
//   { font: 'PT Sans Narrow, sans-serif', name: 'PT Sans Narrow' },
//   { font: 'Oxygen, sans-serif', name: 'Oxygen' },
//   { font: 'Geo, sans-serif', name: 'Geo' },
//   { font: 'Inconsolata, monospace', name: 'Inconsolata' },
//   { font: 'Dosis, sans-serif', name: 'Dosis' },
//   { font: 'Cabin, sans-serif', name: 'Cabin' },
//   { font: 'Quicksand, sans-serif', name: 'Quicksand' },
//   { font: 'Abel, sans-serif', name: 'Abel' },
//   { font: 'Ubuntu Condensed, sans-serif', name: 'Ubuntu Condensed' },
//   { font: 'Varela Round, sans-serif', name: 'Varela Round' },
//   { font: 'Questrial, sans-serif', name: 'Questrial' },
//   { font: 'Maven Pro, sans-serif', name: 'Maven Pro' },
//   { font: 'Khula, sans-serif', name: 'Khula' },
//   { font: 'Rokkitt, serif', name: 'Rokkitt' },
//   { font: 'Pathway Gothic One, sans-serif', name: 'Pathway Gothic One' },
//   { font: 'Alegreya, serif', name: 'Alegreya' },
//   { font: 'News Cycle, sans-serif', name: 'News Cycle' },
//   { font: 'Cabin Condensed, sans-serif', name: 'Cabin Condensed' },
//   { font: 'Old Standard TT, serif', name: 'Old Standard TT' },
//   { font: 'Nunito Sans, sans-serif', name: 'Nunito Sans' },
//   { font: 'Quattrocento, serif', name: 'Quattrocento' },
//   { font: 'Didact Gothic, sans-serif', name: 'Didact Gothic' },
//   { font: 'Faustina, serif', name: 'Faustina' },
//   { font: 'Jura, sans-serif', name: 'Jura' },
//   { font: 'Khand, sans-serif', name: 'Khand' },
//   { font: 'Assistant, sans-serif', name: 'Assistant' },
//   { font: 'Antic, sans-serif', name: 'Antic' },
//   { font: 'Cutive Mono, monospace', name: 'Cutive Mono' },
//   { font: 'Source Code Pro, monospace', name: 'Source Code Pro' },
// ];

// export default fonts;


import * as api from '../api/app.api'
var fonts = [];

const getFonts = async() =>{
  fonts = await api.fetchTools('fonts');
  
}

const getFontsData = async() =>{
  await getFonts();
  if(fonts === undefined){
    return { fonts: [
        { font: 'Roboto, sans-serif', name: 'Roboto' },
        { font: 'Mukta, sans-serif', name: 'Mukta' },
        { font: 'Encode Sans Expanded, sans-serif', name: 'Encode Sans Expanded' },
        { font: 'Open Sans, sans-serif', name: 'Open Sans' },
        { font: 'Oswald, sans-serif', name: 'Oswald' },
        { font: "'Slabo 27px', serif", name: 'Slabo 27px' },
        { font: 'Roboto Condensed, sans-serif', name: 'Roboto Condensed' },
        { font: 'Lato, sans-serif', name: 'Lato' },
        { font: 'Montserrat, sans-serif', name: 'Montserrat' },
     ] }
  }else{
    return { fonts: fonts.data}
  }
}

export default getFontsData;