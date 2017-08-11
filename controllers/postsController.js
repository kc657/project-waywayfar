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

// DELETE a post /api/posts/:postId

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
  });
}

// UPDATE posts by id /api/posts/:postId

function update(req, res){
  console.log('updating with data: ', req.body);
  db.Post.findById(req.params.postId, function(err, foundPost){
    if(err){
      console.log('error updating post', err);
    }
    foundPost.title = req.body.title;
    foundPost.text = req.body.text;
    foundPost.save(function(err, savedPost){
      if(err){
        console.log('error saving updated post', err);
      }
      res.json(savedPost);
    });
  });
}

module.exports = {
  create: create,
  destroy: destroy,
  indexByCity: indexByCity,
  update: update
};
