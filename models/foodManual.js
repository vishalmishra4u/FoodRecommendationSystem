var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodManualSchema = new Schema({
    foodName : {
      type : String,
      required : true
    },
    ingredients :[{
        type: String
    }],
    steps : [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = foodManualSchema;
