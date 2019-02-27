var FoodManual = require('./../controllers/foodManualController');

module.exports = function(router) {
    router.post('/createFoodManual', FoodManual.createFoodManual);
    router.get('/getAllFoodManual', FoodManual.getAllFoodManual);
    router.get('/getFoodManual/:name', FoodManual.getFoodManual);
    router.put('/updateFoodManual/:id', FoodManual.updateFoodManual);
    router.delete('/deleteFoodManual/:id', FoodManual.deleteFoodManual);
}
