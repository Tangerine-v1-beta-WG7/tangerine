const Login = require('./loginModel');

const loginController = {};


loginController.addUser = async (req, res, next) => {
    const { body } = req;
    try {

       const login =  await Login.create(body);
       res.locals.loginId = login;
       return next();

    } catch (err) {
        
            return next({
              message: { err: err,
                log: 'ERROR: userController.createUser'}
            })
          
    }
};

loginController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
       const result = await Login.findOne({ username: username });
       res.locals.userId = result._id;

       result.comparePassword(password, function(err, isMatch){
       
        if (!isMatch) {
          res.locals.user = 'false';
          return next();
        }
        es.locals.user = 'true'
        return next();
      });

       
    } catch (err) {
        return next({
            message: 'ERROR: userController.comparepassword'
          })
    }
 
  };


module.exports = loginController