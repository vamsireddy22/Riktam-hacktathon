const User = require("../models/User");

exports.signUp = (req,res)=>{
    const user = User(req.body);
    User.find({email:req.body.email},(err,userWithEmail)=>{
        if(err){
            return res.json({
                error:"error while signinug up the user",
                success:false
            })
        }
        if(userWithEmail.length!==0){
            return res.json({
                success:false,
                error:"Already have an account with the same mail id"
            })
        }
        else{
            user.save((err,user)=>{
                if(err){
                    console.log(err)
                    return res.json({
                        error:"error hile saving the user",
                        success:false
                    })
                }
                return res.send(user);
            })
        }
    })
}

exports.signIn = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.json({
                error:"No user found with the mentioned mail id",
                success:false
            });
        }
        if(user.password!==password){
            return res.json({
                error:"Invalid credentials",
                success:false
            });
        }
        return res.json({
            error:"",
            success:true,
            user:user
        });
    })
}