var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*AAAAAAAAAAAAAAAAAAAA\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\↓↓↓↓↓↓↓↓↓↓↓↓*/
var index = require('./routes/index');
//var users = require('./routes/users');
//【A.引入中间件】
//详见【routes】文件夹中的各个路由文件，作为模块各个引入

//这里的名字↓最好于routes文件名一致，好区分【app使用时使用的是这里的对象名】
var subjectRoute = require("./routes/subjectRoutes");//var subjectRoute0 = require("./routes/subjectRoutes");
                        //文件的相对路径：app.js同级文件夹routes下的XXX文件[模块名=文件名]

//var studentRoute = require("./routes/studentRoute");

/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑/////////////////////////////////////////////////////////*/
var app = express();

// view engine setup【模板引擎】【这里删去，【views文件夹就可以删除】】
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//这里还会影响index.js页面的显示 所以【routes】中的.js也要修改

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*BBBBBBBBBBBBBBBBBBB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\↓↓↓↓↓↓↓↓↓↓↓↓*/
//设定路由中间件
//引入模块 首页路由
app.use('/', index);
//app.use('/users', users);
//【B.使用中间件】
//       ↓‘匹配的路径---父级路径’  ↓A中引入的中间件的对象名
app.use('/exam/manager',subjectRoute);// app.use('/exam/manager',subjectRoute0);

/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑/////////////////////////////////////////////////////////*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
