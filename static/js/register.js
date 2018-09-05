/**
 * Created by Administrator on 2017/1/7.
 */
$(function () {
    //注册日期
    $('#date').datepicker({
        "showButtonPanel": true,
        "dateFormat": "yy-mm-dd"
    });
    //点击提交的操作
    $('form').submit(function (event) {
        //阻止默认提交事件
        event.preventDefault();
        var info = $(this).serialize();
        var password = $('input').eq(1).val();
        var confirm = $('input').eq(2).val();
        if (password != confirm) {
            alert('两次输入的密码不一致，请检查输入');
            return
        }
//提交
        $.post('/register', info, function (data) {
            //处理响应
            if(data.result=='0'){
                alert(data.mess)
            }
            else{
                alert(data.mess);
                location.href='/load.html'
            }
        })


    })


});



