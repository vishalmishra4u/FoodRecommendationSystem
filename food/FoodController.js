var Food = require('./foodDAO');

module.exports = {
  createFood : createFood,
  getAllFood : getAllFood,
  getFood : getFood,
  updateFood : updateFood,
  deleteFood : deleteFood
};

function createFood(req, res, next) {
    var food = {
        name: req.body.name,
        typeOfFood: req.body.typeOfFood,
        cuisine : req.body.cuisine,
        price : req.body.price
    };

    Food.create(food, function(err, food) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Food created successfully"
        })
    })
}

function getAllFood(req, res, next) {
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
    Food.get({name: req.params.name}, function(err, food) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            food: food
        })
    })
}

function updateFood(req, res, next) {
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
            message : "Food updated successfully"
        })
    })
}

function deleteFood(req, res, next) {
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
