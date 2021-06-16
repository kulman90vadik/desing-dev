$(function(){

    $('.about-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg class="about-slider__icon"><use xlink:href="images/sprite.svg#prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="about-slider__icon"><use xlink:href="images/sprite.svg#next"></use></svg></button>',
        infinite: false
    });

    $('.work-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true
    });




    // var mixer = mixitup('.projects__inner');

    var mixer = mixitup('.projects__inner', {
        animation: {
            effects: 'transateZ(-300px)',
            perspectiveOrigin: '100% 0'
        }
    });

    
});