$(function () {
    $(".PEPSI").hide();
    $(".tabBox").hide();
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    // console.(screenHeight);
    screenHeight = screenHeight / 10;
    $(".tabBox").css("height", screenHeight + "rem");
    $(".slideBox>li,.littleList>div").on("click", function () {
        $(".tabBox").fadeIn();
        event.stopPropagation();
    })
    $(".tabBox").on("click", function () {
        $(".tabBox").fadeOut(500);
        $(".PEPSI").animate({}, function () {
            $(this).css({
                'animation': 'slideDownSelf .5s linear',
                'transition': '.5s linear'
            })
        })
        event.stopPropagation();
    })

    // 滑动列表的数据渲染
    $(".slideBox>li").on("click", function () {
        $(".tabBox").html();
        // $(".PEPSI").css("top", "100rem");
        var index = $(this).index();
        $.get({
            url: '../json/comProd.json',
            data: {},
            dataType: 'json',
            success: function (res) {
                var str = '';
                res = res.slice(index, index + 1);
                // console.(res);
                for (var i of res) {
                    str += '<div class="PEPSI" style="background-color: ' + i.background_color_detail + ';">';
                    str += '<section class="tab">';
                    str += '<img class="tabPic" src="' + i.image_source + '" alt="">';
                    str += '<div class="ntrBox">';
                    str += '<ul class="ntrList">';
                    str += '<li>';
                    str += '<h1>' + i.title + '</h1>';
                    str += '</li>';
                    str += '<li>';
                    str += '<h2>NUTRITION FACTS</h2>';
                    str += '</li>';
                    str += '<li>' + i.nutrition.servingSize + '</li>';
                    str += '<li class="CONTAIN1">Serving Per Container 1</li>';
                    str += '<li></li>';
                    str += '<li>Amount Per Serving</li>';
                    str += '<li class="CALO">Calories ' + i.nutrition.calories + '</li>';
                    str += '<li><span></span><span>% Daily Value *</span></li>';
                    str += '<li><span>Total Fat ' + i.nutrition.fat + 'g</span><span>0%</span></li>';
                    str += '<li><span>Sodium ' + i.nutrition.sodium + 'mg</span><span>1%</span></li>';
                    str += '<li><span>Total Carbohydrate ' + i.nutrition.carbs + 'g</span><span>14%</span></li>';
                    str += '<li><span>Sugar ' + i.nutrition.sugar + 'g</span></li>';
                    str += '<li class="CALO"><span>Protein ' + i.nutrition.protein + 'g</span></li>';
                    str += '<li>Not a significant source of other nutrients.</li>';
                    str += '<li>*Percent Daily Values are based on a 2,000 calorie diet.</li>';
                    str += '</ul>';
                    str += '</div>';
                    str += '<div class="ingredients">';
                    str += i.ingredients;
                    str += '<p class="last_updated" >' + i.last_updated + '</p >';
                    str += '</div >';
                    str += '<div class="botDiv">';
                    str += '<button class="buynow" style="background-color: ' + i.background_color_detail + ';"><a style="color:#fff" href="' + i.href + '">BUYNOW</a></button>';
                    str += '<span>MORE NUTRITIONAL INFO</span>';
                    str += '</div>';
                    str += '</section>';
                    str += '</div>';
                }
                $(".tabBox").html(str);
            }
        })
    })
    // 小列表的数据渲染
    $(".littleList>div").on("click", function () {
        $(".PEPSI").css("top", "28rem");
        var index = $(this).index();
        $.get({
            url: '../json/comProd.json',
            data: {},
            dataType: 'json',
            success: function (res) {
                var str = '';
                res = res.slice(index + 4, index + 5);
                // console.log(res);
                for (var i of res) {
                    str += '<div class="PEPSI" style="background-color: ' + i.background_color_detail + ';">';
                    str += '<section class="tab">';
                    str += '<img class="tabPic" src="' + i.image_source + '" alt="">';
                    str += '<div class="ntrBox">';
                    str += '<ul class="ntrList">';
                    str += '<li>';
                    str += '<h1>' + i.title + '</h1>';
                    str += '</li>';
                    str += '<li>';
                    str += '<h2>NUTRITION FACTS</h2>';
                    str += '</li>';
                    str += '<li>' + i.nutrition.servingSize + '</li>';
                    str += '<li class="CONTAIN1">Serving Per Container 1</li>';
                    str += '<li></li>';
                    str += '<li>Amount Per Serving</li>';
                    str += '<li class="CALO">Calories ' + i.nutrition.calories + '</li>';
                    str += '<li><span></span><span>% Daily Value *</span></li>';
                    str += '<li><span>Total Fat ' + i.nutrition.fat + 'g</span><span>0%</span></li>';
                    str += '<li><span>Sodium ' + i.nutrition.sodium + 'mg</span><span>1%</span></li>';
                    str += '<li><span>Total Carbohydrate ' + i.nutrition.carbs + 'g</span><span>14%</span></li>';
                    str += '<li><span>Sugar ' + i.nutrition.sugar + 'g</span></li>';
                    str += '<li class="CALO"><span>Protein ' + i.nutrition.protein + 'g</span></li>';
                    str += '<li>Not a significant source of other nutrients.</li>';
                    str += '<li>*Percent Daily Values are based on a 2,000 calorie diet.</li>';
                    str += '</ul>';
                    str += '</div>';
                    str += '<div class="ingredients">';
                    str += i.ingredients;
                    str += '<p class="last_updated" >' + i.last_updated + '</p >';
                    str += '</div >';
                    str += '<div class="botDiv">';
                    str += '<button class="buynow" style="background-color: ' + i.background_color_detail + ';"><a style="color:#fff" href="' + i.href + '">BUYNOW</a></button>';
                    str += '<span>MORE NUTRITIONAL INFO</span>';
                    str += '</div>';
                    str += '</section>';
                    str += '</div>';
                }
                $(".tabBox").html(str);
            }
        })
    })
})