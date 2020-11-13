const User = require("../models/user")
const { check, validationResult } = require('express-validator');

exports.signOut =  (req, res) => {
    //console.log("wew")
      res.send("Sign out successful");
    }

    exports.signUp =  (req, res) => {
        //console.log("wew")
          const user = new User(req.body)

        //check for validation errors and throw them
        const errors = validationResult(req)
          if(!errors.isEmpty())
          {
            return res.status(422).json({
              error: errors.array()[0].msg 
            })
          }
          //saving user to database
          user.save((err,user)=>{
              if(err)
              {
                  return res.status(400).json(
                      {
                        err:"Not able to add user in DB"  
                      }
                  )
                  
              }
              res.json(user)
          })
        }