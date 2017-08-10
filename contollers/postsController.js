let db = require('../models');

// POST to posts /api/posts/

function create(req,res){
  db.Post.create(req.body, function(err, post){
    if(err){
      console.log('error creating new post: ', err);
    }
    console.log('created post: ', post);
    res.json(post);
  });
}
