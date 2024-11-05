$(function () {
    let total = $(".panel li").length;
    console.log(total);

    let i = 0;

    start();

    function start() {
        timer = setInterval(function () {
            // console.log("122");//확인완료!!

            i++;

            if (i == total - 1) {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": "-2000px" }, function () {
                        $(".panel").css({ "margin-left": 0 });
                    });
                i = 0;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 500 });
            }

            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        }, 2000);
    }

    // ================================//

    $(".naxt").on("click", function () {
        clearInterval(timer);

        i++;
        if (i == total - 1) {
            $(".panel")
                .stop()
                .animate({ "margin -left": "-2000px" }, function () {
                    $(".panel").css({ "margin-left": 0 });
                });
            i = 0;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        start();
    });

    $(".navi li").on("click", function () {
        clearInterval(timer);
        i = $(this).index();
        $(".panel")
            .stop()
            .animate({ "margin-left": -i * 500 });
        $(".navi li").removeClass("on");
        start();
    });

    $(".prev").on("click", function () {
        clearInterval(timer);
        i--;
        if (i < 0) {
            $(".panel").css({ "margin-left": -2000 });
            $(".panel").stop().animate({ "margin-left": -1500 });
            i = 3; // 3번째 이미지로 ?
            

        
//밀리는 느낌 줌 //
// 움직임이 없어야 하니까 animation X아니고 css ㅇ!!! 로 맨 마지막으로 빼야하니까 -2000//
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        start();
    });
});

// ==============필기 =======================///

// $(function () {
//     let total = $(".panel li").length;
//     // console.log(total);

//     let i = 0;

//     //마지막으로 start()로 함수 호출
//     start();
//     // function start(){이 안으로 함수들 복사}
//     function start() {
//         //timer 추가 setInterval(function () {

//         timer = setInterval(function () {
//             // console.log("122");//확인완료!!

//             i++;

//             if (i == total - 1) {
//                 $(".panel")
//                     .stop()
//                     .animate({ "margin-left": "-2000px" }, function () {
//                         $(".panel").css({ "margin-left": 0 });
//                     });
//             } else {
//                 $(".panel")
//                     .stop()
//                     .animate({ "margin-left": -i * 500 });
//             }

//             $(".navi li").removeClass("on");
//             $(".navi li").eq(i).addClass("on");
//         }, 2000);
//     }

//     $(".naxt").on("click", function () {
//         clearInterval(timer);
//     });
// });

//밀리는 느낌 줌 //
// 움직임이 없어야 하니까 animation X아니고 css ㅇ!!! 로 맨 마지막으로 빼야하니까 -2000//

//마직막꺼 나오게 이미지 보이게
