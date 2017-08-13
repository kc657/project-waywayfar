let db = require ('../models')

// GET all Users /api/users/

function show (req, res) {
  db.User.find({}, function (err, allUsers) {
    if (err) {
      console.log('error finding users: ', err)
    }
    res.json(allUsers)
  })
}



 //POST to /api/users
function create (req, res) {
  db.User.create(req.body, function (err, user) {
    if (err) {
      console.log('error creating new user: ', err)
    }
    console.log('created post: ', user)
    res.json(user)
  })
}

// Get /api/users/:userId
function checkUser (req, res) {
  db.User.findById(req.params.userId, function (err, foundId){
    if (err) {
      console.log ('error on GET one ID: ',err)
    }
    res.json(foundCity)
  })
}
module.exports = {
  show: show,
  create: create,
  checkUser: checkUser
}
