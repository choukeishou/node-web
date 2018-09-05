/**
 * Created by Administrator on 2017/1/7.
 */
//数据库操作
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/loadDB');
//监听数据库的状态
const db = mongoose.connection;
db.on('error', function (error) {
    console.log('数据库打开失败了')
});
db.on('open', function () {
    console.log('数据库打开成功')
});
//设置存储模式
const schema = mongoose.Schema({
    name: String,
    password: String,
    date: String
});
//创建数据模型
const user = mongoose.model('users',schema);
//导出
module.exports = user;