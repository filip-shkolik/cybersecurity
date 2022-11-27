$(document).ready(function () {

    let userAgent = navigator.userAgent.toLowerCase();
    let osSierra = /mac os x 10/gi.test(userAgent);
    let safari10 = /version\/10.*safari/gi.test(userAgent);
    let safari11 = /version\/11.*safari/gi.test(userAgent);
    let safari12 = /version\/12.*safari/gi.test(userAgent);
    let safari13 = /version\/13.*safari/gi.test(userAgent);
    let iphone = /iphone/gi.test(userAgent);
    let ipad = /ipad/gi.test(userAgent);
    let replace = true;

    if (safari11) {
        $('body').addClass('safari-11-support');
    }

    function dynamicAdaptive() {
        if ($(window).width() <= 768 && replace) {
            $('.offer-wr').append($('#ad-replace'))
            replace = false;
        } else if ($(window).width() > 768 && !replace) {
            $('.offer-wr .offer-caption').append($('#ad-replace'));
            replace = true;
        }
    }
    dynamicAdaptive();

    window.addEventListener('resize', function () {
        dynamicAdaptive();//--------- Replace btn-box -on home page -----------

    });

    $('.fb-slider').slick({
        fade: true,
        arrows: false,
        appendDots: $('.fb-slider-dots'),
        dots: true,
        autoplay: true,
        speed: 1000,
        swipe: false,
        responsive: [{

            breakpoint: 1024,
            settings: {
                swipe: true,
            }
        }]
    });

    $('.menu-toggler').on('click', function () {
        $('body').toggleClass('open-menu lock');
    });

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href')
        $('body').removeClass('open-menu lock');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50,
            }, 800);
            return false;
        }
    });


        


    $('.close-popup').click(function(){
        let duration = 300;
        $('.popup').fadeOut(duration, function(){
            $('form').trigger('reset');
        });
        setTimeout(function(){
            $('body').removeClass('lock');
        },duration)


    })
    $('.show-request-popup').click(function(){
        $('.request-popup').fadeIn({
            start: function(){
                $(this).css('display', 'flex');
                $('body').addClass('lock');
            }
        });
    })
    $('.show-book-popup').click(function(){
        $('.book-popup').fadeIn({
            start: function(){
                $(this).css('display', 'flex');
                $('body').addClass('lock');
            }
        });
    })


});
