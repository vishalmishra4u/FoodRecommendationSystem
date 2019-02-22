var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    location : {
        type: String,
        unique : false,
        required : true
    },
    rating:{
        type : Number,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = hotelSchema;
