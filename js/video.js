// 点击播放按钮蒙版出现
$(document).ready(function() {
    $("#watch_video").on("click", function() {
        $(".mengban").css("display", "block");
        var bofang = document.getElementById("bofang");
        bofang.play()
    });
    $(".mengban").click(function() {
        $(this).hide();
        event.stopPropagation()
        var bofang = document.getElementById("bofang");
        bofang.pause()
    })
});
//点击视频之外的地方停止播放 蒙版隐藏
//第二个视频
// 点击播放按钮蒙版出现
$(document).ready(function() {
    $("#watch_video2").on("click", function() {
        $(".mengban2").css("display", "block");
        var bofang = document.getElementById("bofang2");
        bofang.play()
    });
    $(".mengban2").click(function() {
        $(this).hide();
        event.stopPropagation()
        var bofang = document.getElementById("bofang2");
        bofang.pause()
    })
});
//点击视频之外的地方停止播放 蒙版隐藏
//第三个视频
$(document).ready(function() {
    $("#watch_video3").on("click", function() {
        $(".mengban3").css("display", "block");
        var bofang = document.getElementById("bofang3");
        bofang.play()
    });
    $(".mengban3").click(function() {
        $(this).hide();
        event.stopPropagation()
        var bofang = document.getElementById("bofang3");
        bofang.pause()
    })
});
//第四个视频
$(document).ready(function() {
    $("#watch_video4").on("click", function() {
        $(".mengban4").css("display", "block");
        var bofang = document.getElementById("bofang4");
        bofang.play()
    });
    $(".mengban4").click(function() {
        $(this).hide();
        event.stopPropagation()
        var bofang = document.getElementById("bofang4");
        bofang.pause()
    })
});