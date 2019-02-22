var Food = require('./../food/foodController');

module.exports = function(router) {
    router.post('/createFood', Food.createFood);
    router.get('/getAllFood', Food.getAllFood);
    router.get('/getFood/:name', Food.getFood);
    router.put('/updateFood/:id', Food.updateFood);
    router.delete('/deleteFood/:id', Food.deleteFood);
}
