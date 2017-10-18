//为了调用两个方法，引入pool文件
var pool=require('./pool');
//console.log("pool",pool);

//设定方法的同时放出同名接口
module.exports={
    //这里的方法名于路径名差不多

    //显示所有题目的类型？？？
    getAllSubjectType(){
        //这个sql就是调用pool的方法后传入作为参数的sql，大概可以不同名【实参形参位置对上即可】，同名方便理解一些 吧
        var sql= "select * from tbl_exam_subjecttype";
        //设定了sql，然后将调用函数的结果整个作为返回值，在返回值中调用pool和执行sql语句的方法
        return pool.executeSql(sql);
    },
 //【↑这里不要忘记打逗号！！！】
    //显示所有题目的难易程度？？？
    getAllSubjectLevel(){
        var sql= "select * from tbl_exam_subjectlevel";
        return pool.executeSql(sql); 
    },
    //显示所有题目的方向？？？
    getAllDepartmentes(){
        var sql= "select * from tbl_exam_department";
        return pool.executeSql(sql);
    },
    //显示所有题目涉及的知识点？？？
    getAllTopics(){
        var sql= "select * from tbl_exam_topic";
        return pool.executeSql(sql);
    },


    //根据方向id获取该方向下的所有知识点？？？【通过方向的id查询所有知识点】
    //参数：topic.department.id
    /*
    getDepartmentTopics(id){
        console.log(id);
        var sql= "select * from tbl_exam_topic where departmente_id = "+id;
        return pool.executeSql(sql);
    },*/

/*=====================================================================================*/ 
    /*查询所有题目信息*/
    getAllSubjects(){
        var sql= "select * from tbl_exam_subject";
        return pool.executeSql(sql);
    },

    //按照外键查找符合条件的题目
    //querySubject(depa,leve,typ,topi){                                         //别忘了and和空格？
    querySubject(direct,level,type,topic){
    //console.log("subjectDB中打印的：","direct",direct,"level",level,"type",type,"topic",topic);
        var sql = "select * from tbl_exam_subject where department_id="+direct+" and subjectLevel_id="+level+" and subjectType_id="+type+" and topic_id="+topic;
        return pool.executeSql(sql);
    },



    /*根据题目的id，查找其对应的选项*/
    queryChoiceBySubject(id){
        //var id=4;//【只要这里提供了参数id,在XXXRoutes文件的方法里无需实参】【反过来也一样】
        //console.log("subjectDB中打印的：","id",id);
        var sql = "select * from  tbl_exam_choice where subject_id="+id;
        return pool.executeSql(sql);
        //讲真，创建连接那块还不太懂
    },

//===========================================================================================================================================
/*根据题干查找题目，显示div*/




//===========================================================================================================================================
    /*根据题目id 审核题目*/
    checkSubject(id){
        //【测试用参数】var id =3;
        //var sql =【反正出错了= =】"update 'exam'.'tbl_exam_subject' set 'checkState'='审核通过' where 'id="+id; 
        var sql ="update tbl_exam_subject set checkState='通过' where id="+id; 
        return pool.executeSql(sql);
    }, 

//【审核不通过的方法】==============================
    uncheckSubject(id){
        var sql ="update tbl_exam_subject set checkState='未通过' where id="+id; 
        return pool.executeSql(sql);
    }, 

//【重新审核的方法】==============================
    recheckSubject(id){
        var sql ="update tbl_exam_subject set checkState='重新审核' where id="+id; 
        return pool.executeSql(sql);
    },


//【删除题目的的方法】==============================
//===【还有对外键的影响OTZ 完全忘记了】====================
//【注意，删除也要删除选项表中的数据】
//【删除前先取到题目id，再取到题目的选项(如果有的话)，取answer，如果有逗号，将字符串转成数组，再foreach，挨个取出，
//通过三个参数，经过一个方法【待写】，从表中找出这条数据，删除。】
//【喂喂，你这里写的方法名是“审核”的啊！！！！！】
    deleteSubject(id){
        //【测试用参数】var id =3;
        var sql ="delete from tbl_exam_subject where id="+id; 
        return pool.executeSql(sql);
    },
    //还有，删除题目如何将id也删去？【或许不需要这样。因为一个id关联的东西太多，如果是动态的，那么选项表终端额id也要随之改变。】
    deleteChoice(subjectId){
        //content,correct,subject_id
        //【删除一道题的所有选项，执行一个：  即可
        //DELETE FROM `exam`.`tbl_exam_choice` WHERE `subject_id`='61';
        var sql="delete from tbl_exam_choice where subject_id="+subjectId;
        return pool.executeSql(sql);
    },


//-----【添加题目的的方法】----------------------------------------------------------------------------------------------------------
    addSubject(stem,dep,level,types,topic,analysis,choiceContent,checkState,choiceContents,correctChoices){
      //console.log("sql1-添加题目的参数：",'stem:',stem,',dep:',dep,',level:',level,',types:',types,',topic:',topic,',analysis:',analysis,',choiceContent选项内容-字符串状态:',choiceContent,',checkState:',checkState,',choiceContents选项内容-数组:',choiceContents,',correctChoices选项正误:',correctChoices);
//// 添加题目的参数： stem: 3434343 ,dep: 2 ,level: 2 ,types: 2 ,topic: 2 ,analysis: 3345666 ,choiceContent: 222,23,2224,2225 ,checkState: 未审核
// 释放完成【这道题确实添加成功了，但选项还是没着落】
        var sql= "insert into tbl_exam_subject(stem,department_id,subjectLevel_id,subjectType_id,topic_id,analysis,answer,checkState) values('"+stem+"',"+dep+","+level+","+types+","+topic+",'"+analysis+"','"+choiceContent+"','"+checkState+"')";
        //return pool.executeSql(sql);
//<方法C>在数据添加完后，直接利用这些参数进行查找：
        //return是一个函数的最后一行，所以这个return删去。有括号，执行SQL语句的方法应该就执行了...吧？        
        pool.executeSql(sql);
    //<方法C>
        var sql2= "select id from tbl_exam_subject where stem='"+stem+"' and department_id="+dep+" and subjectLevel_id="+level+" and subjectType_id="+types+" and topic_id="+topic+" and analysis='"+analysis+"' and answer='"+choiceContent+"' and checkState='"+checkState+"'"; 
        //console.log("slq2-添加题目的参数：",'stem:',stem,',dep:',dep,',level:',level,',types:',types,',topic:',topic,',analysis:',analysis,',choiceContent选项内容-字符串状态:',choiceContent,',checkState:',checkState,',choiceContents选项内容-数组:',choiceContents,',correctChoices选项正误:',correctChoices);
        //查询语句的返回值：[{'id':XXX}]
    
        choiceContents2=choiceContents;
        correctChoices2=correctChoices;
        console.log('choiceContents2+++++++',choiceContents2);
        console.log('correctChoices2++++++',correctChoices2);  
        return pool.executeSql(sql2);
        //这样取不到返回值： var newId =pool.executeSql(sql2);  
    },

//-----【添加题目选项的的方法】------------------------------
    addSubjectChoice(oneChoiceContent,onecorrectChoices,subjectId){
        var sql= "insert into tbl_exam_choice(content,correct,subject_id) values('"+oneChoiceContent+"',"+onecorrectChoices+","+subjectId+")";
        return pool.executeSql(sql);
    },


}