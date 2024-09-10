document.addEventListener('DOMContentLoaded', function() {
    // 첫 번째 요소 카운트 애니메이션
    setTimeout(function() {
        var targetNumber1 = 50000; // 첫 번째 요소의 최종 카운트할 숫자 (50,000)
        var duration1 = 2000; // 애니메이션 기간 (2초)

        var spanElement1 = document.querySelector('#mn_warp_car_wp_txbox_2 span');
        if (spanElement1) {
            var start1 = 0;
            var startTime1 = null;
            var increment1 = Math.ceil(targetNumber1 / (duration1 / 16)); // 고정된 증가량 계산 (약 16ms마다 증가)

            function countUp1(timestamp) {
                if (!startTime1) startTime1 = timestamp;
                var progress1 = timestamp - startTime1;

                if (progress1 < duration1 && start1 < targetNumber1) {
                    start1 += increment1;
                    if (start1 > targetNumber1) {
                        start1 = targetNumber1;
                    }
                    spanElement1.textContent = start1.toLocaleString(); // 숫자 포맷팅
                    requestAnimationFrame(countUp1);
                } else {
                    spanElement1.textContent = targetNumber1.toLocaleString(); // 최종 숫자로 설정
                }
            }

            requestAnimationFrame(countUp1);
        }
    }, 1000);

    // 두 번째 요소 카운트 애니메이션
    setTimeout(function() {
        var targetNumber2 = 1000000; // 두 번째 요소의 최종 카운트할 숫자 (1,000,000)
        var duration2 = 4000; // 애니메이션 기간 (4초)

        var spanElement2 = document.querySelector('#mn_warp_car_wp_txbox_3 span');
        if (spanElement2) {
            var start2 = 0;
            var startTime2 = null;
            var increment2 = Math.ceil(targetNumber2 / (duration2 / 16)); // 고정된 증가량 계산 (약 16ms마다 증가)

            function countUp2(timestamp) {
                if (!startTime2) startTime2 = timestamp;
                var progress2 = timestamp - startTime2;

                if (progress2 < duration2 && start2 < targetNumber2) {
                    start2 += increment2;
                    if (start2 > targetNumber2) {
                        start2 = targetNumber2;
                    }
                    spanElement2.textContent = start2.toLocaleString(); // 숫자 포맷팅
                    requestAnimationFrame(countUp2);
                } else {
                    spanElement2.textContent = targetNumber2.toLocaleString(); // 최종 숫자로 설정
                }
            }

            requestAnimationFrame(countUp2);
        }
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    // 요소 선택
    var carImgWarp = document.querySelector('main #mn_warp #mn_warp_car_wp .car_img_warp');

    // 초기 스타일 설정 (숨김 상태)
    carImgWarp.style.opacity = '0';
    carImgWarp.style.transform = 'translateX(100%)';

    // 1초 뒤에 보이도록 설정
    setTimeout(function() {
        // 트랜지션 효과 추가
        carImgWarp.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        // 보이도록 변경
        carImgWarp.style.opacity = '1';
        carImgWarp.style.transform = 'translateX(0)';
    }, 300); 
});

$(document).ready(function() {
    $('main #mn_warp_car_wp_txbox div:nth-child(1)').delay(500).fadeIn(500);
    $('main #mn_warp_car_wp_txbox div:nth-child(2)').delay(900).fadeIn(500);
    $('main #mn_warp_car_wp_txbox div:nth-child(3)').delay(1300).fadeIn(500);
});

document.addEventListener('DOMContentLoaded', function() {
    // 호버할 요소 선택
    var carImgWarp = document.querySelector('.car_img_warp');
    var city1 = document.querySelector('.city1');
    var city1_1 = document.querySelector('.city1_1');
    var city2 = document.querySelector('.city2');
    var city2_1 = document.querySelector('.city2_1');

    // 호버 시작 시 애니메이션 멈춤
    carImgWarp.addEventListener('mouseenter', function() {
        // 왼쪽 타이어 애니메이션 멈춤
        var tireLeft = document.querySelector('#mn_warp #mn_warp_car_wp .car_img_warp .tire_lt');
        if (tireLeft) tireLeft.style.animationPlayState = 'paused';

        // 오른쪽 타이어 애니메이션 멈춤
        var tireRight = document.querySelector('#mn_warp #mn_warp_car_wp .car_img_warp .tire_rt');
        if (tireRight) tireRight.style.animationPlayState = 'paused';

        // 다른 이미지 애니메이션 멈춤
        if (city1) city1.style.animationPlayState = 'paused';
        if (city1_1) city1_1.style.animationPlayState = 'paused';
        if (city2) city2.style.animationPlayState = 'paused';
        if (city2_1) city2_1.style.animationPlayState = 'paused';
    });

    // 호버 종료 시 애니메이션 다시 실행
    carImgWarp.addEventListener('mouseleave', function() {
        // 왼쪽 타이어 애니메이션 다시 실행
        var tireLeft = document.querySelector('#mn_warp #mn_warp_car_wp .car_img_warp .tire_lt');
        if (tireLeft) tireLeft.style.animationPlayState = 'running';

        // 오른쪽 타이어 애니메이션 다시 실행
        var tireRight = document.querySelector('#mn_warp #mn_warp_car_wp .car_img_warp .tire_rt');
        if (tireRight) tireRight.style.animationPlayState = 'running';

        // 다른 이미지 애니메이션 다시 실행
        if (city1) city1.style.animationPlayState = 'running';
        if (city1_1) city1_1.style.animationPlayState = 'running';
        if (city2) city2.style.animationPlayState = 'running';
        if (city2_1) city2_1.style.animationPlayState = 'running';
    });

  
});

$(document).ready(function() {
    // main 요소 내의 특정 요소에 CSS 효과 적용
    $('main #mn_warp #mn_warp_tx_wp').find('p, h1, h4').css({
        'opacity': 1,
        'transform': 'translateY(0)'
    });

    // main 요소의 높이를 가져옵니다.
    var mainHeight = $('main').height();
    var section2Top = $('#section2').offset().top;
    var section2Height = $('#section2').outerHeight();
    var section3Top = $('#section3').offset().top;
    var section3Height = $('#section3').outerHeight();
    var section4Top = $('#section4').offset().top;
    var section4Height = $('#section4').outerHeight();
    var section5Top = $('#section5').offset().top;
    var section5Height = $('#section5').outerHeight();
    var section6Top = $('#section6').offset().top;
    var section6Height = $('#section6').outerHeight();
    var section7Top = $('#section7').offset().top;
    var section7Height = $('#section7').outerHeight();
    var section8Top = $('#section8').offset().top;
    var section8Height = $('#section8').outerHeight();
    

    // 섹션 4의 5/7 지점 계산
    var section4EnterPos = section4Top + (section4Height * (5/7));
    // 섹션 5의 6/7 지점 계산
    var section5EnterPos = section5Top + (section5Height * (6/7));
    // 섹션 6의 6/7 지점 계산
    var section6EnterPos = section6Top + (section6Height * (6/7));
    // 섹션 7의 6/7 지점 계산
    var section7EnterPos = section7Top + (section7Height * (6/7));

    // 섹션 8의 6/7 지점 계산
    var section8EnterPos = section8Top + (section8Height * (6/7));

    // 스크롤 이벤트를 감지합니다.
    $(window).scroll(function() {
        // 현재 스크롤 위치를 가져옵니다.
        var scrollPos = $(window).scrollTop();

        // mainHeight의 2/3 값을 계산합니다.
        var mainTwoThirds = mainHeight * (2/3);

        // 섹션 2의 6/7 지점 계산
        var section2EnterPos = section2Top + (section2Height * (4/7));

        // 섹션 3의 6/7 지점 계산
        var section3EnterPos = section3Top + (section3Height * (4/7));

          // 섹션 3의 6/7 지점 계산
          var section6EnterPos = section6Top + (section6Height * (4/7));

        // 스크롤 위치가 mainHeight의 2/3 위치 이후일 때 section2 요소에 애니메이션 효과 적용
        if (scrollPos > mainTwoThirds) {
            $('#section2 #innercon1 > div:nth-of-type(1), #section2 #innercon1 > div:nth-of-type(2)').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
            $('#section2 #innercon1 h6').addClass('before-style');
        }

        // 스크롤 위치가 섹션 2의 6/7 지점 이상에 도달했을 때 section3 요소에 애니메이션 효과 적용
        if (scrollPos > section2EnterPos) {
            $('#section3 #innercon1 > div:nth-of-type(1), #section3 #innercon1 > div:nth-of-type(2)').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
        }

        // 스크롤 위치가 섹션 3의 6/7 지점 이상에 도달했을 때 section4 요소에 애니메이션 효과 적용
        if (scrollPos > section3EnterPos) {
            $('#section4 #innercon1 > div:nth-of-type(1), #section4 #innercon1 > div:nth-of-type(2)').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
        }

        // 스크롤 위치가 섹션 4의 5/7 지점 이상에 도달했을 때 section5 요소에 효과 적용
        if (scrollPos > section4EnterPos) {
            $('#section5 #innercon1 > div:nth-of-type(2) > div, #section5 #innercon1 > div:nth-of-type(1) h1').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
            $('#section5 #innercon1 h6').addClass('before-style');
        }

          // 스크롤 위치가 섹션 5의 5/7 지점 이상에 도달했을 때 section6 요소에 효과 적용
          if (scrollPos > section5EnterPos) {
            $('#section6 #innercon1 > div:nth-of-type(2), #section6 #innercon1 > div:nth-of-type(1)').css({
                'opacity': 1,
                'transform': 'translateX(0%)'
            });
            $('#section6 #innercon1 h6').addClass('before-style');
        }

        // 스크롤 위치가 섹션 6의 5/7 지점 이상에 도달했을 때 section7 요소에 효과 적용
        if (scrollPos > section6EnterPos) {
            $('#section7 #innercon1 > div:nth-of-type(2), #section7 #innercon1 > div:nth-of-type(1)').css({
                'opacity': 1,
                'transform': 'scale(1)'
            });
            $('#section7 #innercon1 h6').addClass('before-style');
        }

           // 스크롤 위치가 섹션 7의 5/7 지점 이상에 도달했을 때 section8 요소에 효과 적용
           if (scrollPos > section7EnterPos) {
            $('#section8 #innercon1 > div').css({
                'opacity': 1,
                'transform': 'translateY(0%)'
            });
            $('#section8 #innercon1 h6').addClass('before-style');
        }

       
    });
});

$(document).ready(function() {
    // #section2 요소의 위치 정보를 가져옵니다.
    var section2Offset = $('#section2').offset().top;
    var section5Offset = $('#section5').offset().top;
    var section6Offset = $('#section6').offset().top;
    var section7Offset = $('#section7').offset().top;
    var section8Offset = $('#section8').offset().top;
    var section9Offset = $('#section9').offset().top;

    // 스크롤 이벤트를 감지합니다.
    $(window).scroll(function() {
        // 현재 스크롤 위치를 가져옵니다.
        var scrollPos = $(window).scrollTop();

        // #section2에 들어가면 실행합니다.
        if (scrollPos < section2Offset) {
            $('#nav #menu_wrap ul li').removeClass('circle');
        }
        if (scrollPos >= section2Offset) {
            // #nav #menu_wrap ul li a 요소의 텍스트 색상을 #222로 변경합니다.
            $('#nav #menu_wrap ul li a').css('color', '#222');
            $('#nav_m #menu_wrap ul li a').css('color', '#222');
            $('#nav #logo img').attr('src', 'images/logo_black.png');
            $('#nav_m #logo img').attr('src', '../images/logo_black.png');
            $('#nav_m #hamburger span').css('color', '#222');
            
            $('#nav #store_warp p').css('color', '#222');
            $('#nav #store_warp > div').css('border', '1px dotted #9AA0BF');
            $('#a_st img').attr('src', 'images/apple_black.png');
            $('#nav').css('border-bottom', '1px solid #9AA0BF');
            $('#nav').css('background-color', 'white');

            $('#nav_m').css('border-bottom', '1px solid #9AA0BF');
            $('#nav_m').css('background-color', 'white');

            $('#nav #menu_wrap ul li:nth-of-type(1)').addClass('circle');
            $('#nav #menu_wrap ul li').not(':nth-child(1)').removeClass('circle');

            
            
            
        } else {
            // #section2를 벗어나면 다시 원래 색상으로 변경합니다. (예: 기본 텍스트 색상)
            $('#nav #menu_wrap ul li a').css('color', ''); // 기본 색상으로 변경하려면 빈 문자열을 전달
            $('#nav_m #hamburger span').css('color', '');
            $('#nav_m #menu_wrap ul li a').css('color', ''); //
            $('#nav #logo img').attr('src', 'images/logo_white.png');
            $('#nav_m #logo img').attr('src', '../images/logo_white.png');
            $('#nav #store_warp p').css('color', '');
            $('#a_st img').attr('src', 'images/apple.png');
            $('#nav').css('border-bottom', '');
            $('#nav').css('background-color', '');

            $('#nav_m').css('border-bottom', '');
            $('#nav_m').css('background-color', '');
            

            $('#nav #store_warp > div').css('border', '');

        }

        if (scrollPos >= section5Offset && scrollPos < section6Offset) {
            $('#nav #menu_wrap ul li:nth-of-type(2)').addClass('circle');
            
            $('#nav #menu_wrap ul li').not(':nth-child(2)').removeClass('circle');

        }
        if (scrollPos >= section6Offset && scrollPos < section7Offset) {
            $('#nav #menu_wrap ul li:nth-of-type(3)').addClass('circle');
            $('#nav #menu_wrap ul li').not(':nth-child(3)').removeClass('circle');
            $('#nav #menu_wrap ul li:nth-of-type(3) a').css('color','#16C3D9');
            

      
        }
        if (scrollPos >= section7Offset && scrollPos < section8Offset) {
            $('#nav #menu_wrap ul li').not(':nth-child(4)').removeClass('circle');

            $('#nav #menu_wrap ul li:nth-of-type(4)').addClass('circle');
            $('#nav #menu_wrap ul li:nth-of-type(4) a').css('color','#1ECC8F');
      
   
        }

        if (scrollPos >= section8Offset && scrollPos < section9Offset) {
            $('#nav #menu_wrap ul li').not(':nth-child(5)').removeClass('circle');

            $('#nav #menu_wrap ul li:nth-of-type(5)').addClass('circle');
            $('#nav #menu_wrap ul li:nth-of-type(5) a').css('color','#FDC222');
            $('#nav #menu_wrap ul li:nth-of-type(5) .circle ').css('background-color', '#FDC222');
        }

        if (scrollPos >= section9Offset) {
            $('#nav #menu_wrap ul li').not(':nth-child(6)').removeClass('circle');
            $('#nav #menu_wrap ul li:nth-of-type(6)').addClass('circle');
            $('#nav #menu_wrap ul li:nth-of-type(6) .circle ').css('background-color', '#FDC222');
        }
        
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        
        // 옵션 설정
    
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 간격
        loop: true, // 무한 루프 설정
        autoplay: {
            delay: 3000, // 자동 재생 간격 (ms)
            disableOnInteraction: false // 사용자 상호작용 후에도 자동 재생 유지
        },
        effect: 'coverflow',
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼 클래스
            prevEl: '.swiper-button-prev', // 이전 버튼 클래스
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 기타 옵션들...
    });
});

$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();


    $('#section8 #innercon1 > div').hover(function() {
        // 호버(in) 상태에 대한 처리
        $(this).find('img').css({
            'transform': 'scale(1.1)'
        });
        $(this).find('h4 a').css({
            'text-decoration': 'underline'
        });
    }, function() {
        // 호버(out) 상태에 대한 처리
        $(this).find('img').css({
            'transform': 'scale(1)'  // 원래 크기로 복원
        });
        $(this).find('h4 a').css({
            'text-decoration': 'none'  // 밑줄 제거
        });
    });

    $('.se9_box2_1').hover(
        function() {
            // 호버(in) 상태일 때 실행되는 함수
            $(this).css({
                'background-color': 'transparent',
                'border': '1px solid white'
            });
            $(this).find('p').css('color', 'white'); // p 요소의 텍스트 색상 변경
        },
        function() {
            // 호버(out) 상태일 때 실행되는 함수 (호버 해제 시 원래 스타일로 복원)
            $(this).css({
                'background-color': 'white',
                'border': 'none'
            });
            $(this).find('p').css('color', ''); // 기본 텍스트 색상으로 복원
        }
    );
    $('.se9_box2_2').hover(
        function() {
            // 호버(in) 상태일 때 실행되는 함수
            $(this).css({
                'background-color': 'transparent',
                'border': '1px solid white'
            });
            $(this).find('img').attr('src', 'images/apple.png');
            $(this).find('p').css('color', 'white'); // p 요소의 텍스트 색상 변경
        },
        function() {
            // 호버(out) 상태일 때 실행되는 함수 (호버 해제 시 원래 이미지로 복원)
            $(this).css({
                'background-color': 'white',
                'border': 'none'
            });
            $(this).find('img').attr('src', 'images/apple_black.png');
            $(this).find('p').css('color', ''); // p 요소의 텍스트 색상 변경
        }
    );

    $('.se9_box2_1').click(function() {
 
        window.open('https://play.google.com/store/apps/details?id=com.movv', '_blank');
    });

    $('.se9_box2_2').click(function() {
 
        window.open('https://apps.apple.com/kr/app/movv/id1482366235', '_blank');
    });

    $('#section10 #innercon1 #sc10_top p').hover(
        function() {
            // 호버 시작 시 span 요소 회전 애니메이션
            $(this).find('span').animate({ rotate: '45deg' }, 300);
        },
        function() {
            // 호버 종료 시 span 요소 회전 애니메이션 해제
            $(this).find('span').animate({ rotate: '0deg' }, 300);
        }
    ).click(function() {
        // p 요소 클릭 시 새 창으로 URL 열기
        window.open('https://business.movv.co/', '_blank');
    });

    $('#ft #innercon1 > div:nth-of-type(1) #ft_top_warp2 > div:nth-of-type(3) > div img:nth-of-type(1)').click(function() {
    
        window.open('https://www.youtube.com/channel/UCOUhCNyibSOpRzsOeMgl_Ug', '_blank');
    });
    
    $('#ft #innercon1 > div:nth-of-type(1) #ft_top_warp2 > div:nth-of-type(3) > div img:nth-of-type(2)').click(function() {
      
        window.open('https://www.instagram.com/movv.official/', '_blank');
    });
    $('#ft #innercon1 > div:nth-of-type(1) #ft_top_warp2 > div:nth-of-type(3) > div img:nth-of-type(3)').click(function() {
     
        window.open('https://pf.kakao.com/_kwbUxb/chat', '_blank');
    });
    $('#ft #innercon1 > div:nth-of-type(1) #ft_top_warp2 > div:nth-of-type(3) > div img:nth-of-type(4)').click(function() {
        
        window.open('https://blog.naver.com/movv_official', '_blank');
    });

 
    
    
   
});

$(document).ready(function() {
    $('#container-k #drop_menu').hide(); // 드롭다운 메뉴 숨김

    // 햄버거 아이콘 클릭 시 이벤트 처리
    $('#nav_m').on('click', '#hamburger .mn', function() {
        $('#container-k #drop_menu').slideDown(); // 드롭다운 메뉴를 슬라이드 다운하여 보이게 합니다.
        $('#nav_m #hamburger').html('<span class="material-symbols-rounded close">close</span>'); // 햄버거 아이콘을 닫기 아이콘으로 변경합니다.

        $('#nav_m #hamburger span').css('color','#222')
        $('#nav_m').css('border-bottom', '1px solid #9AA0BF');
        $('#nav_m').css('background-color', 'white');
        $('#nav_m #logo img').attr('src', '../images/logo_black.png');
    });

    // 닫기 아이콘 클릭 시 이벤트 처리
    $('#nav_m').on('click', '.close', function() {
        $('#container-k #drop_menu').slideUp(); // 드롭다운 메뉴를 슬라이드 업하여 숨깁니다.
        $('#nav_m #hamburger').html('<span class="material-symbols-rounded mn">menu</span>'); // 닫기 아이콘을 햄버거 아이콘으로 변경합니다.

        $('#nav_m').css('border-bottom', '');
        $('#nav_m').css('background-color', '');
        $('#nav_m #logo img').attr('src', '../images/logo_white.png');
    });
});

$(document).ready(function() {
    $('#drop_menu li').on('click', function() {
      $('#drop_menu').css('display', 'none');
      $('#nav_m #hamburger').html('<span class="material-symbols-rounded mn">menu</span>'); 
    });
  });
  










 