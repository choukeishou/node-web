/**
 * Created by Administrator on 2017/1/7.
 */
const exp = require('express'),
    router = exp.Router(),
    User = require('../db.js');
router.post('/register', function (req, res) {
    const info = req.body;
    //判断数据库中有没有这个用户
    User.find({name: info.name}).exec((error, data) => {
        if (error) {
            res.json({result: '0', mess: '系统错误'})
        }
        else {
            console.log(data);
            if(data.length==0){
                //之前没有人注册过
                const user=new User(req.body);
                user.save((error,data)=>{
                    if(error){
                        res.json({result:'0',mess:'系统错误'})
                    }
                    else{
                        res.json({result:'1',mess:'注册成功'})
                    }
                })
            }
            else{
                //之前已经有人注册过
                res.json({result:'0',mess:'用户名已存在，注册失败'})
            }
        }
    })
});
module.exports = router;