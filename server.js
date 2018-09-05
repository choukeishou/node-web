/**
 * Created by Administrator on 2017/1/7.
 */
const exp = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app = exp();
app.use(exp.static('static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(require('./routers/register'));
app.use(require('./routers/load'));
app.use(require('./routers/chat'));
app.use(require('./routers/index'));
app.listen(3000,function(){
    console.log('3000端口服务器启动了')
});