var mongoose = require('mongoose');
var hotelSchema = require('./hotelModel');

hotelSchema.statics = {
    create : function(data, cb) {
        var hotel = new this(data);
        hotel.save(cb);
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

var hotelModel = mongoose.model('Hotel', hotelSchema);
module.exports = hotelModel;
