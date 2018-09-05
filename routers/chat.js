const exp = require('express'),
    router = exp.Router();
const chatinfo = require('../db2.js')
router.post('/chat', function (req, res) {
    const chatData = req.body;
    console.log(chatData)
    const chatInfo=new chatinfo(req.body);
    chatInfo.save((error, data) => {
        if (error) {
            console.log(error);
            res.json({ 'result': '0', 'message': '数据存储失败，请重新尝试' })
        }
        else {
            console.log(data);
            res.json({ 'result': '1', 'message': '数据存储是成功' })
        }
    })





})

module.exports = router;