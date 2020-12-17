var express = require('express');
var router = express.Router();
var Users=require('../models/users');
var session=require('express-session');

router.post("/",function(req,res,next){
    let body=req.body;
    Users.findOneAndUpdate({email:session.user.email},{$push:{buylist:body}},{},function(err,data){
        if(err) return res.status(500).json({
            err_code: 500,
            message: "Serve Error"
        })
        return res.status(200).json({
            err_code: 200,
            message: "perchase success"
        })
    })
})

module.exports = router;
