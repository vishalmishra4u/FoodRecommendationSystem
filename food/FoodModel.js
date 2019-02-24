var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    typeOfFood : {
        type: String,
        unique : false,
        required : true
    },
    cuisine:{
      type: String,
      unique : false,
      required : true
    },
    price:{
      type: Number,
      unique : false,
      required : true
    },
    hotel : {
      type: Schema.Types.ObjectId,
      ref : 'Hotel'
    }
}, {
    timestamps: true
});

module.exports = foodSchema;
