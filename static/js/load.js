/**
 * Created by Administrator on 2017/1/7.
 */
$(function(){
    if($.cookie('name')){
        alert('您已经登录,点击确认回到首页');
        location.href='/index.html'
    }
    $('form').submit(function(event){
        event.preventDefault();
        var name=$('#name').val();
        var data=$(this).serialize();
        $.post('/login',data,function(data){
            if(data.result=='0'){
                alert(data.mess)
            }
            else{
                $.cookie('name',name);
                alert(data.mess);
                location.href='/index.html'
            }



        })







    })










});