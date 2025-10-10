// $(function(){
    $('.m_menu li ul').css('display','none');
    // $('.sub').css('display','none');
    // $('.sub').hide(); //똑같은 내용

    // $('.sub').eq(0).show(); //첫번째.sub만 보여라
    //$('.m_menu li:nth-child(1) ul').css('display','block');
    //$('.m_menu li:nth-child(1) ul').show();
    //$('.m_menu li:eq(0) ul').show();
    //$('.m_menu li:first ul').show();

    // $('.m_menu>li>a'/*회사소개 제품소개 등등*/).click(function(){
    //     var status = $(this).next('.sub').css('display'); //클릭한 a태그 담에 있는 요소중 클래스가 sub인 요소의 display속성값을 가져와서
    //     // alert(status); //.sub가 다 닫혀있어서 none 출력됨 (block: 현재 sub가 열린 상태)
    //     if(status === 'none'){ 
    //         $(this).next('.sub').slideDown();
    //     }
    // });
     $('.m_menu>li>a').click(function(){
        var status = $(this).next('.sub').css('display'); //next→ 선택한 요소의 바로 다음에 위치한 형제 요소를 선택한다.
        // alert(status);
        if(status === 'none'){
            $('.sub').slideUp(); //재클릭할 때 열려있는.sub가 닫히게
            $(this).next('.sub').slideDown();
        }else{
            $('.sub').slideUp(); //열려있는 .sub를 클릭하면 닫히게
        }
        return false; //#(셀프링크, 누르면 오른쪽에 있는 바를 맨 위로 올리는 특징있음), 못 움직이게 a링크금지
        /* 다른방법: .click(function(e){e.preventDefault(); */
    });

