var axios = require('axios');

function searchApi(query){
  switch(query){
    case 'tv':

      break;
    case 'actor':
        var actor = process.argv.slice(3).join("%");
    axios.get("http://api.tvmaze.com/search/people?q=" + actor)
    .then(function(response){
        console.log(`

        Name: ${response.data[0].person.name}
        Birthday: ${response.data[0].person.birthday}
        Gender: ${response.data[0].person.gender}
        
        `);
    });

      break;
    }
}
searchApi(process.argv[2]);
