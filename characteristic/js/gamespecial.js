/**
 * Created by 刘鹏程 on 2016/6/17.
 */
//游戏特色开始
$(function () {
    $("#gameSpecial .special_A").each(function (index,element) {
        $(element).css("background","url(images/special0"+(index*2+1)+".png) no-repeat");
    });
    $("#gameSpecial .special_B").each(function (index,element) {
        $(element).css("background","url(images/special0"+(index*2+2)+".png) no-repeat right");
        $(element).css({"left":2000-index*1000,"top":1000-index*1000});
    });
    $("#gameSpecial li").mouseenter(function () {
        $(this).stop(true,false).animate({"width":800},200).siblings().stop(true,false).animate({"width":150},200);
        $(this).children(".txt").hide();
        $(this).children(".special_B").show().stop(true,false).animate({"left":$(this).index()*150,"top":-120},200);
    });
    $("#gameSpecial li").mouseleave(function () {
        $("#gameSpecial li").stop(true,false).animate({"width":310},200);
        $(this).children(".txt").show();
        $(this).children(".special_B").hide().animate({"left":2000-$(this).index()*1000,"top":1000-$(this).index()*1000},200);
    });
});
//游戏特色结束