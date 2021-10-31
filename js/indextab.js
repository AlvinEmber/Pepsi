$(function() {
    $('.tab_list li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        var index = $(this).index();
        $('.tab_con .item').eq(index).show().siblings().hide();
    })
})