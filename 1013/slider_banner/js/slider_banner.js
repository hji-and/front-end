$(function(){
    var visual = $('#brandVisual > ul > li'); //큰 사진
    var button = $('#buttonList > li'); //pager버튼
    var current = 0; //현재 사진
    var id;
    var i;
    
    button.click(function(){
        i = $(this).index(); //전역번수 선언했으면 여기에 var재선언X
        // alert(i);
        button.removeClass('on');
        button.eq(i).addClass('on');
        move();
        return false;
    });


    function timer(){
        id = setInterval(function(){
            var n = current + 1;
            if(n === 3){n = 0;}
            
            button.eq(n).trigger('click');
            //컴퓨터가 1씩 증가하면서 버튼을 강제로 클릭한다.

        },3000);
    }
    timer();


    function move(){
        if(current == i) return;
        //현재 활성화된(검정) 버튼과 클릭한 버튼이 같으면, 빠져나간다.
        
        var cur = visual.eq(current); //현재 머물러 있는 큰사진(처음엔 인덱스0)
        var next = visual.eq(i); //내가 누르는 것
        cur.css('left','0').stop().animate({'left':'-100%'},500);
        next.css('left','100%').stop().animate({'left':'0'},500);

        current = i;
    }

});