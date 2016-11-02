var express =require('express');
var router =express.Router();
var dal =require('../../common/dalData');

// 获取所有的blog数据
router.get('/all_data',function(req,res){
    var data =dal.getData();
    res.json({
        status:'y',
        msg:'获取数据数据成功',
        data:data
    });
})
module.exports=router;
