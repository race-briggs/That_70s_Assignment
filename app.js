var axios = require('axios');
var fs = require('fs');

function searchApi(query) {
    switch (query) {
        case 'tv':
            break;
        case 'actor':
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