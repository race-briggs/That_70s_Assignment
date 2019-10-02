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
        var actor = process.argv.slice(3).join("%");
    axios.get("http://api.tvmaze.com/search/people?q=" + actor)
    .then(function(response){
        console.log(`

        Name: ${response.data[0].person.name}
        Birthday: ${response.data[0].person.birthday}
        Gender: ${response.data[0].person.gender}
        Country: ${response.data[0].person.country.name}

        `);
    });

      break;

    default:
      console.log('Search for a TV show or an Actor in the following format:')
      console.log('node app.js tv The Expanse');
      console.log('node app.js actor Jude Law');
      break;
  }
}

searchApi(process.argv[2]);


