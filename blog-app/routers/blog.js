var express = require('express');
var router =express.Router();

var dal = require('../common/dalData');
// 引入数据处理模块

// 文章列表
router.get('/list',function(req,res){
    var data =dal.getData();//获取所有数据
    res.render('blog/list',{list:data});

})
// 单篇文章
router.get('/detail/:id',function(req,res){
    dal.updateViewTimes(req.params.id);
    // 更新当前文章的浏览次数

    var data=dal.getDataById(req.params.id);
    // 获取当前文章的数据

    res.render('blog/detail',{data:data});
})
module.exports =router;
