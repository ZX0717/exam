//垫片【这个垫片必须加】
require("babel-polyfill");

let express = require('express');
//引入【db】中的subject的模块，以调动这个模块放出接口的方法
let subjectDB = require('../db/subjectDB');

//创键中间件 subjectRoute
let subjectRoute = express.Router();

//功能 
//【！！！在这里写完子路径和方法调用，在浏览器搜索框输入完整路径即可在页面显示后台数据库的数据】
/*获取所有题目类型，传到浏览器
【如果在浏览器的搜索栏输入：http://192.168.138.200:8888/exam/manager/getAllSubjectType，
页面显示：[{"id":1,"name":"radio","realName":"单选题"},{"id":2,"name":"check","realName":"复选题"},{"id":3,"name":"question","realName":"简答题"}]】*/
                  //本级路径【父级路径写在app.js中使用中间件时，第一个参数就是父级路径【记得路径以“/”开头】】
                  //【浏览器输入路由测试，大概仅限get方法，且参数自备_(:зゝ∠)_】


//①=【获取各组全部的筛选项】=====================================================================================================                  
        subjectRoute.get('/getAllSubjectType',function(req,resp){
            //使用db中的模块，调用subjectDB中的各个方法【调用方法，记得在方法名后加小括号= =】
            //subjectDB.getAllSubjectType().then(data{}).catch(error{});
            subjectDB.getAllSubjectType().then(function(data){
                resp.send(data);
            }).catch(function(error){
                resp.send(error);
            });
        } 
        );

        /*获取所有题目的难易程度*/
        subjectRoute.get('/getAllSubjectLevel',function(req,resp){
            subjectDB.getAllSubjectLevel().then(function(data){
                resp.send(data);
            }).catch(function(error){
                resp.send(errr);
            });
        } 
        );

        /*获取所有题目的课程方向*/
        subjectRoute.get('/getAllDepartmentes',function(req,resp){
            subjectDB.getAllDepartmentes().then(function(data){
                resp.send(data);
            }).catch(function(error){
                resp.send(error);
            });
        } 
        );

        /*获取所有题目的知识点*/
        subjectRoute.get('/getAllTopics',function(req,resp){
            subjectDB.getAllTopics().then(function(data){
                resp.send(data);
            }).catch(function(error){
                resp.send(error);
            });
        } 
        );

//②=【同过四种筛选按钮，得到符合要求的题目】============================================================================================
//按照各个外外键的id查找题目【与删除的方法类似】
subjectRoute.post('/querySubject',function(req,resp){
    //【在浏览器测试需要将post改成get= = 原因？？？？？】【然后在形参的位置直接写各个外键的id】
    //【目前，仅仅将method改成get，在浏览器加载页面，功能失效。get的就在浏览器输入路径时用用吧= =】
    //subjectRoute.get('/querySubject',function(req,resp){
    //???????????
    var queryInfo = req.body;
console.log("queryInfo:",req.body);
/*这里的打印，打印在输入运行项目命令行的那个窗口里。当网页上有什么操作调用了这里的方法，后台显示：*/
    var direct=queryInfo["subject.department.id"]; 
    var topic=queryInfo["subject.topic.id"]; 
    var type=queryInfo["subject.subjectType.id"]; 
    var level=queryInfo["subject.SubjectLevel.id"]; 
                         //????????????????????
    /*【subjectRoute.post】*/
    subjectDB.querySubject(direct,level,type,topic).then(function(data){
    /*[subjectRoute.get]
    subjectDB.querySubject(2,2,2,2).then(function(data){*/
console.log("data666666666666666666666666",data);//貌似好像并没有调用这个打印【当操作筛选按钮，还是打印了的_(:зゝ∠)_】
/*
queryInfo: { 'subject.department.id': '1',
  'subject.topic.id': '1',
  'subject.subjectType.id': '2',
  'subject.SubjectLevel.id': '1' }
释放完成
data666666666666666666666666 []
POST /exam/manager/querySubject 200 145.659 ms - 2
queryInfo: { 'subject.department.id': '1',
  'subject.topic.id': '1',
  'subject.subjectType.id': '2',
  'subject.SubjectLevel.id': '2' }
释放完成
data666666666666666666666666 []
POST /exam/manager/querySubject 200 3.353 ms - 2
queryInfo: { 'subject.department.id': '2',
  'subject.topic.id': '1',
  'subject.subjectType.id': '2',
  'subject.SubjectLevel.id': '2' }
释放完成
data666666666666666666666666 []
POST /exam/manager/querySubject 200 3.269 ms - 2
queryInfo: { 'subject.department.id': '2',
  'subject.topic.id': '2',
  'subject.subjectType.id': '2',
  'subject.SubjectLevel.id': '2' }
释放完成
data666666666666666666666666 [ RowDataPacket {
    id: 23,
    analysis: '000111111',
    answer: 'aa,bb,cc,dd',
    checkState: '未审核',
    stem: '单选0001111111111',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 33,
    analysis: 'A2A2',
    answer: 'A1,A2,A3,A4',
    checkState: '未审核',
    stem: '单选AAAAA222222222',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 34,
    analysis: 'B2B2',
    answer: '999,888,777,666',
    checkState: '未审核',
    stem: '同类单选BBBBBB22222222',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 39,
    analysis: 'B2B2',
    answer: '999,888,777,666',
    checkState: '未审核',
    stem: '同类【待删】单选BBBBBB2222222290000000',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 41,
    analysis: 'B2B2',
    answer: '999,888,777,666',
    checkState: '未审核',
    stem: '同类【待删】单选BBBBBB22222222922222222',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 61,
    analysis: '22222',
    answer: '1,1,1,1',
    checkState: '未审核',
    stem: '22222',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 62,
    analysis: '333',
    answer: '1,1,1,1',
    checkState: '未审核',
    stem: '333',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null },
  RowDataPacket {
    id: 78,
    analysis: '3345666',
    answer: '222,23,2224,2225',
    checkState: '未审核',
    stem: '3434343',
    uploadTime: null,
    department_id: 2,
    subjectLevel_id: 2,
    subjectType_id: 2,
    topic_id: 2,
    user_id: null } ]

*/
        resp.send(data);
    }).catch(function(error){
        resp.send(error);
    });
} 
);

//③=【取得题目的id，在数据库的表中查找其各个选项】=================================================================================================
//按照题目的id查找选项
/*
    queryChoiceBySubject(id){
        var sql = "select * form  tbl_exam_choice where subject_id="+id;
        return pool.executeSql(sql);
        //讲真，创建连接那块还不太懂
    }
*///subjectRoute.get('/queryChoiceBySubject',function(req,resp){
    subjectRoute.post('/queryChoiceBySubject',function(req,resp){
        var queryInfo = req.body;
        var subjectId=queryInfo["subject.id"];
        subjectDB.queryChoiceBySubject(subjectId).then(function(data){
        //【若XXDB的方法没有设参数，这里的参数3生效，若XXDB的方法中设了参数，这里的参数无效】subjectDB.queryChoiceBySubject(3).then(function(data){
            //这个得到的data是什么？？？//console.log("打印在作为服务器后台npm run exam 的终端窗口的data：",data);
            resp.send(data);
            /*
            在网页上的打印结果【是个数组】【这个数据发到哪里去了_(:зゝ∠)_？？？？？】
            【get下的测试参数】
            [{"id":9,"content":"aaa","correct":{"type":"Buffer","data":[0]},"subject_id":4},
             {"id":10,"content":"bbb","correct":{"type":"Buffer","data":[1]},"subject_id":4},
             {"id":11,"content":"ccc","correct":{"type":"Buffer","data":[0]},"subject_id":4},
             {"id":12,"content":"ddd","correct":{"type":"Buffer","data":[0]},"subject_id":4}]
            */
        }).catch(function(error){
            resp.send(error);
        });
    } 
    );


//④=【三个按钮】【审核】==================================================================================================================    
//根据题目id 对题目进行审核
   subjectRoute.post('/checkSubject',function(req,resp){
        var queryInfo = req.body;
        var subjectId=queryInfo["subjectId"];
        subjectDB.checkSubject(subjectId).then(
            function(){var retu="通过";resp.send(retu);
        }).catch(function(error){
            resp.send(error);
        });
    } 
    );

//根据题目id 对题目的审核判定为不通过
subjectRoute.post('/uncheckSubject',function(req,resp){
    var queryInfo = req.body;
    var subjectId=queryInfo["subjectId"];
    subjectDB.uncheckSubject(subjectId).then(
        function(){var retu="未通过";resp.send(retu);
    }).catch(function(error){
        resp.send(error);
    });
} 
);

//根据题目id 对题目重新审核：修改checkstate
subjectRoute.post('/recheckSubject',function(req,resp){
    var queryInfo = req.body;
    var subjectId=queryInfo["subjectId"];
    subjectDB.recheckSubject(subjectId).then(
        function(){var retu="重新审核";resp.send(retu);
    }).catch(function(error){
        resp.send(error);
    });
} 
);

//根据题目id 对题目进行删除
   subjectRoute.post('/deleteSubject',function(req,resp){
        var queryInfo = req.body;
        var subjectId=queryInfo["subjectId"];
        subjectDB.checkSubject(subjectId).then(
            function(){var retu="删除";resp.send(retu);
        }).catch(function(error){
            resp.send(error);
        });
    } 
    );


//================================================================================================================================
/*⑥-【添加题目页面的方法】----------------------------------------------*/
/*-----------------------------------------------------------*/
//【添加题目】----------------------------------------------------------------------------------------
    subjectRoute.post('/saveSubject',function(req,resp){
        var queryInfo = req.body;
            var dep = queryInfo["subject.department.id"]; 
            var topic = queryInfo["subject.topic.id"]; 
            var types = queryInfo["subject.subjectType.id"]; 
            var level = queryInfo["subject.subjectLEVEL.id"]; 
        console.log("level!!!===============",level);
            var stem = queryInfo["subject.stem"]; 
            var analysis = queryInfo["subject.analysis"];

            var choiceContent = queryInfo["choiceContent"]; 
        console.log("choiceContent选项内容`字符串=======",choiceContent);
            var checkState = queryInfo["checkState"]; //"未审核",
        //这里是数组= =
            var choiceContents = queryInfo["choiceContents[]"]; 
        console.log("choiceContents选项内容`数组=======",choiceContents);
            var choiceCorrect = queryInfo["choiceCorrect[]"]; 
        console.log("choiceCorrect选项正误`数组=======",choiceCorrect);     
        // /*
        // level!!!=============== 2
        // choiceContent选项内容`字符串======= 222,23,2224,2225
        // choiceContents选项内容`数组======= [ '222', '23', '2224', '2225' ]
        // choiceCorrect选项正误`数组======= undefined
        // */
// /*
// level!!!=============== 1
// choiceContent选项内容`字符串======= 45454,5454,54545,454545
// choiceContents选项内容`数组======= [ '45454', '5454', '54545', '454545' ]
// choiceCorrect选项正误`数组======= [ '0', '0', '0', '1' ]
// 【XXDB.js文件中的addSubject方法打印的：】添加题目的参数： stem: ----------- ,dep: 1 ,level: 1 ,types: 1 ,topic: 1 ,analysis: 656565656 ,choiceContent: 45454,5454,54545,454545 ,checkState: 未审核
// 释放完成
//【看样子完全没有执行queryOneNewSubjectId  OTZ】

// level!!!=============== 2
// choiceContent选项内容`字符串======= 667,7,6,777
// choiceContents选项内容`数组======= [ '667', '7', '6', '777' ]
// choiceCorrect选项正误`数组======= undefined
// 添加题目的参数： stem: 676767676 ,dep: 2 ,level: 2 ,types: 2 ,topic: 2 ,analysis: 76767676767 ,choiceContent选项内容-字符串状态: 667,7,6,777 ,checkState: 未审核 ,choiceContents选项内容-数组: [ '667', '7', '6', '777' ] ,choiceCorrect选项正误: undefined
//POST /exam/manager/saveSubject 500 298.776 ms - 1259【报错 题目插入成功】
// */                                                                                        //<方法C>为了传递参数：将choiceContents,choiceCorrect也传过去
            subjectDB.addSubject(stem,dep,level,types,topic,analysis,choiceContent,checkState,choiceContents,choiceCorrect).then(
                //<方法C>接收返回值：[id,[XX,XX,XX,XXX],[0,1,0,0]]
                function(arr){
                    resp.send(arr);
            // console.log("【把添加题目的参数作为查找题目id方法的参数】",'stem2:',stem2,',dep2:',dep2,',level2:',level2,',types2:',types2,',topic2:',topic2,',analysis2:',analysis2,',choiceContent2:',choiceContent2,',checkState2:',checkState2,',choiceContents2:',choiceContents2,',choiceCorrect2:',choiceCorrect2);
//[前面还有一段打印，见addSubject方法]【把添加题目的参数作为查找题目id方法的参数】 stem2: 3434343 ,dep2: 2 ,level2: 2 ,types2: 2 ,topic2: 2 ,analysis2: 3345666 ,choiceContent2: 222,23,2224,2225 ,checkState2: 未审核 ,choiceContents2: [ '222', '23', '2224', '2225' ] ,choiceCorrect2: undefined
// 从这些打印的内容看，代码就执行到添加题目这里。之后没能进行下去。
//【此时，<方法B>将[$.ajax("exam/manager/queryOneNewSubjectId",{]放在[$.ajax("exam/manager/saveSubject",{]的[success:function()]里 】需要做出调整，试图找出问题OTZ    
//原先<方法A>试图将[$.ajax("exam/manager/saveSubject",{]传到后台的数据，经过resp.send传到前台。但打印出来的额东西和从页面获取的数据已经无关了。不知为何。此法弃用。             
                // resp.send(stem2,dep2,level2,types2,topic2,analysis2,choiceContent2,checkState2,choiceContents2,choiceCorrect2);
                }).catch(function(error){
                    resp.send(error);
                })
            });

        /*<方法C>将使用相同参数的添加数据与查找新添题目id两个合在一起。【目前还不知道能否成功】
        //【根据新添加的题目信息，希望确定这个新添题目的id】----------------------------------------
            subjectRoute.post('/queryOneNewSubjectId',function(req,resp){
                var queryInfo = req.body;
                    var dep = queryInfo["subject.department.id"]; */


//-------------------------------------------------------------------------------------------
//【【接受三个参数：一个新添题目的id，两个数组】
//根据新添题目的id，遍历一个数组，两个数组一个用item，一个使用index取出同一索引上的一条选项内容，加上这道题的id，加入数据库中的选项表中。】
//subjectId？？？(╯‵□′)╯︵┻━┻
    subjectRoute.post('/addSubjectChoice',function(req,resp){
        var queryInfo = req.body;
            var subjectId = queryInfo["subjectId"]; 
            var choiceContents4 = queryInfo["choiceContents[]"]; 
            var choiceCorrect4 = queryInfo["choiceCorrect[]"];   
        console.log("choiceContents4:::",choiceContents4);
        console.log("choiceCorrect4:::",choiceCorrect4);
        choiceCorrect4.forEach(function(item,index){
            subjectDB.addSubjectChoice(choiceContents4[index],item,subjectId).then(
                function(){
                    var retu="添加成功";
                    resp.send(retu);
                }).catch(function(error){
                    resp.send(error);
                })
            });
        });


//【测试保存方法】【好像没测出结果= =【成功了！！数据库中把选项差进去了！！！】】
// subjectRoute.get('/saveSubject',function(req,resp){
//     // var queryInfo = req.body;
//     //     var dep = queryInfo["subject.department.id"]; 
//     //     var topic = queryInfo["subject.topic.id"]; 
//     //     var types = queryInfo["subject.subjectType.id"]; 
//     //     var level = queryInfo["subject.SubjectLevel.id"]; 

//     //     var stem = queryInfo["subject.stem"]; 
//     //     var analysis = queryInfo["subject.analysis"];

//     //     var choiceContent = queryInfo["choiceContent"]; 
//     //     var checkState = queryInfo["checkState"]; //"未审核",
//     // //这里是数组= =
//     //     var choiceContents = queryInfo["choiceContents[]"]; 
//     //     var choiceCorrect = queryInfo["choiceCorrect[]"];      
//                         //      题干   2    2     2     2      解析      选项/答案    审核状态
//         subjectDB.addSubject(subjectDB.addSubject('333',2,2,2,2,'333',[1,1,1,1],'未审核').then(function(){
//                 subjectDB.queryOneNewSubjectId('333',2,2,2,2,'333',[1,1,1,1],'未审核').then(
//                     //取出的是一个数组，第一项也是唯一一项是一个对象=[{id:XXX}]
//                     function(data){
//                         console.log(data);
//                         var subjectId=data[0].id;
//                         console.log(subjectId);
//                         [1,1,1,1].forEach(function(item,index){
//                             subjectDB.addSubjectChoice([1,0,0,0][index],item,subjectId).then(
//                                 function(){
//                                     var retu="_(:зゝ∠)__(:зゝ∠)__(:зゝ∠)_";
//                                     resp.send(retu);
//                                 }).catch(function(error){
//                                     resp.send(error);
//                                 }).catch(function(error){
//                             resp.send(error);
//                         });
//                             });
//                     })
//         })
//         )
// });

//【测试按照所有信息能否获取题目id】
//通过所有信息，以查找到这个刚刚添加进去的题目，因为之后的操作需要这道题的id
//     subjectRoute.get('/queryOneNewSubjectId',function(req,resp){
// //         subjectDB.queryOneNewSubject('22222',2,2,2,2,'22222',[1,1,1,1],'未审核').then(function(data){
//          subjectDB.queryOneNewSubjectId('22222',2,2,2,2,'22222',[1,1,1,1],'未审核').then(function(data){
//         //subjectDB.queryOneNewSubject(stem,dep,level,types,topic,analysis,choiceContent,checkState).then(function(data){
//             // resp.send(data);
            // data.forEach(function(item,index){
            //     var c=item.id;
            //     console.log("55555555555555555"+c);//这里可以取出61！！！！！
//             })
//             // for(var i in oneSub){
//             //     var b =i;
//             // }
//             resp.send(c);
//         }).catch(function(error){
//             resp.send(error);
//         });
//     });


//-----【添加题目的选项】-------



/*-----------------------------------------------------------*/

//放出中间件接口，给app.js引入
//【这里的接口名，如果与中间件名不一致，大概需要设置→接口名：中间件名】【而不论中间件名与整个文件的模块名是没有关系的】
//【所以接口名的用处？？？？】↓这里大概是没有另外设接口名，但是中间件名也没有在这个文件以外用到啊= =？？
module.exports=subjectRoute;