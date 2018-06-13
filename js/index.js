//获取头部
var header = document.querySelector('.header');
//获取轮播图
var slides = document.querySelector('.slides img');
//轮播图的高
var slidesHeight = slides.offsetHeight;
window.onscroll = function () {
//    获取屏幕滚动出去的距离
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // console.log(scrollTop);
    var tmp = scrollTop/slidesHeight;
    if (tmp > 0.9) tmp=0.9;
    header.style.backgroundColor ="rgba(201, 21, 35,"+tmp+")";
}

//轮播图开始

//轮播图结束

//倒计时
//获取倒计时中的所有span
var spans = document.querySelectorAll(".timer>span");
//设置倒计时的总时长
var time = 2;
//计时器
var timeId = setInterval(tiemrs,1000);
function tiemrs() {
    time--;
    // console.log(time);
    //小时
    var hour =parseInt(time/60/60);
    // console.log(hour);
    // 分钟
    var minutes=parseInt(time/60 - hour*60);
    // console.log(minutes);
    //秒
    var seconds = time-hour*60*60-minutes*60;
    // console.log(seconds);
    var hour0 = parseInt(hour/10);
    var hour1 = parseInt(hour%10);

    var minutes0=parseInt(minutes/10);
    var minutes1=parseInt(minutes%10);

    var seconds0=parseInt(seconds/10);
    var seconds1=parseInt(seconds%10);

    spans[0].innerHTML = hour0;
    spans[1].innerHTML = hour1;

    spans[3].innerHTML = minutes0;
    spans[4].innerHTML = minutes1;

    spans[6].innerHTML = seconds0;
    spans[7].innerHTML = seconds1;

    if(time <= 0){
        clearInterval(timeId);
    }
}
