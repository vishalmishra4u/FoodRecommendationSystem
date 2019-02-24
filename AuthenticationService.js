var jwt = require('jsonwebtoken'),
  properties = require('./config/properties');

module.exports = {
  generateToken: generateToken,
  getAuthenticatedResponse: getAuthenticatedResponse,
  validateToken: validateToken
};

function generateToken(user) {
  // check user and return
  if (!user) {
    return null;
  }
  // generate a user id and authenticate
  var payload = {
    userInfo: user.id
  };
  // return token and user information with a refresh token
  var options = {expiresIn: '1h'};
  var secret = ${properties.SECRET};

  return jwt.sign(payload, secret, options);
}

function getAuthenticatedResponse(user) {

  if (!user) {
    return null;
  }

  return {
    user: user,
    token: AuthenticationService.generateToken(user)
  };
}

function validateToken(authToken) {
  var authPayload;

    // validate the token
    try {
      // decode the token
      authPayload = jwt.verify(authToken, secret);
    } catch (err) {
      console.error('AuthenticationService#validateToken :: Error while ' +
        'verifying the token :: ', err);

      return {
        message : 'Error in validating token'
      };
    }

    // check if payload is an object
    if ((authPayload == 'undefined') || !authPayload) {
      sails.log.error('AuthenticationService#validateToke :: Unidentified ' +
        'payload :: ', authPayload);

      return {
        message: 'Invalid authentication for user!'
      };
    }else{
      return;
    }
}
