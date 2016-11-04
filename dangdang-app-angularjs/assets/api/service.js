// 创建一个公用的数据调用服务
app.factory('commonService', ['$http', function($http) {
    var service = {};
    /**
     * 根据分类信息取数据
     * @param  {[type]} type     [分类信息]
     * @param  {[type]} callBack [回调函数]
     * @return {[type]}          [description]
     */
    service.getData = function(type, callBack) {
        $http({
                url: '/dangdang-app-angularjs/data/book_' + type + '.json',
                method: 'get'
            })
            .then(function(res) {
                console.log('获取数据成功')
                callBack(res);
            }, function(err) {
                console.dir(err);
            })
    }
    return service;
}])
