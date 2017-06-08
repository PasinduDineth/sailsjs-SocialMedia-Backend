/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// findUserbyEmpnum: function(req, res) {
 //        var id = req.param('empnum');
 //        Register.findOne({ empnum: id })
 //            .exec(function(err, user) {
 //                if (err) {
 //                    return res.json({
 //                        error: err
 //                    });
 //                }
 //                if (user === undefined) {
 //                    return res.json({
 //                        notFound: true
                        
 //                    });
 //                } else
 //                    return res.json({
 //                        notFound: false,
 //                        userData: user
 //                    });
 //            });
 //    }
 login:function(req,res){
 	var username = req.param('username');
 	var password = req.param('password');
 	console.log(username)
 	console.log(password)
 	Register.find(
 	{username:username,
     password:password}
     ).exec(function (err, result) {
     		if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (result.length === 0) {
                    return res.json({
                        notFound: true
                        
                    });
                } else
                    return res.json({
                        notFound: false,
                        userData: result
                    });
				});
 },
 register:function(req,res){
 	var username = req.param('username');
 	var password = req.param('password');
 	var firstname = req.param('firstname');
 	var lastname = req.param('lastname');
 	var email = req.param('email');
 	var data = [{
      username:username ,
      password:password ,
      first_name:firstname ,
      last_name:lastname,
     email:email}]
 	console.log("register parsed values =>",username,password,email,firstname,lastname);
 	Register.create(data).exec(function (err, records) {
  	console.log("Register error =>",err);
  		return res.json({
                    result: records
                  });
});
 }



};

