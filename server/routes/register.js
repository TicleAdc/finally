var express=require('express');
var router=express.Router();
var Users=require('../models/users');
var session =require ('express-session');

router.post("/",function(req,res,next){
    var body=req.body
    Users.findOne({
        $or:[
            {email:body.email},
            {phone:body.phone}
        ]
    },function(err,data){
        if(err){
            
            return res.status(500).json({
                err_code:500,
                message:"Server Error"
            })
        }if(data){
            return res.status(200).json({
                err_code:1,
                message:"Email or Phone has aleary exists"
            })
        }
        new Users(body).save(function(err,user){
            if(err){
                console.log(err)
                return res.status(500).json({
                    err_code:500,
                    message:"Server Error"
                })
            }
            session.user=user;
            res.status(200).json({
                err_code:0,
                message:"OK"
            })
        })
       
    }
    )
    
})

module.exports=router;