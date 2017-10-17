var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //【如果删除了【views】，页面效果不再，这里要这样写：
  //  res.send("<h1>welcome to express<h1>");   】
  //当然 如果不需要默认显示 应该也没什么影响？
});

module.exports = router;
