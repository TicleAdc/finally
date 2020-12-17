var express =require ('express');
var bodyParser =require('body-Parser');
var session =require ('express-session');
var mongoose=require('mongoose');
mongoose.set('useFindAndModify', true)
const app=express();

var Users=require('./models/users');
var Goods=require('./models/goods');

var registerRouter=require('./routes/register');
var loginRouter=require('./routes/login');
var logoutRouter=require('./routes/logout');
var mineRouter=require('./routes/mine');
var goodsRouter=require('./routes/goods');
var cartRouter=require('./routes/cart');
var goodDetailRouter=require('./routes/detail');
// var urlTool=require('./common/urlTool');

app.use(bodyParser.json({
    limit: '1mb'
  }));
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  let identityKey = 'shopkey';
  app.use(session({
    name:identityKey,
    secret: 'onlineshop', // 用来对session id相关的cookie进行签名
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: true, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 2 * 3600 * 1000 // 有效期，单位是毫秒
      }
  }));


// app.use('/',urlTool);
app.use('/api/register',registerRouter);
app.use('/api/login',loginRouter);
app.use('/api/logout',logoutRouter);
app.use('/api/mine',mineRouter);
app.use('/api/goods',goodsRouter)
app.use('/api/cart',cartRouter);
app.use('/api/detail/:id',goodDetailRouter)


mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost/blizzard",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
let conn =mongoose.connection;
conn.on('connected',()=>{
  console.log("MongoDB connected")
});
conn.on("error",(err)=>{
  console.log("MongoDB connected ERROR",err.message);
});


app.listen(60,function(){
    console.log("running");
})