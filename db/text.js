//垫片【不知道加不加有什么不一样= =】
//【当单独从db文件夹中node text.js文件时，不加垫片无法解析ES6的函数】
//【所以使用babel解析转码有什么用= =。直接在文件引入垫片模块可行吗？】
require('babel-polyfill');

var subjectDB = require('./subjectDB');

/*查询所有题型
subjectDB.getAllSubjectType().then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/

/*
subjectDB.getDepartmentTopics(1).then(function(data){
    console.log("通过方向的id查找的知识点：",data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/

/*细节筛选*/
/*根据题目类型id查找题目
subjectDB.getSubjectsByType(2).then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/
/*根据难易程度id查找题目
subjectDB.getSubjectsByLevel(1).then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/
/*根据知识点id查找题目
subjectDB.getSubjectsByTopic(1).then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/
/*根据方向的id查找题目
subjectDB.getSubjectsByDepartment(2).then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});*/

/*
subjectDB.querySubject(3,2,2,7).then(function(data){
    //这里的后台，就是执行项目启动文件的那个终端窗口
    console.log(data);
}).catch(function(error){
    console.log("报错了！"+error);
});
*/

/*
subjectDB.queryChoiceBySubject(3).then(function(data){
    //这个得到的data是什么？？？//console.log("打印在作为服务器后台node text.js的终端窗口的data：",data);
    resp.send(data);
}).catch(function(error){
    resp.send(error);
});*/

/*
subjectDB.checkSubject(3).then(function(){
    resp.send("审核成功");
}).catch(function(error){
    resp.send(error);
});
*/

/*
//              stem,  dep,level,types,topic,  analysis,choiceContent,checkState
//                   题干   2 2 2 2     解析      答案      审核状态
subjectDB.addSubject('22222',2,2,2,2,'22222',[1,1,1,1],'未审核').then(function(){
    resp.send(data);
}).catch(function(error){
    resp.send(error);
});
*/

/*
subjectDB.queryOneNewSubjectId('22222',2,2,2,2,'22222',[1,1,1,1],'未审核').then(function(data){
    resp.send("找到的是什么？？",data);
}).catch(function(error){
    resp.send(error);
});*/

/*
subjectDB.addSubjectChoice('333',1,61).then(function(){
}).catch(function(error){
    resp.send(error);
});
*/