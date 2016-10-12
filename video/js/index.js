/**
 * Created by 64110 on 2016/6/17.
 */
/**
 * Created by Administrator on 2016/6/17.
 */
window.onload = function(){
    var mh101 = document.getElementById("mh101");
    var blk = document.getElementById("blk");
    var close = document.getElementById("close");
    var btnr = document.getElementById("righty");
    var btnl = document.getElementById("leftz");
    var ul = document.getElementById("photos");
    var lis = ul.children;
    mh101.onclick= function () {
        blk.style.display="block";
    };
    close.onclick= function () {
        blk.style.display="none";
    };
    var pic=0;
    btnr.onclick= function () {
        var imgwidth = blk.offsetWidth;
        if(pic===lis.length-1){
            ul.style.left = 0+"px";
            pic = 0;
        }
        pic++;
        var target=-pic*imgwidth;
        animate(ul,target);
    };
    btnl.onclick= function () {
        var imgwidth = blk.offsetWidth;
        if(pic===0){
            ul.style.left =-(lis.length-1)*imgwidth+"px";
            pic = lis.length-1;
        }
        pic--;
        var target=-pic*imgwidth;
        animate(ul,target);
    };

}
//封装
function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10;
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


$(function () {
    $("#box>.smaphoto>li").mouseenter(function () {
        $(this).css("opacity", 1).siblings("li").css("opacity", 0.4);
    });
    $("#box>.smaphoto>li").mouseleave(function () {
        $(this).css("opacity", 1).siblings("li").css("opacity", 1);
    });

});