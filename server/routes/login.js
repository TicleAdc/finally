var express=require('express');
var router=express.Router();
var session=require('express-session');
var Users=require('../models/users');

router.post("/",function(req,res,next){
    var body=req.body
    Users.findOne({
        $and:[
            {email:body.email},
            {pass:body.pass}
        ]
    },function(err,data){
        if(err){
            return res.status(500).json({
                err_code:500,
                message:"Server Error"
            })
        }if(!data){
            return  res.status(200).json({
           err_code:1,
           message:'email or pass wrong'
       })}
      
       session.user=data;
       res.status(200).json({
           err_code:0,
           message:"OK"
       })
    })
    
})

module.exports=router;