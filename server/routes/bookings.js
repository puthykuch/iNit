var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://puthy kuch:noneedyou29@ds163681.mlab.com:63681/init', ['bookings']);

router.get('/bookings', function(req, res, next) {
  db.bookings.find(function(err, bookings) {
    if(err) {
      res.send(err);
    }
    res.json(bookings);
  });
});

router.post('/bookings', function(req, res, next) {
  var booking = req.body.data;

  if(!booking.userName) {
    res.status(400);
    res.json({
      error: 1,
      msg:  'Resquest no Username'
    });
  } else {
    db.bookings.save(booking, function(err, savedBooking){
      if(err) {
        res.send(err);
      }
      res.json(savedBooking);
    });
  }
});

module.exports = router;