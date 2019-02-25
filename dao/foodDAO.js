var mongoose = require('mongoose');
var foodSchema = require('./../models/food');

foodSchema.statics = {
    create : function(data, cb) {
        var food = new this(data);
        food.save(cb);
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

var foodModel = mongoose.model('Food', foodSchema);
module.exports = foodModel;
