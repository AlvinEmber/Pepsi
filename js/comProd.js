$(function () {
    $(".PEPSI").hide();
    $(".tabBox").hide();
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    console.log(screenHeight);
    screenHeight = screenHeight / 10;
    $(".tabBox").css("height", screenHeight + "rem");
    $(".slideBox>li,.littleList>div").on("click", function () {
        $(".tabBox").fadeIn();
        $(".PEPSI").show().animate({}, function () {
            $(this).css({
                // 'display': 'block',
                'transform': 'translateY(-10rem)',
                'transition': '.3s linear'
            })
        });
        event.stopPropagation();
    })
    $("body").on("click", function () {
        $(".tabBox").fadeOut();
        $(".PEPSI").animate({}, function () {
            $(this).css({
                'transform': 'translateY(100rem)',
                'transition': '.3s linear'
            })
        })
    })
})