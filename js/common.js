$("document").ready(function () {
    //attr 현재속성

    $(".tab_content").hide();
    $(".tab_content").eq(0).show();


    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active")
        $(this).addClass("active")
        $(".tab_content").hide();
        var tabid = $(this).attr("rel");
        $("#" + tabid).fadeIn();
    })
});

// $(function () {
//     $(".btn_event").click(function () {
//         $(".event1_txt_box").css("display", "block");
//         $(".detail_group_area .event1_title_box a").addClass('on');
//     });
// });
$(function () {
    $("#btn_event1").click(function () {
        console.log('123')
        $(".event1_arrow").toggleClass('on');
        $(".event1_txt_box").toggleClass('on');
    });
    $("#btn_event2").click(function () {
        console.log('123')
        $(".event2_arrow").toggleClass('on');
        $(".event2_txt_box").toggleClass('on');
    });
});
// $(function () {
//     var clipboard = new ClipboardJS('.hashtag_copy');
//     clipboard.on('success', function (e) {
//         alert('해시태그가 복사되었습니다.');
//     });

// });
