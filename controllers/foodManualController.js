var Food = require('./../dao/foodManualDAO'),
  authenticationService = require('./../AuthenticationService');

module.exports = {
  createFoodManual : createFoodManual
};

function createFoodManual(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to add a new food.'
      });
    }

    authenticationService.validateToken(req.body.token);
    var foodManual = {
        foodName: req.body.foodName,
        ingredients: req.body.ingredients,
        steps : req.body.steps
    };

    FoodManual.create(foodManual, function(err, foodManual) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food Manual created successfully",
            FoodManual : foodManual
        })
    })
}
