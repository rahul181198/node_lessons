const express = require ('express');
const { findByIdAndRemove } = require('../models/ninja');
const router = express.Router();
const Ninja=require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    var ninja = new Ninja(req.body);
    ninja.save()
    .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err.message);
        //console.log(err);
      });
    /*res.send({type: 'POST',
     name:req.body.name,
     rank:req.body.rank
});*/
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        //res.send(err.message);
        next(err);
    });
    
    //res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({_id:req.params.id})
    .then(result => {
        res.send(result);
      })
      .catch(err => {
        //res.send(err.message);
        console.log(err);
      });
    res.send({type: 'DELETE'});
});

module.exports = router;