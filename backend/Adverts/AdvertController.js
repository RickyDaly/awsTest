const express = require('express');
const routes = express.Router();
const Advert = require('./Advert');
// const multer = require('multer');
// const jwt_decode = require('jwt-decode');
const mongoose = require('mongoose');
const { Router } = require('express');
const { db, count } = require('./Advert');
const e = require('express');

routes.get('/', function(req, res){
    Advert.find()
    .populate('postedBy')
    .sort({_id: -1})

    .then(adverts => {
        res.status(200).json(adverts);
    }).catch(err =>{
        res.status(500).json(err);
    })
})

routes.post('/', upload.single('advertImage'), function(req, res){
    const decodedToken = jwt_decode(req.body.token);
    console.log(decodedToken);

    // var objectId = mongoose.Types.ObjectId(decodedToken.userid);


    // var imageUrl = req.file.path.slice(8, req.file.path.length);
    // var imageUrl = req.file.path;
    Advert.create({
        title: req.body.title,
    }, function(err, postedAdvert){
        if(err){
            res.status(500).json(err);
        } else {
            res.status(201).json(postedAdvert);
        }
    })
})