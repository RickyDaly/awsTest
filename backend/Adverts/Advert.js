const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

var AdvertSchema = mongoose.Schema({
    title: String,
});

mongoose.model('Advert', AdvertSchema);

module.exports = mongoose.model('Advert');

