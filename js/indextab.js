$(function() {
    $('.tab_list li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        var index = $(this).index();
        $('.tab_con .item').eq(index).show().siblings().hide();

    })
    var tab1 = document.getElementsByClassName('tab1')[0];
    var tab2 = document.getElementsByClassName('tab2')[0];
    touch.on(tab1, "swipeleft", function() {
        // $(".tab1").fadeOut(5000);
        // $(".tab1").fadeToggle();
        $('.tab4').click();
        // $(".tab2").fadeToggle();
        // $(".tab2").fadeIn(5000);
    })
    touch.on(tab2, "swiperight", function() {
        // $(".tab2").fadeOut(5000);
        // $(".tab2").fadeToggle();
        $('.tab3').click();
        // $(".tab1").fadeToggle();
        // $(".tab1").fadeIn(5000);
    })
})