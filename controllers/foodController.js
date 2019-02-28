var Food = require('./../dao/foodDAO'),
  authenticationService = require('./../AuthenticationService');

module.exports = {
  createFood : createFood,
  getAllFood : getAllFood,
  getFood : getFood,
  updateFood : updateFood,
  deleteFood : deleteFood
};

function createFood(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to add a new food.'
      });
    }

    authenticationService.validateToken(req.body.token);
    var food = {
        name: req.body.name,
        typeOfFood: req.body.typeOfFood,
        cuisine : req.body.cuisine,
        price : req.body.price,
        foodManual : req.body.foodManual
    };

    Food.create(food, function(err, food) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food created successfully",
            food : food
        })
    })
}

function getAllFood(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to get all foods.'
      });
    }

    authenticationService.validateToken(req.body.token);
    Food.get({}, function(err, foods) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            foods: foods
        })
    })
}

function getFood(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to get food details.'
      });
    }

    authenticationService.validateToken(req.body.token);
    Food.get({name: req.params.name}, function(err, food) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            food: food[0]
        })
    })
}

function updateFood(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to update a food.'
      });
    }

    authenticationService.validateToken(req.body.token);

    var food = {
        name: req.body.name,
        typeOfFood: req.body.typeOfFood,
        cuisine : req.body.cuisine,
        price : req.body.price
    };
    Food.update({_id: req.params.id}, food, function(err, food) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food updated successfully",
            food : food
        })
    })
}

function deleteFood(req, res, next) {
    if(!req.body.token){
      res.json({
        error : 'You need to be logged in to delete a food.'
      });
    }

    authenticationService.validateToken(req.body.token);
    Food.delete({_id: req.params.id}, function(err, food) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food deleted successfully"
        })
    })
}
