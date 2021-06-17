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

    $(window).scroll(function(){
        if($(document).scrollTop() > 30) {
            $('.header').addClass('header--bg');
        } else {
            $('.header').removeClass('header--bg');
        }
    });

    $('.menu__link, .logo').on('click', function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
    });


    var wow = new WOW(
        {
          boxClass:     'wow',     
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
    var config = {
        controls: {
            scope: 'local'
        },
        animation: {
            duration: 700,
            effects: 'stagger(34ms) rotateZ(20deg) translateY(0) fade scale(0.41)',
            easing: 'ease'
        }
    };
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
    mixer2.filter('.category-a');
    
});