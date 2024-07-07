
function mostrar_ocultar_menu(){
    var menu= $('.linkeos');
    var close= $('#close_menu');
        $('#menu-btn').click(function(){
            setTimeout(function(){
                menu.css('display','flex');
                setTimeout(function(){
                menu.css('right','0')
                close.css('display','flex');
                menu.css('transition','right .4s ease')
                },100)
            },100)
            $('body').append('<div class="overlay"></div>');
        })
        $('#close_menu').click(function(){
            menu.css('right','-300px');
            setTimeout(function(){
                menu.css('display','none');
            },500)
            close.css('display','none');
            $('.overlay').remove();
        })
        $(document).click(function(event) {
            if($('.overlay').is(event.target) && menu.css('display')==="flex"){
                menu.css('right','-300px');
                setTimeout(function(){
                    menu.css('display','none');
                },500)
                close.css('display','none');
                $('.overlay').remove();
            }
        })
        $(window).resize(function() {
        if($(window).width() > 1050){
            menu.css('display','flex');
        }})
}
mostrar_ocultar_menu();

function header_scroll(){
    var header = $('header');
    var headerheight= header.outerHeight;
    var scrollpx= 80;
    $(window).on('scroll', function() {
        if($(window).scrollTop()>scrollpx){
            header.addClass('active-scroll');
        }else{
            header.removeClass('active-scroll')
        }
    })
}
header_scroll()

function link_navigation(){
    $('#about-me-link').click(function(){
        $('html, body').animate({
            scrollTop: $('#about-me').offset().top -100
        }, 100);
    })
    $('#skills-link').click(function(){
        $('html, body').animate({
            scrollTop: $('#skills').offset().top -100
        }, 100);
    })
    $('#contact-link').click(function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 100);
    })
    $('#contactg').click(function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 100);
    })
}
link_navigation()

function SwiperSoftSkill() {
    var swiper = new Swiper(".mySwiper.mySwiper.soft-skills", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop:true,
    navigation: {
        nextEl: '.soft-skills .swiper-button-next',
        prevEl: '.soft-skills .swiper-button-prev',
      },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        520: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        750: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
    },
    })
}
    
SwiperSoftSkill()

function SwiperHardSkill() {
    var swiper = new Swiper(".mySwiper.mySwiper.hard-skills", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".hard-skills .swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    navigation: {
        nextEl: '.hard-skills .swiper-button-next',
        prevEl: '.hard-skills .swiper-button-prev',
      },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        390: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        750: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
        1050: {
        slidesPerView:4,
        spaceBetween:0,
        },
        1400: {
        slidesPerView:5,
        spaceBetween:0,
        }
    },
    })
}
    
SwiperHardSkill()
