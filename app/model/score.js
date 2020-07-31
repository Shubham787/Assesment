const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var scoreschema = new Schema({
    email:  String,
    score:Number
});
var scoremodel = mongoose.model('scoremodels',scoreschema);

module.exports= scoremodel;