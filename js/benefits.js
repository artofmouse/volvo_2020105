var Benefits = (function(){

    function init(){
        eventListener();
    }

    function eventListener(){

        $('.detail_group_area .title_box a').on('click',function(){

            var m_$answerBox = $('.txt_box');

            if($(this).hasClass('on')) {
                $(".detail_group_area .title_box a").removeClass('on');
                m_$answerBox.slideUp();
            } else {
                $(".detail_group_area .title_box a").removeClass('on');
                $(this).addClass('on');
                m_$answerBox.slideUp();
                $(this).parent().next('.txt_box').slideDown();
            }
        });

    }

    init();
})();
