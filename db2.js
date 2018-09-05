/**
 * Created by Administrator on 2017/1/9.
 */
//数据库操作
const mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/loadDB');
const db=mongoose.connection;
//监听数据库的状态
db.on('error',function(error){
    console.log('打开数据库失败了')
});
db.on('open',function(){
    console.log('打开数据库成功')
});
//设置存储模式
const schema=mongoose.Schema({
    chatName:String,
    chatData:String
});
const chatData=mongoose.model('chatdatas',schema);
module.exports=chatData;
