$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class="slick__btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick__btn slick-prev"></button>',
    });


    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
});

