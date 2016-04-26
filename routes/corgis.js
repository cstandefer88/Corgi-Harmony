var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Corgi = require('../models/corgi')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Corgi-Harmony' });
});


router.get('/corgi', function(req, res, next) {
  Corgi.find({like: null}, function(err, corgis) {
    if (err) {
      console.log("error");
      } else {
        var randomNumber = Math.floor(Math.random() * corgis.length);
        var corgi = corgis[randomNumber]
        res.json(corgi);
      }
    });
  });


router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  Corgi.findByIdAndUpdate(id, { $set: req.body }, function (err, corgi) {
    if (err) return res.status(500).send(err);
    res.json(corgi);
  });
});


router.put('/:id', function(req, res, next) {
  var like = req.params.like;
  Corgi.findOneAndUpdate(like, req.body, { upsert: true}, function(err, corgi) {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.json(corgi);
    }
  })

})


module.exports = router;
