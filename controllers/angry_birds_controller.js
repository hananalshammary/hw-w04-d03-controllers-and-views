var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

router.get('/', function(request, response) {
    var mustacheVariables ={
        angryBirdsList: angryBirds.birds


      }
      response.render('./angry_index', mustacheVariables);
    
    })

router.get('/:id', function (request, response) {
        var birdId = request.params.id;
       var mustacheVariables = {
           angryBirdsList: angryBirds.birds[birdId]
       }
       response.render('./show', mustacheVariables);})
module.exports = router;
