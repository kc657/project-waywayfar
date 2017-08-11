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
app.get('/api/cities', controllers.cities.index);  //Works in postman
app.get('/api/cities/:cityId', controllers.cities.show); //Works in postman
app.post('/api/posts/', controllers.posts.create);  //Works in postman
app.get('/api/posts', controllers.posts.show); //Works in postman
app.delete('/api/posts/:postId', controllers.posts.destroy); //Works in postman
app.get('/api/cities/:cityId/posts/', controllers.posts.indexByCity); // Works in postman
app.put('/api/posts/:postId', controllers.posts.update); //Works in postman


app.listen(process.env.PORT || 3000, function() {
 console.log('Express server running on localhost3000');
 });
