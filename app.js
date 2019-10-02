var axios = require('axios');

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
  }
}

searchApi(process.argv[2]);


