let db = require('./models')

let citiesList = [
  {
    name: 'San Francisco',
    description: 'San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time.',
    img_url: 'http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg'
  },

  {
    name: 'London',
    description: 'London is the capital of the United Kingdom, a country in western Europe. It is also the capital of England, which is part of the United Kingdom. London lies on the Thames River. It is the largest city in the country.',
    img_url: 'http://i.imgur.com/LziiBHl.jpg'
  },

  {
    name: 'Sydney',
    description: 'Sydney, capital of New South Wales and one of Australias largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.',
    img_url: 'http://www.australia.com/content/australia/en_us/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.985.HIGH.jpg'
  },

  {
    name: 'Shanghai',
    description: 'Shanghai, Hu for short, is a renowned international metropolis drawing more and more attention from all over the world. Situated on the estuary of Yangtze River, it serves as the most influential economic, financial, international trade, and cultural center in East China.',
    img_url: 'http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif'
  }
]

let postsList = [
  {
    title: 'I like this place',
    text: 'OMG! I really like this place!!! OMG! I really like this place!!! OMG! I really like this place!!! OMG! I really like this place!!! OMG! I really like this place!!! ',
    image: 'http://www.waycooldogs.com/wp-content/uploads/2017/04/bulldog-Boris_601714_960_720.jpg'
  },
  {
    title: 'HELLO',
    text: 'OMG! The weather is so nice here! OMG! The weather is so nice here! OMG! The weather is so nice here! OMG! The weather is so nice here! OMG! The weather is so nice here! ',
    image: 'http://www.waycooldogs.com/wp-content/uploads/2017/04/bulldog-Boris_601714_960_720.jpg'

  },
  {
    title: 'Pets',
    text: 'I saw lots of cute dogs here! I saw lots of cute dogs here! I saw lots of cute dogs here! I saw lots of cute dogs here! I saw lots of cute dogs here! I saw lots of cute dogs here! ',
    image: 'http://www.waycooldogs.com/wp-content/uploads/2017/04/bulldog-Boris_601714_960_720.jpg'

  },
  {
    title: 'Great food',
    text: 'They have some of the yummiest food here! They have some of the yummiest food here! They have some of the yummiest food here! They have some of the yummiest food here! They have some of the yummiest food here! ',
    image: 'http://www.waycooldogs.com/wp-content/uploads/2017/04/bulldog-Boris_601714_960_720.jpg'
  }
]

db.User.remove({}, function (err, removedUsers) {
  db.Post.remove({}, function (err, removedPosts) {
    db.City.remove({}, function (err, cities) {
      db.City.create(citiesList, function (err, cities) {
        if (err) {
          return console.log('ERROR seeding cities: ', err)
        }

        // for each city
        cities.forEach(function (city, index) {
          // for each of the dummy posts
          postsList.forEach(function (element) {
            // create a Post in the DB post with the _city for its corresponding city
            let newPost = {
              title: element.title,
              text: element.text,
              image: element.image,
              _city: city._id
            }
            console.log('EACH POST: ', newPost)

            db.Post.create(newPost, function (err, savedPost) {
              if (err) {
                console.log('error saving seed post: ', err)
              }
              console.log('saved seed post: ', savedPost)
            })
          })
        }) // end of cities forEach
      })
    })
  })
})