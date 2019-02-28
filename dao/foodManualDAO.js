var mongoose = require('mongoose');
var foodManualSchema = require('./../models/foodManual');

foodManualSchema.statics = {
    create : function(data, cb) {
        var foodManual = new this(data);
        foodManual.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var foodManualModel = mongoose.model('FoodManual', foodManualSchema);
module.exports = foodManualModel;
