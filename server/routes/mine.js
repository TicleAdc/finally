var express=require('express');
var router=express.Router();
var session=require('express-session');
var Users=require('../models/users');

router.get("/",function(req,res,next){
    let email=session.user.email;

    Users.findOne({email:email})
          .populate('buylist')
    .exec(function(err,data){
        if(err){
            return res.status(500).json({
                err_code:500,
                message:"Server Error"
            })
        }if(!data){
            return  res.status(200).json({
           err_code:1,
           message:'can not found user'
       })}
        res.status(200).json(data);
       
    }) 
    
})

router.put("/edit",function(req,res,next){
   let body=req.body
   Users.updateOne(
       {pass:body.oldPass
    },
    {$set: {pass: body.newPass}},
    function(err){
        if(err) return res.status(500).json({
            err_code:500,
            message:"Serve Error"
        })
        res.status(200).json({
            err_code:0,
            message:"modify successful"
        });
    }
   )
       
})
module.exports=router;