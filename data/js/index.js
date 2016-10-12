/**
 * Created by jiemo on 2016/6/17.
 */

$(function () {
    $("#topBar .topBanner").mouseenter(function () {
        $(".main #bigBanner").show();
        $(this).css("background","white");
    });
    $("#topBar .topBanner").mouseleave(function () {
        $(".main #bigBanner").hide();
        $(this).css({"background":"url(images/pic9d0b.jpg) no-repeat"});
    });
    $("#taozhuang").mouseenter(function () {
        $("#tzup>img").fadeOut(400, function () {
            $("#tzup>img").attr("src", "images/tz2.png");
            $("#tzup>img").fadeIn(1000);
        });
        $("#tzdown>img").attr("src", "images/tz02.png");
    });

    $("#taozhuang").mouseleave(function () {
        $("#tzup>img").attr("src", "images/tz1.png");
        $("#tzdown>img").attr("src", "images/tz01.png");
    });

    $("#wuqi").mouseenter(function () {
        $("#wqup>img").fadeOut(400, function () {
            $("#wqup>img").attr("src", "images/wq2.png");
            $("#wqup>img").fadeIn(1000);
        });
        $("#wqdown>img").attr("src", "images/wq02.png");
    });

    $("#wuqi").mouseleave(function () {
        $("#wqup>img").attr("src", "images/wq1.png");
        $("#wqdown>img").attr("src", "images/wq01.png");
    });

    $("#pifeng").mouseenter(function () {
        $("#pfup>img").fadeOut(400, function () {
            $("#pfup>img").attr("src", "images/pf2.png");
            $("#pfup>img").fadeIn(1000);
        })
        $("#pfdown>img").attr("src", "images/pf02.png");
    });

    $("#pifeng").mouseleave(function () {
        $("#pfup>img").attr("src", "images/pf1.png");
        $("#pfdown>img").attr("src", "images/pf01.png");
    });

    $("#shipin").mouseenter(function () {
        $("#spup>img").fadeOut(400, function () {
            $("#spup>img").attr("src", "images/sp2.png");
            $("#spup>img").fadeIn(1000);
        })
        $("#spdown>img").attr("src", "images/sp02.png")
    });

    $("#shipin").mouseleave(function () {
        $("#spup>img").attr("src", "images/sp1.png");
        $("#spdown>img").attr("src", "images/sp01.png");
    });


});