window.onload = function() {
    //懒加载图片
    function load() {
        //获取屏幕高度
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;
        //获取已加载的高度
        var scroolH = document.documentElement.scrollHeight || document.body.scrollHeight;
        //获取所有的图片 遍历
        var images = document.getElementsByClassName('images');
        for (var img of images) {
            if ((clientH + scroolH) >= img.offsetTop && img.getAttribute('data-realSrc')) {
                var realSrc = img.getAttribute('data-realSrc');
                img.src = realSrc;
            }
        }
        //找到图片中的每一个 判断当前图片 未加载图片
        //删除真是路径
        img.removeAttribute('data-realSrc')
    }
    load();
    window.onscroll = load;

}