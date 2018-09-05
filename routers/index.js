/**
 * Created by Administrator on 2017/1/14.
 */
const exp = require('express'),
    router = exp.Router(),
    chatInfo = require('../db2.js');
router.get('/message', function (req, res) {
    chatInfo.find().exec((error, data) => {
        if (error) {
            console.log(error);
            res.json({'result': '0', 'mes': '获取数据失败，请刷新尝试'})
        }
        else{
            console.log(data);
            res.json({'result':'1','mess':data})
        }
    })


});

module.exports=router;