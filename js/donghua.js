$(window).on("scroll", function() {

    　　　　 //1) offset();方法获取的元素相对于当前document元素的位置，可以将其理解为一个绝对位置
    　　　　 //2) offsetTop为一个元素相对于器offsetParent的top位置。
    　　　　 //3) offsetParent为元素的中距离其最近的一个父元素，这个父元素的position属性为absolute或relative的
    　　　　 //4) offsetParent可以通过jQuery的offsetParent()方法获取

    if ($(".toright").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.toright').addClass('toright1')

    }
    if ($(".toright2").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.toright2').addClass('toright3')

    }
    // if ($(".toright4").offset().top - $(this).scrollTop() < $(this).height()) {

    //     $('.toright4').addClass('toright5')

    // }



    if ($(".toleft").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.toleft').addClass('toleft1')

    }
    if ($(".toleft2").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.toleft2').addClass('toleft3')

    }
    if ($(".toleft4").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.toleft4').addClass('toleft5')

    }
    if ($(".totop").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.totop').addClass('totop1')

    }
    if ($(".totop2").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.totop2').addClass('totop3')

    }
    if ($(".totop4").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.totop4').addClass('totop5')

    }
    if ($(".totop6").offset().top - $(this).scrollTop() < $(this).height()) {

        $('.totop6').addClass('totop7')

    }

});