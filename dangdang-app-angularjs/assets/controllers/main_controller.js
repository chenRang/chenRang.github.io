app.controller('mainController',['$scope',function($scope){  
  // 设置底部导航的展示效果
  $scope.selectedIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectedIndex = index;
  }
}])
