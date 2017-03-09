const passport = require('passport')

function authController(UserMod){

	function registerUser(req, res){
     // passport appends json-data to request.body
     // console.log(req.body)
     let newUser = new UserMod(req.body)

     UserMod.find({username: req.body.uusername}, function(err, results){
       if (err) return res.status(500).send('error saving querying db for user')

       if(results !== null && results.length > 0 ) { 
         return res.status(401).send(`oops, record for <${req.body.username}> already exists`)
       }

       newUser.save(function(err, record){
         if(err) return res.status(500).send('server/db error on attempt to save user to db')
         let userCopy = newUser.toObject()
         delete userCopy.password
   		userCopy.password = undefined

         return res.json(userCopy).status(200)
       })
     })
   }

	function getCurrentUser (req, res) {
     if (req.user) {
			return res.json({user: req.user}).status(200);
	  } else {
         return res.json({user: null}).status(200)
	  }
   }

	function authenticateUser(req, res, next){
	  passport.authenticate('local', _handleAuth(req,res,next))(req,res,next)  
   }
	
	function _handleAuth(req,res,next){
		return (err,user,info)=>{
		  if (err || !user) {
			 return res.status(400).send('incorrect username/password combination')
		  }
		  req.login(user, (err)=>{
			  if (err) { return res.status(500).send(err) }
			  delete user.password
			  user.password = undefined
			  return res.json(user).status(200)
		  })
		  next()
		}
	}
	function logoutUser(req, res) {
     if (!req.user) { return res.json({msg: 'error: no current user'}).status(200) }
     
	  let username = req.user.username
     req.logout()
     return res.json({msg: `user <${username}> logged out`}).status(200) 
   }

	return {
		registerUser,
		getCurrentUser,
		authenticateUser,
		logoutUser
	}
}

module.exports = authController
