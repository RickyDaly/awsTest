const express = require('express');
const routes = express.Router();
const Advert = require('./Advert');


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

routes.post('/', function(req, res){
    // const decodedToken = jwt_decode(req.body.token);
    // console.log(decodedToken);

    // var objectId = mongoose.Types.ObjectId(decodedToken.userid);


    // var imageUrl = req.file.path.slice(8, req.file.path.length);
    // var imageUrl = req.file.path;
    // Advert.create({
    //     title: req.body.title
    // }).then(advert =>{
    //     res.status(200).json(advert);
    // })
    // .catch(err =>{
    //     res.status(500).json(err);
    // })

    data = {title: "Rickys test"}

    Advert.insertOne(data)
    .then(advert => {
        console.log(advert)
    })
    

    // Advert.create({
    //     title: "Hello World"
    // })
    // .then(adverts => {
    //     res.status(200).json(adverts);
    //     console.log(adverts);
    // }).catch(err =>{
    //     res.status(500).json(err);
    //     console.log(err);
    // })
})



module.exports = routes;