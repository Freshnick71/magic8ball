const express = require('express');
const bodyParser = require('body-parser');
const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());
/*api.use((request, response, next) =>{
    console.log(); //"hello"
    next();
});
*/
api.listen(3000, () => {
    console.log('It is alive, ALLIVVE!!!')
});
/*
api.get('/', (request, response) => {
    console.log(request);
    response.send(); //"Hello world!"
});
*/

api.post('/add', (request, response) => {
    console.log(request.body);
    response.send('Working');
    //console.log('Post request recieved.')
});