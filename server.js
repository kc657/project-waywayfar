let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));
let controllers = require('./controllers');

//ROUTES


// HOME
app.get ('/', function homepage (req,res){
  res.sendFile(__dirname + '/views/index.html');
});

/*
* JSON ENDPOINTS
*/
app.get('/api/cities', controllers.cities.index);
app.get('/api/cities/:cityId', controllers.cities.show);
app.post('/api/posts/', controllers.posts.create);
app.delete('/api/posts/:postId', controllers.posts.destroy);
app.get('/api/posts/:cityId', controllers.posts.show);
app.put('/api/posts/:postId', controllers.posts.update);
