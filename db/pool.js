//【连接数据库-获取数据】

//使用变量“MySQL”，引入MySQL模块
var mysql = require('mysql');
//创建一个全局变量pool
var pool = global.pool;

//如果上述的pool不存在：创键pool对象
if(!pool){
    pool=mysql.createPool({
        //指定数据库服务器地址
        //host:  ,
        //指定数据库使用的端口号
        //port:  ,
        //连接数据库使用的额用户 名/密码 都是字符串，用引号
        user:'root',
        password:'root',
        //指定要连接的数据库名 字符串
        database:'exam'//,
    });
    //将pool连接挂载←到global
    global.pool = pool;
}
//console.log("pool",pool);

//获取连接
//getConnection是pool对象的方法，我们自己定义一个方法getConn，
//重名其实无所谓，还是做个区分
function getConnection(){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,conn){
            if(!err){
                resolve(conn);
            }else{
                reject(err);
            }
        });
    });
}

//执行sql语句实现功能？  
//       执行↓
//这里的参数在函数作为模块导入其他文件后被调用时获取
function executeSql(sql){
    return new Promise(function(resolve,reject){
        var connection;
        getConnection().then(function(conn){
            //这里的conn是调用getConn方法后获取的连接
            connection=conn;
            //这里的sql就是整个执行函数的参数sql
            conn.query(sql,function(err,result){
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            });
        }).catch(function(err){
            reject(err);
        }).finally(function(){
            if(connection){
                //释放：防止进程阻塞
                connection.release();
                console.log("释放完成");
            }
        });
    });
}


//放出方法的接口= =
//大概是反正每个操作数据库的js文件都要引入这个模块，所以将集成的方法写在这里？【全局的pool不需要放出接口的= =】
//大概是反正这个文件建在这里，利用一下？
//如果将这些方法写在另外的js文件中呢？在每个需要调用这些方法的文件都需要引入另外一个模块？
//pool是全局的，不用放出接口
module.exports={
    getConnection,
    executeSql
}