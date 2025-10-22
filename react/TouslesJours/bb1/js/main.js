$(function(){
    let current = 0;
    let slides = $('.slide');
    let dots = $('.pager-dot');
    let isPlaying = true;
    let interval = null;

    function showSlide(index){
        // slides.removeClass('active');
        // slides.eq(index).addClass('active');
        slides.removeClass('active').eq(index).addClass('active');
        dots.removeClass('active').eq(index).addClass('active');
        current = index;
        //apsolute로 사진 겹쳐놓고 1장씩 (active)투명도와 transit 줘서 슬라이드처럼 보이게
    }

    function nextSlide(){
        let next = (current + 1) % slides.length;
        showSlide(next); //(갯수4인)슬라이드index3(+1)일 때 4나누기4 하면 나머지는 0-> 자동 오토슬라이드 공식
    }
    startAuto();
    //자동슬라이드(재시동)
    function startAuto(){
        interval = setInterval(nextSlide,3000);
        isPlaying=true;
        $('.stop-btn').text('⏸');
    }

    //슬라이드 정지
    function stopAuto(){
        clearInterval(interval);
        isPlaying=false;
        $('.stop-btn').text('▶');
    }
    //일시정지/재생 버튼
    $('.stop-btn').click(function(){
        if(isPlaying/* ==true */){
            stopAuto();
        }else{
            startAuto();
        }

    });

    //dot 클릭이벤트
    dots.click(function(){
        let idx = $(this).index();
        showSlide(idx);
    });
})