window.onload = function () {
    //点击隐藏显示二维码
    $(".right-ewm .right-btn-warp").click(function () {
        //点击按钮right-btn-warp 盒子right-ewm right值变为-180
        if ($(".right-btn-warp .right-btn-close").css("display") === "block") {
            $(".right-ewm").animate({
                "right": "-180px"
            }, 500);
            $(".right-btn-warp .right-btn-close").css("display", "none");
            $(".right-btn-warp .right-btn-open").css("display", "block");
        } else {
            $(".right-ewm").animate({
                "right": "0px"
            }, 500);
            $(".right-btn-warp .right-btn-close").css("display", "block");
            $(".right-btn-warp .right-btn-open").css("display", "none");
        }
    });
    //鼠标经过武器  高亮显示
    $(".wuqiku a").mouseenter(function () {
        $(this).css("opacity", 1);
    });
    $(".wuqiku a").mouseout(function () {
        $(this).css("opacity", .7);
    });
    //点击设备要求 显示弹窗和遮罩
    $(".ask").click(function () {
        $("#Jdevice").css("display", "block");
        $(".fade").css("display", "block");
    });
    //点击关闭按钮 弹窗关闭
    $("#Jdevice .book-close").click(function () {
        $(this).parent().css("display", "none");
        $(".fade").css("display", "none");
    });

    //分享图标 鼠标经过离开事件
    $(".share .shareul li").mouseenter(function () {
        $(this).css("opacity", .6).siblings().css("opacity", 1);
    });
    $(".share .shareul li").mouseout(function () {
        $(this).css("opacity", 1);
    });
    //鼠标经过离开左右箭头
    $("#leftArr").mouseenter(function () {
        $(this).animate({
            "left": "-83px"
        }, 100);
    });
    $("#leftArr").mouseout(function () {
        $(this).animate({
            "left": "-80px"
        }, 50);
    });
    $("#rightArr").mouseenter(function () {
        $(this).animate({
            "right": "-83px"
        }, 100);
    });
    $("#rightArr").mouseout(function () {
        $(this).animate({
            "right": "-80px"
        }, 50);
    });
    //轮播图
    var mainSlider = document.getElementById("mainSlider");
    var slid = document.getElementById("slid");
    var leftArr = document.getElementById("leftArr");
    var rightArr = document.getElementById("rightArr");
    var imgs = slid.children;
    var imgWidth = mainSlider.offsetWidth;
    //动态生成最后一张图片
    var lastImg = imgs[0].cloneNode(true);
    slid.appendChild(lastImg);
    //点击右箭头  图片向左移动
    var pic = 0;

    rightArr.onclick = function () {
        play();
    }
    leftArr.onclick = function () {
        if (pic === 0) {
            slid.style.left = -(imgs.length - 1) * imgWidth + "px";
            pic = imgs.length - 1;
        }
        pic--;
        var target = -pic * imgWidth;
        animate(slid, target);
    }
    var timer = setInterval(play, 2000);

    function play() {
        if (pic === imgs.length - 1) {
            slid.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(slid, target);
    }


    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 1000;
            step = leader < target ? step : -step;
            if (Math.abs(leader - target) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }

    //点击武器 显示相应弹窗
    $(".wuqi .wuqiku img").eq(0).click(function () {
        $(".tc1").css("display","block");
        $(".fade").css("display", "block");
    });
    $(".wuqi .wuqiku img").eq(1).click(function () {
        $(".tc2").css("display","block");
        $(".fade").css("display", "block");
    });
    $(".wuqi .wuqiku img").eq(2).click(function () {
        $(".tc3").css("display","block");
        $(".fade").css("display", "block");
    });
    $(".wuqi .wuqiku img").eq(3).click(function () {
        $(".tc4").css("display","block");
        $(".fade").css("display", "block");
    });
    //点击关闭按钮  弹窗关闭
    $(".tc1 .aClose").click(function () {
        $(".tc1").css("display","none");
        $(".fade").css("display", "none");
    })
    $(".tc2 .aClose").click(function () {
        $(".tc2").css("display","none");
        $(".fade").css("display", "none");
    });
    $(".tc3 .aClose").click(function () {
        $(".tc3").css("display","none");
        $(".fade").css("display", "none");
    });
    $(".tc4 .aClose").click(function () {
        $(".tc4").css("display","none");
        $(".fade").css("display", "none");
    });


}
