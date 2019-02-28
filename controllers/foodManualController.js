var FoodManual = require('./../dao/foodManualDAO'),
  authenticationService = require('./../AuthenticationService');

module.exports = {
  createFoodManual : createFoodManual,
  updatefoodManual : updatefoodManual,
  getFoodManual : getFoodManual,
  getAllFoodManual : getAllFoodManual,
  deleteFoodManual : deleteFoodManual
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

function updatefoodManual(req, res, next) {
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

    FoodManual.update({_id: req.params.id}, foodManual, function(err, foodManual) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food Manual updated successfully",
            FoodManual : foodManual
        })
    })
}

function getAllFoodManual(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to get all foods.'
      });
    }

    authenticationService.validateToken(req.body.token);
    FoodManual.get({}, function(err, foodManuals) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            foodManuals: foodManuals
        })
    })
}

function getFoodManual(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to get food details.'
      });
    }

    authenticationService.validateToken(req.body.token);
    FoodManual.get({foodName: req.params.name}, function(err, foodManual) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            foodManual: foodManual
        });
    })
}

function deleteFoodManual(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to delete a food.'
      });
    }

    authenticationService.validateToken(req.body.token);
    FoodManual.delete({_id: req.params.id}, function(err, food) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food Manual deleted successfully"
        })
    })
}
