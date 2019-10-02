var axios = require('axios');
var fs = require('fs');

function searchApi(query){
  switch(query){
    case 'tv':
            axios.get('http://api.tvmaze.com/search/shows?q=' + process.argv.slice(3).join("%"))
            .then(function(response){
                console.log("Title: " + response.data[0].show.name);
                console.log("Genres: " + response.data[0].show.genres);
                console.log("Rating: " + response.data[0].show.rating.average);
                console.log("Network: " + response.data[0].show.network.name);
                console.log("Summary: " + response.data[0].show.summary);
            })

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

var response;


fs.appendFile("log.txt", response, function (err) {


    if (err) {
        console.log(err);
    }

    else {
        console.log("Content Added!");
    }

});
