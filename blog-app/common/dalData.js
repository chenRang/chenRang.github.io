var fs =require('fs');

var dalData={};
/**
 * 获取所有的数据
 * @return {[type]} [description] 
 */
dalData.getData =function(){
    var strData = fs.readFileSync('./data/data.json').toString();
    var arr =[];
    if(strData){
        arr =JSON.parse(strData);
    }
    return arr;
}
/**
 * 根据id获取数据
 */
dalData.getDataById =function(id){
   var arr = this.getData();
   var result =arr.filter(function(item){
       if(item.id == id){
           return item;
       
       }
   });
   if(result.length>0){
       return result[0];

   }else{
       return {};
   }
   
}
/**
 * 根据id更新数据
 */
dalData.updateOne =function(id,data){
    var arr = this.getData();
    var index= arr.findIndex(function(item){
        return item.id == id;
    })
    arr[index].title =data.title;
    arr[index].description =data.description;
    arr[index].content = data.content;
    this.save(arr);

}

/**
 * 保存数据
 */
dalData.save = function(arr){
    fs.writeFileSync('./data/data.json',JSON.stringify(arr));

}

/**
 * 根据id删除数据
 */
dalData.delById = function(id){
    var arr =this.getData();
    var result =arr.filter(function(item){
        if(item.id != id){
            return item;
        }
    });
    this.save(result);

}
/**
 * 浏览次数
 */
dalData.updateViewTimes =function(id){
    var arr =this.getData();
    var result=arr.filter(function(item){
        if(item.id ==id){
            return item.view_times+=1;
        }else{
            return item;
        }
    });
    this.save(result);
}

module.exports = dalData;