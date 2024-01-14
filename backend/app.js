const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const AdvertController = require('./Adverts/AdvertController');
// const UserController = require('./Users/UserController');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


// Enable CORS for all routes
app.use(cors());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.static('uploads'));

// app.use('/adverts', AdvertController);
// app.use('/users', UserController);

// routes.get('/', function(req, res){
//     Advert.find()
//     .populate('postedBy')
//     .sort({_id: -1})

//     .then(adverts => {
//         res.status(200).json(adverts);
//     }).catch(err =>{
//         res.status(500).json(err);
//     })
// })


// // Endpoint to handle POST requests
// app.post('/api/adverts', (req, res) => {
//     // Log the parameters received in the request body
//     console.log('Parameters:', req.body);
  
//     // Send a response
//     res.status(200).send('Parameters logged successfully!');
//   });

app.use('/api/adverts', AdvertController);

// routes.post('/', function(req, res){
    // const decodedToken = jwt_decode(req.body.token);
    // console.log(decodedToken);

    // var objectId = mongoose.Types.ObjectId(decodedToken.userid);


    // var imageUrl = req.file.path.slice(8, req.file.path.length);
    // var imageUrl = req.file.path;
    // Advert.create({
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     image: imageUrl,
    //     category: req.body.category,
    //     subCategory: req.body.subcategory,
    //     thirdCategory: req.body.thirdcategory,
    //     postedBy: objectId
    // }, function(err, postedAdvert){
    //     if(err){
    //         res.status(500).json(err);
    //     } else {
    //         res.status(201).json(postedAdvert);
    //     }
    // })
// })


module.exports = app;