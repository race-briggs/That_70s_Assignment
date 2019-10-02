var axios = require('axios');

function searchApi(query){
  switch(query){
    case 'tv':

      break;
    case 'actor':

      break;
    default:
      console.log('Search for a TV show or an Actor in the following format:')
      console.log('node app.js tv The Expanse');
      console.log('node app.js actor Jude Law');
      break;
  }
}

searchApi(process.argv[2]);