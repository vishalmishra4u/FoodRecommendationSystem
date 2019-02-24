var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    city : {
        type: String,
        unique : false,
        required : true
    },
    rating:{
        type : Number,
        unique : false,
        required : true
    },
    users : [{
      type: Schema.Types.ObjectId,
      ref : 'User'
    }],
    foods : [{
      type: Schema.Types.ObjectId,
      ref : 'Food'
    }]
}, {
    timestamps: true
});

module.exports = hotelSchema;
