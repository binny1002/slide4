$(function () {
    let total = $(".panel li").length;
    // console.log(total);

    let i = 0;
  //마지막으로 start()로 함수 호출
    start();
    // function start(){이안으로 함수들 복사}
    function start(){   }
 
    //timer 추가 setInterval(function () { // ===> $(".naxt").on("click",function~
    timer = setInterval(function () {
        // console.log("122");//확인완료!!

        i++;

        if (i == total - 1) {
            $(".panel")
                .stop()
                .animate({ "margin-left": "-2000px" }, function () {
                    $(".panel").css({ "margin-left": 0 });
                });
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");

    
    }, 2000);

    $(".naxt").on("click",function(){
            
    })
});
