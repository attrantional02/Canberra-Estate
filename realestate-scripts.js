(function ($) {
    'use strict';


    var agent_slider_classic = $('.real-estate-agents-item-slider'),
        real_estate_location = $('.real-estate-location-post-slider'),
        real_estate_blogs = $('.real-estate-blogs-slider');


    function initializeSlider() {
        agent_slider_classic.slick({
            dots: false,
            infinite: false,
            speed: 600,
            slidesToShow: 4,
            arrows: false,
            variableWidth: true,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
    }

    if (agent_slider_classic.length > 0) {
        initializeSlider();
    }

    $('.real-estate-agents .re-agents-slider-arrows ul button').on('click', function () {
        if ($(this).hasClass('active')) { } else {
            if (agent_slider_classic.hasClass('slick-initialized')) {
                agent_slider_classic.slick('unslick');
            }
            setTimeout(function () {
                initializeSlider();
            }, 200)
        }
    });

    function initialize_exploreSlider() {
        var slidesToShow = $('.explore-slider').data('slide');
        if (slidesToShow === undefined) {
            slidesToShow = 3;
        }
        var slidesToShows = $('.explore-slider').data('width');
        if (slidesToShows === undefined) {
            slidesToShows = false;
        }
        $('.explore-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            variableWidth:slidesToShows,
            prevArrow: '<span class="prev-arrowexplore fill-152046" aria-disabled="true" style=""><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 0C31.0278 0 40 8.97219 40 20C40 31.0278 31.0278 40 20 40C8.97219 40 0 31.0278 0 20C0 8.97219 8.97219 0 20 0ZM20 37.5C29.6497 37.5 37.5 29.6497 37.5 20C37.5 10.3503 29.6497 2.5 20 2.5C10.3503 2.5 2.5 10.3503 2.5 20C2.5 29.6497 10.3503 37.5 20 37.5ZM11.6162 19.1163C11.1278 19.6047 11.1278 20.3956 11.6162 20.8838L17.8662 27.1338C18.1103 27.3778 18.4303 27.5 18.75 27.5C19.0697 27.5 19.3897 27.3778 19.6338 27.1338C20.1222 26.6453 20.1222 25.8544 19.6338 25.3662L15.5175 21.25H27.5C28.1903 21.25 28.75 20.6909 28.75 20C28.75 19.3091 28.1903 18.75 27.5 18.75H15.5175L19.6338 14.6337C20.1222 14.1453 20.1222 13.3544 19.6338 12.8663C19.1453 12.3781 18.3544 12.3778 17.8662 12.8663L11.6162 19.1163Z" fill="#AAAAAA"/></svg></span>',
            nextArrow: '<span class="next-arrowexplore fill-152046" aria-disabled="false" style=""><svg width="41" height="40" viewBox="0 0 41 40" fill="none"><path d="M20.7266 0C9.69875 0 0.726562 8.97219 0.726562 20C0.726562 31.0278 9.69875 40 20.7266 40C31.7544 40 40.7266 31.0278 40.7266 20C40.7266 8.97219 31.7544 0 20.7266 0ZM20.7266 37.5C11.0769 37.5 3.22656 29.6497 3.22656 20C3.22656 10.3503 11.0769 2.5 20.7266 2.5C30.3763 2.5 38.2266 10.3503 38.2266 20C38.2266 29.6497 30.3763 37.5 20.7266 37.5ZM29.1103 19.1163C29.5988 19.6047 29.5988 20.3956 29.1103 20.8838L22.8603 27.1338C22.6163 27.3778 22.2962 27.5 21.9766 27.5C21.6569 27.5 21.3369 27.3778 21.0928 27.1338C20.6044 26.6453 20.6044 25.8544 21.0928 25.3662L25.2091 21.25H13.2266C12.5362 21.25 11.9766 20.6909 11.9766 20C11.9766 19.3091 12.5362 18.75 13.2266 18.75H25.2091L21.0928 14.6337C20.6044 14.1453 20.6044 13.3544 21.0928 12.8663C21.5812 12.3781 22.3722 12.3778 22.8603 12.8663L29.1103 19.1163Z" fill="#152046"/></svg></span>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if ($('.explore-slider').length > 0) {
        initialize_exploreSlider();
    }

    $('.realestate-property-element-tabs.tab-style1 .realestate-property-nav button').on('click', function () {

        if ($('.explore-slider').hasClass('slick-initialized')) {
            $('.explore-slider').slick('unslick');
        }
        setTimeout(function () {
            initialize_exploreSlider();
        }, 200)
    });


    $('.realestate-loop-popular-properties-buttons button').on('click', function () {

        if ($('.explore-slider').hasClass('slick-initialized')) {
            $('.explore-slider').slick('unslick');
        }
        setTimeout(function () {
            initialize_exploreSlider();
        }, 200)
    });


    $(document).on('click', '.realestate-classic-navigation-icons button', function () {
        var $this = $(this);
        $('.realestate-popuop-notification').removeClass('active');
        $this.next('.realestate-popuop-notification').addClass('active');
    })


    function movePrevButton() {
        var slickDots = $('.real-estate-location-post-slider  .slick-dots');

        slickDots.each(function () {
            var $this = $(this);
            var slickPrev = $this.closest('.real-estate-location-post-slider').find('.slick-prev');
            var slickNext = $this.closest('.real-estate-location-post-slider').find('.slick-next');

            if (slickNext.length) {
                $this.append(slickNext);
            }
            if (slickPrev.length) {
                $this.prepend(slickPrev);
            }
        });
    }


    if (real_estate_location.length > 0) {
        real_estate_location.slick({
            arrows: true,
            dots: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        });
        movePrevButton();
    }
    if ($('.property-news-listing-button .property-news-listings').length > 0) {
        $('.property-news-listing-button .property-news-listings').slick({
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: $('.property-slick-button .prev-button'),
            nextArrow: $('.property-slick-button .next-button'),
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        });
    }

    if (real_estate_blogs.length > 0) {
        var ver_width = real_estate_blogs.data('width');
        var width = false;
        if (ver_width == true) {
            var width = true;
        }
        real_estate_blogs.slick({
            dots: false,
            infinite: false,
            speed: 600,
            variableWidth: width,
            slidesToShow: 3,
            prevArrow: $('.prev-arrow2'),
            nextArrow: $('.next-arrow2'),
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if ($('.realestate-classic3-section-features').length > 0) {
        $('.realestate-classic3-section-features').slick({
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            slidesToScroll: 1,
            infinite: false,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
            ]
        });
    }
    if ($('.realestate-user-testimonials').length > 0) {
        $('.realestate-user-testimonials').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            variableWidth: true,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
            ]
        });
    }

    if ($('.joining-people-image').length > 0) {
        $('.joining-people-image').slick({
            speed: 500,
            infinite: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.custom-three-next'),
            prevArrow: $('.custom-four-prev'),
        });
    }
    if ($('.help-to-sell-two').length > 0) {
        $('.help-to-sell-two').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

            ]
        });
    }


    if ($('.realestate-cleint-about-rowan-style2-slide').length > 0) {
        $('.realestate-cleint-about-rowan-style2-slide').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            variableWidth: true,
            slidesToScroll: 2,
            autoplay: false,
            arrows: true,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }

            ]
        });

        $('.realestate-cleint-about-rowan-style2-slide .slick-dots').each(function () {
            var $this = $(this);
            var slickPrev = $this.closest('.realestate-cleint-about-rowan-style2-slide').find('.slick-prev');
            var slickNext = $this.closest('.realestate-cleint-about-rowan-style2-slide').find('.slick-next');

            if (slickNext.length) {
                $this.append(slickNext);
            }
            if (slickPrev.length) {
                $this.prepend(slickPrev);
            }
        });
    }


    // home 2 types slider 
    function movePrevButton1() {
        var slickDots = $('.apartment-type-slider .slick-dots');

        slickDots.each(function () {
            var $this = $(this);
            var slickPrev = $this.closest('.apartment-type-slider').find('.slick-prev');
            var slickNext = $this.closest('.apartment-type-slider').find('.slick-next');

            if (slickNext.length) {
                $this.append(slickNext);
            }
            if (slickPrev.length) {
                $this.prepend(slickPrev);
            }
        });
    }
    if ($('.apartment-type-slider').length > 0) {
        $('.apartment-type-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false
                }
            }]
        });
        movePrevButton1();
    }


    if ($('.discover-popular-slider').length > 0) {
        $('.discover-popular-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,

            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }


    function movePrevButton2() {
        var slickDots = $('.slider-our-exclusive-agents  .slick-dots');

        slickDots.each(function () {
            var $this = $(this);
            var slickPrev = $this.closest('.slider-our-exclusive-agents').find('.slick-prev');
            var slickNext = $this.closest('.slider-our-exclusive-agents').find('.slick-next');

            if (slickNext.length) {
                $this.append(slickNext);
            }
            if (slickPrev.length) {
                $this.prepend(slickPrev);
            }
        });
    }



    if ($('.slider-our-exclusive-agents').length > 0) {
        $('.slider-our-exclusive-agents').on('init', function (event, slick) {
            updateLeftSideSlides(slick);
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            // Remove class from left-side slides when scrolling to the right
            if (nextSlide > currentSlide) {
                $(slick.$slides[currentSlide]).removeClass('left-side-slide');
            }
            // Remove class from right-side slides before slide change
            $(slick.$slides[currentSlide]).removeClass('right-side-slide');
        }).on('afterChange', function (event, slick, currentSlide) {
            // Add class to left-side slides after slide change
            updateLeftSideSlides(slick);
            // Add class to right-side slides after slide change
            updateRightSideSlides(slick, currentSlide);
        }).slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 8,
            variableWidth:true,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 2500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false
                }
            }]
        });
        movePrevButton2();
    }

    if ($('.main-testimonial-section7-for').length > 0) {
        $('.main-testimonial-section7-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.main-testimonial-section7-nav'
        });

        $('.main-testimonial-section7-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.main-testimonial-section7-for',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }]
        });
    }
    // call libraries
    $('.select2').select2({
        allowClear: true
    });


    if ($('.fancybox').length > 0) {

        Fancybox.bind(".fancybox", {
            groupAll: true,
        });
    }


    if ($('.fancybox-single').length > 0) {
        Fancybox.bind(".fancybox-single", {
            groupAll: false,
        });
    }





    $(document).on('click', '.realestate-list-terms-show', function () {
        var showText = $(this).attr('data-show');
        var lessText = $(this).attr('data-less');
        $(this).closest('.realestate-list-terms-section').find('.realestate-hide').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).find('span').text(lessText);
        } else {
            $(this).find('span').text(showText);
        }
    })




    if ($('.real-estaet-main-container-style3-slider').length > 0) {
        $('.real-estaet-main-container-style3-slider').on('init', function (event, slick) {
            updateLeftSideSlides(slick);
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            // Remove class from left-side slides when scrolling to the right
            if (nextSlide > currentSlide) {
                $(slick.$slides[currentSlide]).removeClass('left-side-slide');
            }
            // Remove class from right-side slides before slide change
            $(slick.$slides[currentSlide]).removeClass('right-side-slide');
        }).on('afterChange', function (event, slick, currentSlide) {
            // Add class to left-side slides after slide change
            updateLeftSideSlides(slick);
            // Add class to right-side slides after slide change
            updateRightSideSlides(slick, currentSlide);
        }).slick({
            dots: false,
            arrows: true,
            slidesToShow: 2,
            infinite: false,
            speed: 600,
            variableWidth: true,
            autoplay: false,
        });
    }

    function updateLeftSideSlides(slick) {
        var currentIndex = slick.currentSlide;
        $(slick.$slides).each(function (index, slide) {
            if (index < currentIndex) {
                $(slide).addClass('left-side-slide');
            } else {
                $(slide).removeClass('left-side-slide');
            }
        });
    }

    function updateRightSideSlides(slick, currentSlide) {
        var totalSlides = slick.$slides.length;
        $(slick.$slides).each(function (index, slide) {
            if (index > currentSlide && index < totalSlides) {
                $(slide).addClass('right-side-slide');
            } else {
                $(slide).removeClass('right-side-slide');
            }
        });
    }


    if ($('.real-estate-gallery-style3-slider').length > 0) {
        $('.real-estate-gallery-style3-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            autoplay: false,
            variableWidth: true,
        });
    }

    // single page js /
    $(document).on('click', '.realestate-dragables-single-tabs a', function () {
        $('.realestate-dragables-single-tabs a').removeClass('active');
        $(this).addClass('active');
    })
    $(function () {
        if ($("#slider-range2").length > 0) {
            $("#slider-range2").slider({
                range: true,
                min: 0,
                max: 900,
                values: [100, 700],
                slide: function (event, ui) {
                    $("#amount-start").text("$" + ui.values[0]);
                    $("#amount-end").text("$" + ui.values[1]);
                }
            });

            $("#amount-start").text("$" + $("#slider-range2").slider("values", 0));
            $("#amount-end").text(" $" + $("#slider-range2").slider("values", 1));
        }
    });

    if ($('.counters').length > 0) {
        $('.counters').countUp();
    }



    // user login form js 
    $(document).on('click', '.realestate-user-logins .realestate-user-logins-group i', function () {
        if ($(this).closest('.realestate-user-logins-group').hasClass('active')) {
            $(this).closest('.realestate-user-logins-group').find('input').attr('type', 'password');
            $(this).closest('.realestate-user-logins-group').removeClass('active');
            $(this).closest('.realestate-user-logins-group').find('i').removeClass('fa-eye');
            $(this).closest('.realestate-user-logins-group').find('i').addClass('fa-eye-slash');
        } else {
            $(this).closest('.realestate-user-logins-group').find('input').attr('type', 'text');
            $(this).closest('.realestate-user-logins-group').addClass('active');
            $(this).closest('.realestate-user-logins-group').find('i').removeClass('fa-eye-slash');
            $(this).closest('.realestate-user-logins-group').find('i').addClass('fa-eye');
        }
    })

    $(document).on('click', '.signup-tabs li', function () {
        var userType = $(this).attr('data-userType');
        $('.realestate-user-logins:not(.login)').hide();
        $('.realestate-user-logins.' + userType).show();
        $('.signup-tabs li').removeClass('active');
        $(this).addClass('active');
    })
    $(document).on('click', '.user-signup-form-triger', function () {
        $('.realestate-login-form-signup').show();
        $(this).closest('.realestate-login-form-signup').hide();
    })
    $(document).on('click', '.user-signup-form-triger,.user-login-form-triger', function () {
        $('.realestate-login-form-signup').show();
        $(this).closest('.realestate-login-form-signup').hide();
    })



    $(document).on('change', '#realestate-plans-toggles', function () {
        if ($(this).prop('checked')) {
            $('.realestate-plans').addClass('realestate-hide');
            $('.realestate-plans.yearly').removeClass('realestate-hide');
        } else {
            $('.realestate-plans').removeClass('realestate-hide');
            $('.realestate-plans.yearly').addClass('realestate-hide');
        }
    })

    $(document).on('change', '.realestate-search-toggle-agent-tabs  input,.agent-tabs input', function () {
        var dataType = $(this).val();
        if (dataType == 'agents') {
            $('.realestate-agent-tabs-agents').removeClass('realestate-hide');
            $('.realestate-agent-tabs-agencies').addClass('realestate-hide');
        } else {
            $('.realestate-agent-tabs-agents').addClass('realestate-hide');
            $('.realestate-agent-tabs-agencies').removeClass('realestate-hide');
        }
    })

    $(document).on('click', '.realestate-faqs-accordians-list li', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('p').slideUp();
        } else {
            $('.realestate-faqs-accordians-list li').removeClass('active');
            $(this).addClass('active');
            $('.realestate-faqs-accordians-list li p').slideUp();
            $(this).find('p').slideDown();
        }
    })

    if ($('.explore-home11-slider').length > 0) {
        $('.explore-home11-slider').on('init', function (event, slick) {
            updateLeftSideSlides(slick);
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            // Remove class from left-side slides when scrolling to the right
            if (nextSlide > currentSlide) {
                $(slick.$slides[currentSlide]).removeClass('left-side-slide');
            }
            // Remove class from right-side slides before slide change
            $(slick.$slides[currentSlide]).removeClass('right-side-slide');
        }).on('afterChange', function (event, slick, currentSlide) {
            // Add class to left-side slides after slide change
            updateLeftSideSlides(slick);
            // Add class to right-side slides after slide change
            updateRightSideSlides(slick, currentSlide);
        }).slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.prev-arrow6'),
            nextArrow: $('.next-arrow6'),

            responsive: [{
                breakpoint: 1550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // Available in many cities 
    if ($('.home11-cities-slider').length > 0) {
        $('.home11-cities-slider').slick({
            arrows: true,
            infinite: true,
            dots: true,
            speed: 600,
            variableWidth: true,
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 1,
            initialSlide: 0,
            prevArrow: $('.prev-arrow-loc'),
            nextArrow: $('.next-arrow-loc'),

            responsive: [{
                breakpoint: 1550,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });

    }


    // Satisfied Dreamwell’s Clients
    if ($('.home11-satisfied-client').length > 0) {
        $('.home11-satisfied-client').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.prev-arrow7'),
            nextArrow: $('.next-arrow7'),

            responsive: [{
                breakpoint: 1550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }



    if ($('.luxury-listings-grids-slider').length > 0) {
        $('.luxury-listings-grids-slider').slick({
            infinite: false,

            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: $('.luxury-realestate-lisitngs-arrows'),
            prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
            nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
            dots: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: false,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }

    if ($('.luxury-listings-grids-2-slider').length > 0) {
        $('.luxury-listings-grids-2-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            appendArrows: $('.luxury-realestate-lisitngs-arrows1'),
            prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
            nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: false,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }
    if ($('.luxury-listings-latest-news-grid-slider').length > 0) {
        $('.luxury-listings-latest-news-grid-slider').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            variableWidth: true,
            appendArrows: $('.luxury-realestate-lisitngs-arrows3'),
            prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
            nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }
    if ($('.luxury-listings-client-testimonials-grids-slider').length > 0) {
        $('.luxury-listings-client-testimonials-grids-slider').slick({
            infinite: false,
            slidesToShow: 3.2,
            slidesToScroll: 1,
            variableWidth: true,
            dots: false,
            appendArrows: $('.luxury-realestate-lisitngs-arrows2'),
            prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
            nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        });
    }
    if ($('.floor-tabs-button .tab-pane.slide').length > 0) {
        $('.floor-tabs-button .tab-pane.slide').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 2.3,
            variableWidth:true,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.grid-post-slide').length > 0) {
        $('.grid-post-slide').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.diff-cate-slider').length > 0) {
        $('.diff-cate-slider').slick({
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    // Find home Anywhere Around the Globe
    if ($('.globe-slider').length > 0) {
        $('.globe-slider').slick({
            infinite: true,
            arrows: true, // Enable arrows
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.prev-arrowglobe', // Use the correct selector for the previous arrow
            nextArrow: '.next-arrowglobe', // Use the correct selector for the next arrow
            variableWidth: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }]
        });
    }
    if ($('.all-discounted-listing').length > 0) {
        $('.all-discounted-listing').slick({
            infinite: false,
            arrows: true, // Enable arrows
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: '<i class="fa-solid fa-angle-left"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right"></i>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }]
        });
    }

    // Recently Listed for Sale by owner (FSBO) 
    if ($('.fsbd-slider').length > 0) {
        $('.fsbd-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.prev-arrowgfsbd',
            nextArrow: '.next-arrowgfsbd',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }


    // Explore Recently Price Reduced
    if ($('.ER-listed-rent-slider').length > 0) {
        $('.ER-listed-rent-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.prev-arrowerpres',
            nextArrow: '.next-arrowerpres',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($('.ER-price-reduced-slider').length > 0) {
        $('.ER-price-reduced-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.prev-arrowerprs',
            nextArrow: '.next-arrowerprs',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($('.reaestate-classic-home-features').length > 0) {
        $(document).on('mouseenter', '.reaestate-classic-home-features', function () {
            $(this).find('.location-last , .location-last1 , .locarion-car2 , .locarion-car1').addClass('fa-beat-fade');
        });
        $(document).on('mouseleave', '.reaestate-classic-home-features', function () {
            $(this).find('.location-last , .location-last1 , .locarion-car2 , .locarion-car1').removeClass('fa-beat-fade');
        });
    }


    $(document).ready(function () {
        var sticky_header = $('.luxury-listings-header');
        if (sticky_header.length > 0) {
            var $window = $(window);
            var sticky_offset = sticky_header.offset().top;

            $window.on('scroll', function () {
                var scroll = $window.scrollTop(),
                    header_height = sticky_header.outerHeight();

                if (scroll >= sticky_offset) {
                    $('html').css('padding-top', header_height);
                    sticky_header.addClass('realestate-is-sticky');
                } else {
                    $('html').css('padding-top', 0);
                    sticky_header.removeClass('realestate-is-sticky');
                }
            });
        }
    });


})(jQuery);