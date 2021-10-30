$(function () {
    $(".navLogo").on("click", function () {
        window.location.href = "./index.html"
    })

    $(".menuMain").hide();
    $(".navListIcon").on("click", function () {
        $(".menuMain").slideToggle(function () {
            $(".listTab>a").slideToggle(250);
        });
    });
    $(".navTitle").on("click", function () {
        location.href = "./index.html";
    });
})