var express=require('express');
var router=express.Router();
var session=require('express-session');

router.post('/', function (req, res, next) {
    // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
    // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
    // 然后去查找对应的 session 文件，报错
    // session-file-store 本身的bug        
    req.session.destroy(function (err) {
      if (err) {
        res.status(500).json({
            err_code:500,
            message:"服务端出错"
        });
        return;
      }
  
      res.clearCookie('shopkey');
      res.status(200).json({
        err_code:0,
        message:"注销成功"
    });
      
    });
  });

module.exports=router;