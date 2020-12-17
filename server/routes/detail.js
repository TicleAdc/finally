var express=require('express');
var router=express.Router();
var Goods=require('../models/goods.js');
var session=require('express-session');
var Users=require('../models/users');

router.get("/",function(req,res,next){
    let id=JSON.stringify(req.query).slice(7,-2);
    Goods.findOne({_id:id})
    .exec(function(err,data){
        if(err){
            return res.status(500).json({
                err_code:500,
                message:"Server Error"
            })
        }if(!data){
            return  res.status(200).json({
           err_code:1,
           message:'can not found good'
       })}
        res.status(200).json(data);
       
    }) 
    
})

router.post("/buy",function(req,res,next){
    let body=req.body;
    Users.findOneAndUpdate({email:session.user.email},{$push:{buylist:body}},{},function(err,data){
        if(err) {
            return res.status(500).json({
            err_code: 500,
            message: "Serve Error"
        })}
        return res.status(200).json({
            err_code: 200,
            message: "perchase success"
        })
    })
})

module.exports=router;