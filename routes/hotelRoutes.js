var Hotel = require('./../hotel/hotelController');

module.exports = function(router) {
    router.post('/createHotel', Hotel.createHotel);
    router.get('/getHotels', Hotel.getHotels);
    router.get('/getHotel/:name', Hotel.getHotel);
    router.put('/updateHotel/:id', Hotel.updateHotel);
    router.delete('/deleteHotel/:id', Hotel.deleteHotel);
}
