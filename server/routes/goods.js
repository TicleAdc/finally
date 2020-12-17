var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');
var session=require('express-session');
var Users=require('../models/users');



router.get("/", function (req, res, next) {
    let initdata=JSON.stringify(req.query);
    let data=initdata.slice(7,-5);
    if (data=="") {
        Goods.find({}, function (err, data) {
            if (err) return res.status(500).json({
                err_code: 500,
                message: "Serve Error"
            })
            res.status(200).json(data)
        })
    }else{
        Goods.find({findtype:data},function(err,data){
            if (err) return res.status(500).json({
                err_code: 500,
                message: "Serve Error"
            })
            res.status(200).json(data)
        })
    }
    

})

router.post("/buy/:id",function(req,res,next){
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