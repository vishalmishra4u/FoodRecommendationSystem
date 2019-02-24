var User = require('./../user/userController');

module.exports = function(router) {
    router.post('/createUser', User.createUser);
    router.get('/getAllUser', User.getUsers);
    router.get('/loginUser',User.loginUser);
    router.get('/getUser/:name', User.getUser);
    router.put('/updateUser/:id', User.updateUser);
    router.delete('/deleteUser/:id', User.deleteUser);
}
