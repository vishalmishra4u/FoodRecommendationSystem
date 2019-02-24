var Hotel = require('./hotelDAO');

module.exports = {
  createHotel : createHotel,
  getHotels : getHotels,
  getHotel : getHotel,
  updateHotel : updateHotel,
  deleteHotel : deleteHotel,
  getHotelStaff : getHotelStaff
};

function createHotel(req, res, next) {
    var hotel = {
        name: req.body.name,
        city: req.body.city,
        rating : req.body.rating
    };

    Hotel.create(hotel, function(err, hotel) {
        if(err) {
            res.json({
                error : err
            });
        }
        res.json({
            message : "Hotel created successfully"
        });
    })
}

function getHotels(req, res, next) {
    Hotel.get({}, function(err, hotels) {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            hotels: hotels
        });
    })
}

function getHotel(req, res, next) {
    Hotel.get({name: req.params.name}, function(err, hotel) {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            hotel: hotel
        })
    })
}

function updateHotel(req, res, next) {
    var hotel = {
        name: req.body.name,
        city: req.body.city,
        rating : req.body.rating
    };
    Hotel.update({_id: req.params.id}, hotel, function(err, hotel) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hotel updated successfully"
        })
    })
}

function deleteHotel(req, res, next) {
    Hotel.delete({_id: req.params.id}, function(err, hotel) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hotel deleted successfully"
        })
    })
}

function getHotelStaff(req, res, next){
    
}
