/**
 * Created by Administrator on 2017/1/7.
 */
$(function () {

    //表情框的显示与隐藏
    $('.icon-detail').hide();
    $('.icon').click(function () {
        $(this).find('.icon-detail').toggle();
    });
    $('.icon-detail li').click(function () {
        var imgData = $(this).find('img').attr('src').substr(7, 6);
        console.log(imgData);
        $('#text').val($('#text').val() + '[' + imgData + ']');
    });
    $('#submit').attr('disabled');
    //发送请求获取聊天框历史数据

    angular.module('app', []).controller('control', ['$scope', function ($scope) {
        // console.log(data.mess)
        // $.get('/message', function (data) {
        //     if (data.result == '1') {
        //         console.log(data.mess);
        //
        //
        //     }
        //     else {
        //         alert('获取数据失败，请刷新页面尝试')
        //     }
        // });

    }]);


    //判断cookie是否存在即用户是否登录，如存在，更改一些设置
    if ($.cookie('name')) {
        $('.navbar-right').find('a').eq(0).attr('href', 'javascript:;').html($.cookie('name'));
        $('.navbar-right').find('a').eq(1).attr('href', 'javascript:;').html('退出登录');
        $('.navbar-right').click(function () {
            $.removeCookie('name');
            location.href = '/';
        });

        //点击提交按钮，发送数据
        $('#submit').click(function (event) {
            //阻止默认提交事件
            event.preventDefault()
            //获取聊天数据
            var chatName = $.cookie('name');
            console.log(chatName)
            var chatData = $('#text').val();
            console.log(chatData)
            $.post('/chat', {
                'chatName': chatName,
                'chatData': chatData
            }, function (data) {
                if (data.result == '1') {
                    alert('数据存储成功');
                    location.href = '/';
                    $('#text').val('')
                }
            })


        })


    }


});