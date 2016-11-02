var express =require('express');

var bodyParser = require('body-parser');
var logger =require('morgan');
var path = require('path');
var app= express();

// 设置引擎模板
app.set('views',path.join(__dirname,'views'));

var template = require('art-template');
template.config('base','');
template.config('extname','.html');
app.engine('.html',template.__express);
app.set('view engine','html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('./public'));
// 当用户访问
app.get('/',function(req,res){
    res.redirect('/blog/list');//页面跳转
    // res.redirect（）：设置响应的Location HTTP头，并且设置状态码302
})
app.all('/admin/*',(req,res,next)=>{
// 如果没有登录就跳转到登录页面 否则next
  
//   if(没有登录){
//    *  res.redirect('/login')
//    * }
//    * else{
//    *  next();}
   next();

})
app.use('/admin/blog',require('./routers/admin/blog'));

// 设置引入前端blog页面的路由模块
app.use('/blog',require('./routers/blog'));

app.use('/api/blog',require('./routers/api/blog'));


app.listen(3000,(req,res)=>{
    console.log('运行于3000终端');
})