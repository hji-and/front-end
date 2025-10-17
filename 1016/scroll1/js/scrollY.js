
$(function(){
       

    $(window).scroll(function(){
        
        let sct = $(this).scrollLeft();
        let dLeft = $('.section').offset().left;

        $('#float_div li').stop().animate({left:dLeft+sct},500)

        //nav의 메뉴(li)에 on이 적용되게
        $('.container > div').each(function(i){
         if(sct >= $('.container > div').eq(i).offset().left){ // left와 top값을 낼수있는 offset()메서드
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            $('#float_div li').removeClass('on');
            $('#float_div li').eq(i).addClass('on');
         };
        });
       
        //nav에 fixed 적용
        if(sct >= 300){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }
        
    });

    //nav의 메뉴(li)를 클릭하면 해당하는 섹션으로 이동
    $('nav ul li').click(function(){
        var i = $(this).index(); //li의 index번호
        var offset_l = $('.container > div').eq(i).offset().left;
        $('html,body').stop().animate({scrollLeft:offset_l},1000);
      
        return false;
    });

    // #float_div의 li를 클릭하면 해당하는 섹션으로 이동
    $('#float_div ul li').click(function(){
        var i = $(this).index(); //li의 index번호
        var flo = $('.container > div').eq(i).offset().left;
        console.log(flo);
        $('html,body').stop().animate({scrollLeft:flo},1000); //scrollTop현재스크롤위치정보반환
        
        return false;
    });
    
  
   
});