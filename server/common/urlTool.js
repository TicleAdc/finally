var express=require('express');
var router=express.Router();

router.use(function (req, res, next) {
    let arr = req.url.split('/');
  
    //去除get请求携带的参数
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('?')[0];
    }
    if (req.session.user) {
      //用户登录过
      if (arr[1] === 'login') {
        res.redirect('/');
        res.end();
      }
      next();
    } else {
      //解析用户请求路径
      if (arr.length > 2) {
        if (arr[2] === 'login' || arr[2] === 'logout'||arr[2]==='register') {
          next();
        } else {
          console.log('intercept：用户未登录执行登录拦截，路径为：' + arr[2]);
          res.status(401);
          res.end();
        }
      }
    }
  });



module.exports=router;