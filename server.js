express = require('express'),
app = express(),
mongoose = require('mongoose'),
db = require('./models'),
controllers = require('./controllers'),
bodyParser = require('body-parser'),
vegetable = require('./models/vegetable'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
let controllers = require('./controllers')


//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: '1234', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());


// Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  // Remove caching
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// HOME
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})


/*
* JSON ENDPOINTS
*/
app.get('/api/cities', controllers.cities.index)  // Works in postman
app.get('/api/cities/:cityId', controllers.cities.show) // Works in postman
app.post('/api/posts/', controllers.posts.create)  // Works in postman
app.get('/api/posts', controllers.posts.show) // Works in postman
app.delete('/api/posts/:postId', controllers.posts.destroy) // Works in postman
app.get('/api/cities/:cityId/posts/', controllers.posts.indexByCity) // Works in postman
app.put('/api/posts/:postId', controllers.posts.update) // Works in postman

//app.get('/api/users/', controllers.users.show)
//app.post('/api/users/', controllers.users.create) //user sign up
//app.post('/api/users/:userId', controllers.users.checkUser) //user

//auth routes
app.get('/api/users', controllers.user.show);
app.delete('/api/users/:userId',controllers.user.destroy);
app.post('/signup', function signup(req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
  )});
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(JSON.stringify(req.user));
  res.send(req.user);
});
app.get('/logout', function (req, res) {
  console.log("BEFORE logout", req);
  req.logout();
  res.send(req);
  console.log("AFTER logout", req);
});




//added variable to port for deployment
let port = process.env.API_PORT || 3001;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
