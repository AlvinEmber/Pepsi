// 全局js

$(function () {
    var outDiv = '<div class="outDiv">123</div>';
    $(".mainNav").before('<div class="outDiv"></div>');
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    console.log(screenHeight);
    screenHeight = screenHeight / 10;
    $(".outDiv").css("height", screenHeight + "rem");
    $(".outDiv").slideUp();

    $(".navLogo").on("click", function () {
        $(".outDiv").slideDown(300, function () {
            window.location.href = "./index.html";
        });

    })

    $(".menuMain").stop().hide();
    $(".navListIcon").on("click", function () {
        $(".menuMain").stop().slideToggle(function () {
            $(".listTab>a").stop().slideToggle(250);
        });
    });

    $(".productList").hide();
    $(".navTitle").on("click", function () {
        $(".outDiv").slideDown(300, function () {
            window.location.href = "./product.html"
        })
    })
})