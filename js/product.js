var i = 0;
$(function () {

    var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
                // console.log(hamburgers.length);
            }, false);
        });
    }

    $(".mainNav").before('<div class="outDiv"></div>');
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    // console.log(screenHeight);
    screenHeight = screenHeight / 10;
    $(".outDiv").css("height", screenHeight + "rem");
    $(".outDiv").slideUp(300);

    $(".navLogo").on("click", function () {
        $(".outDiv").slideDown(300, function () {
            window.location.href = "./index1.html";
        });
    })

    $(".menuMain").stop().hide();
    $(".navListIcon").on("click", function () {
        $(".menuMain").stop().slideToggle(function () {
            $(".listTab>a").stop().slideToggle(250);
        });
    });
    var screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
    // console.log(screenWidth);
    screenWidth = screenWidth / 10;
    $(".slideShow").css("width", screenWidth + "rem");
    // console.log(screenWidth);
    $(".slideBox").css("width", 4 * screenWidth + "rem");
    // var i = 0;
    $(".btn_left").hide();
    var slideLeft = 0;
    $(".btn_left").on("click", function () {
        i--;
        // console.log(i);
        slideLeft = -i * screenWidth;
        $(".slideBox").css("transform", "translateX(" + slideLeft + "rem)");
        if (i == 0) {
            $(".btn_left").fadeOut();
        }
        if (i > 0) {
            $(".btn_left").fadeIn();
        }
        if (i == 3) {
            $(".btn_right").fadeOut();
        }
        if (i < 3) {
            $(".btn_right").fadeIn();
        }
    })
    $(".btn_right").on("click", function () {
        i++;
        // console.log(i);
        slideLeft = -i * screenWidth;
        $(".slideBox").css("transform", "translateX(" + slideLeft + "rem)");
        if (i == 0) {
            $(".btn_left").fadeOut();
        }
        if (i > 0) {
            $(".btn_left").fadeIn();
        }
        if (i == 3) {
            $(".btn_right").fadeOut();
        }
        if (i < 3) {
            $(".btn_right").fadeIn();
        }
    })

    // 单数div去除右边框
    $(".littleList div:odd").css("borderRight", "none");

    $(".navTitle").on("click", function () {
        $(".outDiv").slideDown(300, function () {
            window.location.href = "./index1.html";
        });
    });
})

window.onload = function () {
    var slideShow = document.querySelector(".slideShow");
    var slideBox = document.querySelector(".slideBox");
    touch.on(slideShow, "swipeleft", function () {
        if (i <= 2) {
            $(".btn_right").click();
            // console.log(i);
        } else {
            $(".btn_right").one("click");
        }
    })
    touch.on(slideShow, "swiperight", function () {
        if (i >= 1) {
            $(".btn_left").click();
            // console.log(i);
        } else {
            $(".btn_left").one("click");
        }
    })
}