// 全局js
window.addEventListener("load", function () {
    // 头部
    // navLogo 点击返回主页
    var navLogo = document.getElementsByClassName("navLogo")[0];
    // navTitle 点击打开商品菜单
    var navTitle = document.getElementsByClassName("navTitle")[0];
    // navListIcon 点击打开下拉菜单
    var navListIcon = document.getElementsByClassName("navListIcon")[0];
    // touch.on(navListIcon, 'tap', function () {
    //     $(".menuMain").toggle(300);
    // })
})

$(function () {
    $(".menuMain").hide();
    $(".navListIcon").on("click", function () {
        $(".menuMain").slideToggle(function () {
            $(".listTab>a").slideToggle(250);
        });
    });
})