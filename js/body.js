// 全局js

$(function () {

    var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
            }, false);
        });
    }

    var outDiv = '<div class="outDiv">123</div>';
    $(".mainNav").before('<div class="outDiv"></div>');
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    // console.log(screenHeight);
    screenHeight = screenHeight / 10;
    $(".outDiv").css("height", screenHeight + "rem");
    $(".outDiv").slideUp();

    $(".navLogo").on("click", function () {
        $(".outDiv").slideDown(300, function () {
            window.location.href = "./index1.html";
        });

    })

    // $(".whatisnew").click(function () {
    //     $(".")
    //     $(".menuMain").stop().hide();
    //     $(".navListIcon").click();
    // });

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
    $(".segment .unit:eq(0)").on("click", function () {
        window.location.href = "./index1.html";
    })
})