/**
 * Created by Administrator on 2017/1/7.
 */
const exp = require('express'),
    User = require('../db'),
    router = exp.Router();
router.post('/login', function (req, res) {
var data=req.body;
User.find({name:data.name}).exec((error,data)=>{
    if(error){
        console.log(error);
        res.json({result:'0',mess:'系统错误'})
    }
    else{
        if(data.length==1){
            if(req.body.password==data[0].password){
                res.json({result:'1',mess:'登录成功'})
            }
            else{
                res.json({result:'0',mess:'账号或密码错误'})
            }
        }
        else{
            res.json({result:'0',mess:'账户不存在，请先注册账号'})
        }
    }


})

});
module.exports = router;
