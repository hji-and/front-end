
$(function(){

    //움직이는 메뉴
    //var f_top = 250px;
    var f_top = $('#float_div').offset().top;
    //alert(f_top); ->250

    $(window).scroll(function(){
        let sct = $(this).scrollTop();

            //움직이는 메뉴
            $('#float_div').stop().animate({top:f_top+sct},300);


            //스크롤 내리면 섹션마다 class효과들이 동작
            $('.s_Top').text(sct);
            if(sct>=450 && sct <= 1000){ //스크롤 450-1000사이
                $('.left1').addClass('on');
            }else{
                $('.left1').removeClass('on');
            }

            if(sct >= 1000 && sct <= 1800){
                $('.right1').addClass('on');
            }else{
                $('.right1').removeClass('on');
            }

            if(sct >= 2900){
                $('.s4_1').addClass('active');
                setTimeout(function(){
                    $('.s4_2').addClass('active');
                },400);
                setTimeout(function(){
                    $('.s4_3').addClass('active');
                },800);
                setTimeout(function(){
                    $('.s4_4').addClass('active');
                },1200);
            }

        //스크롤 내리는 만큼 해당nav의 메뉴(li)에 on이 적용되게
        if(sct >= $('.container > div').eq(0).offset().top){
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(0).addClass('on');}
            if(sct >= $('.container > div').eq(1).offset().top){        
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(1).addClass('on');}
                if(sct >= $('.container > div').eq(2).offset().top){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(2).addClass('on');}
                    if(sct >= $('.container > div').eq(3).offset().top){
                    $('nav ul li').removeClass('on');
                    $('nav ul li').eq(3).addClass('on');}
                        if(sct >= $('.container > div').eq(4).offset().top){
                        $('nav ul li').removeClass('on');
                        $('nav ul li').eq(4).addClass('on');}
        if(sct >= 300){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }


        //스크롤 내리는 만큼 #float_div의 li에 on이 적용되게 **for문**
        // for(var i = 0; i < $('.container > div').length; i++){
        //     if(sct >= $('.container > div').eq(i).offset().top){
        //     $('#float_div li').removeClass('on');
        //     $('#float_div li').eq(i).addClass('on');}
        // }
            // if(sct >= $('.container > div').eq(1).offset().top){        
            // $('#float_div li').removeClass('on');
            // $('#float_div li').eq(1).addClass('on');}
            //     if(sct >= $('.container > div').eq(2).offset().top){
            //     $('#float_div li').removeClass('on');
            //     $('#float_div li').eq(2).addClass('on');}
            //         if(sct >= $('.container > div').eq(3).offset().top){
            //         $('#float_div li').removeClass('on');
            //         $('#float_div li').eq(3).addClass('on');}
            //             if(sct >= $('.container > div').eq(4).offset().top){
            //             $('#float_div li').removeClass('on');
            //             $('#float_div li').eq(4).addClass('on');}
        
        //j쿼리의 each문
        $('.container > div').each(function(i){
            if(sct >= $('.container > div').eq(i).offset().top){
            $('#float_div li').removeClass('on');
            $('#float_div li').eq(i).addClass('on');}
        })
    });

    //nav의 메뉴(li)를 클릭하면 해당하는 섹션으로 이동
    $('nav ul li').click(function(){
        var i = $(this).index(); //li의 index번호
        var offset_t = $('.container > div').eq(i).offset().top;
        $('html,body').stop().animate({scrollTop:offset_t},1000);
        
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');
        return false;
    });

     //#float_div의 li를 클릭하면 해당하는 섹션으로 이동
    $('#float_div li').click(function(){
        var i = $(this).index(); //li의 index번호
        var offset_t = $('.container > div').eq(i).offset().top;
        $('html,body').stop().animate({scrollTop:offset_t},1000); //scrollTop현재스크롤위치정보반환
        return false;
    });



    //플러그인 마우스휠->마우스휠 조금만 내려도 섹션으로 즉시 이동
    $('.container > div').mousewheel(function(event,d){
        console.log(d); //휠 위로 올리면1, 아래로 내리면 -1출력

        if(d>0){//휠 위로 동작감지(1)
            let preValue = $(this).prev().offset().top; //prev선택한 요소의 바로 다음에 위치한 형제 요소를 선택한다.
             $('html,body').stop().animate({scrollTop:preValue},1000,'easeOutBounce');
        }
        if(d<0){//휠 아래로 동작감지(-1)
            let nextValue = $(this).next().offset().top;
             $('html,body').stop().animate({scrollTop:nextValue},1000,'easeOutBounce'); //'easeOutBounce'easing(이징)효과, 크롬에서 "jquery.easing.1.3.js" 검색 -> 제이쿼리 공작소
        }
    });

    //html에 script src 추가 후 사용하는 메소드
    $('#popup').draggable(); //드래그 기능


    /*나중에 pop=no를 넣어 하루동안 저장 예정
    처음에는 pop 변수도 없고 no도 없는 상태*/
    if($.cookie('pop')!='no'){
        $('#popup').show();//쿠키 pop변수에 no가 없다면 팝업 보여줌, display:none이어도 show 적용O
    }
        $('#popup area:eq(0)').click(function(){
            $('#popup').fadeOut('fast'); //닫기버튼 클릭 시 서서히 사라짐, 혹은hide사용하기
        });
            //expires
            $('#popup area:eq(1)').click(function(){
                $.cookie('pop','no',{expires:1});//변수맘대로정하기,'no'나'none'은 전체와 통일, {1=하루동안저장}
                $('#popup').fadeOut('fast'); //닫기버튼 클릭 시 서서히 사라짐, 혹은hide사용하기
                //f12 - application - cookie에서 delete하고 다시 팝업 띄우는 것 가능
            });


    $('#notice_wrap').draggable(); 
    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();//popup변수에 none이 저장됐으면 $('#notice_wrap')를 숨겨라
    }
        
    let chk = $('#expireChk');
        $('.closeBtn').on('click',closePoP);//on메소드로 함수를 만들수있다(funtion(){})X
        
        //방법(1)is
        // function closePoP(){
        //         if(chk.is(':checked')){ //is메소드->chk에 체크가 되어 있으면(has와 비슷)
        //             $.cookie('popup','none',{expires:3});//쿠키popup에 none을 3일동안 가지기
        //         }
        //         $('#notice_wrap').fadeOut();
        // }
        //방법(2)prop
        function closePoP(){
                if(chk.prop('checked')){ //prop메소드->chk 상태인지?
                    $.cookie('popup','none',{expires:3});//쿠키popup에 none을 3일동안 가지기
                }
                $('#notice_wrap').fadeOut();
        }
});