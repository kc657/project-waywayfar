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

// DELTE a post /api/posts/:postId

function destroy(req, res){
  db.Post.findOneAndRemove({ _id: req.params.postId }, function(err, foundPost){
    if(err){
      console.log('error deleting post: ', err);
    }
    res.json(foundPost);
  });
}

// GET posts and filter by cityId /api/posts/:cityId

function indexByCity(req, res){
  db.Post.find({}, function(err, allPosts){
    if(err){
      console.log('error finding posts (by city): ', err);
    }
    allPosts.filter( post => post._city === req.params.cityId );
    res.json(allPosts);
  }
}
