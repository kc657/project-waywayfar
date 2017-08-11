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

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/*
* JSON ENDPOINTS
*/
app.get('/api/cities', controllers.cities.index);  //Works in postman
app.get('/api/cities/:cityId', controllers.cities.show); //Works in postman
app.post('/api/posts/', controllers.posts.create);  //Works in postman
app.get('/api/posts', controllers.posts.show); //Works in postman
app.delete('/api/posts/:postId', controllers.posts.destroy); //Works in postman
app.get('/api/cities/:cityId/posts/', controllers.posts.indexByCity); // Works in postman
app.put('/api/posts/:postId', controllers.posts.update); //Works in postman


app.listen(process.env.PORT || 3001, function() {
 console.log('Express server running on localhost3001');
});
