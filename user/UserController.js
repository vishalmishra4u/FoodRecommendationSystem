var User = require('./userDAO'),
  authenticationService = require('./../AuthenticationService');

module.exports = {
  createUser : createUser,
  getUsers : getUsers,
  getUser : getUser,
  loginUser : loginUser,
  updateUser : updateUser,
  deleteUser : deleteUser
};

function createUser(req, res, next) {
    var user = {
        name: req.body.name,
        emailId: req.body.emailId
    };

    User.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }

        res.json({
            message : "User created successfully"
        });
    })
}

function getUsers(req, res, next) {
    User.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

function getUser(req, res, next) {
    User.get({name: req.params.name}, function(err, user) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            user: user
        });
    })
}

function loginUser(req, res, next) {
    User.get({name: req.query.name}, function(err, user) {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
          user : authenticationService.getAuthenticatedResponse(user).user[0],
          token : authenticationService.getAuthenticatedResponse(user).token
        });
    });
}

function updateUser(req, res, next) {
    var user = {
        name: req.body.name,
        emailId: req.body.emailId
    }
    User.update({_id: req.params.id}, user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

function deleteUser(req, res, next) {
    User.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
}
