
$(function () {
    $("#topBar .topBanner").mouseenter(function () {
        $("#mainTop #bigBanner").show();
        $(this).css("background","white");
    });
    $("#topBar .topBanner").mouseleave(function () {
        $("#mainTop #bigBanner").hide();
        $(this).css("background","url(images/pic9d0b.jpg) no-repeat");
    });
    $("#navTop li").mouseenter(function () {
       $(this).parent().parent().parent().parent().css("background","url(images/nav_bg01png.png) no-repeat");
       $(this).parent().parent().parent().parent().css("opacity",0.7);
       $(this).children().eq(0).css({"background":"url(images/common_z.png) -718px -175px no-repeat","border-top":"5px solid #CFB8A3"});
        $(this).children().eq(0).siblings().stop(true,false).slideDown(200).css("display","block");
   });
    $("#navTop li").mouseleave(function () {
        $(this).parent().parent().parent().parent().css("background","");
        $(this).parent().parent().parent().parent().css("opacity",1);
        $(this).children().eq(0).css({"background":"","border-top":"5px solid #12161F"});
        $(this).children().eq(0).siblings().stop(true,false).slideUp(200);
    });
    $(".gzh .wx").mouseenter(function () {
        $(this).css("background","url(images/common_z.png) -603px -354px no-repeat");
        $("#ewmwx").css({"left":40});
        $("#ewmwx").stop(true,false).slideDown(400);
    });
    $(".gzh .wx").mouseleave(function () {
        $(this).css("background","url(images/common_z.png) -802px -319px no-repeat");
        $("#ewmwx").stop(true,false).slideUp(400);
    });
    $(".gzh .yx").mouseenter(function () {
        $(this).css("background","url(images/common_z.png) -602px -319px no-repeat");
        $("#ewmyx").css("left",80);
        $("#ewmyx").stop(true,false).slideDown(400);
    });
    $(".gzh .yx").mouseleave(function () {
        $(this).css("background","url(images/common_z.png) -636px -354px no-repeat");
        $("#ewmyx").stop(true,false).slideUp(400);
    });
    $(".gzh .wb").mouseenter(function () {
        $(this).css({"background":"url(images/common_z.png) -670px -319px no-repeat","width":"125px"});
    });
    $(".gzh .wb").mouseleave(function () {
        $(this).css("background","url(images/common_z.png) -636px -319px no-repeat").width(30);
    });
    setInterval(function () {
       $("#playIndex img").animate({"width":75,"height":75},500).animate({"width":70,"height":70},500);
    },1000);
    $("#btn1 img").width(104);
    $("#btn1 img").height(104);
    $("#btn1 img").css({"margin":""});
    $("#btn2").width(171);
    $("#btn2").height(107);
    $("#btn2").css("display","inline-block");

    $("#shareHeader .shareul li").mouseenter(function () {
        $(this).css("opacity", .6).siblings().css("opacity", 1);
    });
    $("#shareHeader .shareul li").mouseout(function () {
        $(this).css("opacity", 1);
    });

    var box=document.getElementById("banner-anim");
    var screen=box.children[0];
    var ul=screen.children[0];
    var ulLis=ul.children;
    var ol=screen.children[1];
    var imgWidth = screen.offsetWidth;
    var timer = null;

    for(var i=0;i<ulLis.length;i++){
        var li=document.createElement("li");
        ol.appendChild(li);
    }
    var olLis=ol.children;
    olLis[0].className="current";
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);
    for(var j = 0;j<olLis.length;j++){
        olLis[j].index = j;
        olLis[j].onmouseover = function(){
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            this.className = "current";
            var target = -this.index * imgWidth;
            animate(ul, target);
            square = pic = this.index;
        }
    }
    box.onmouseover = function () {
        clearInterval(timer);
    }
    box.onmouseout = function () {
        timer = setInterval(playNext, 1000);
    }
    var pic = 0;
    var square = 0;
    timer = setInterval(playNext, 1000);
    function playNext() {
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";

    }
    if (pic === 0) {
        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
        pic = ulLis.length - 1;
    }
    pic--;
    var target = -pic * imgWidth;
    animate(ul, target);
    if (square > 0) {
        square--;
    } else {
        square = olLis.length - 1;
    }
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    olLis[square].className = "current";


    function animate(obj,target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var leader = obj.offsetLeft;
            var step = (target-leader)/5;
            step=step>0?Math.ceil(step):Math.floor(step);
            console.log("leader: " + leader + "---step:" + step);
            if(leader!=target){
                leader = leader+step;
                obj.style.left = leader+"px";
            }else{
                clearInterval(obj.timer);
            }
        },15);
    }

    $(".vid-pic1").mouseenter(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.4);
    })
    $(".video-pic").mouseleave(function(){
        $(".video-pic>div").css("opacity",0.4);
    })
    $(".vid-pic2").mouseenter(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.4);
    })
    $(".video-pic").mouseleave(function(){
        $(".video-pic>div").css("opacity",0.4);
    })
    $(".vid-pic3").mouseenter(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.4);
    })
    $(".video-pic").mouseleave(function(){
        $(".video-pic>div").css("opacity",0.4);
    })

});
