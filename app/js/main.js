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

    $('.advice__heading').on('click', function(){
        $(this).next('.advice__text').slideToggle();
        $(this).toggleClass('advice__heading--active');
    });



    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
    var config = {
        controls: {
            scope: 'local'
        }
    };
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
    mixer2.filter('.category-a');
    
});