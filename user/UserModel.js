var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    emailId : {
        type: String,
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

module.exports = userSchema;
