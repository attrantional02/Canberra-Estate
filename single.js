(function ($) {
    'use strict';

    // single page js /
    $(document).on('click', '.realestate-dragables-single-tabs a', function () {
        $('.realestate-dragables-single-tabs a').removeClass('active');
        $(this).addClass('active');
    })

    $(document).on('click', '.realestate-list-description', function () {
        var showText = $(this).attr('data-show');
        var lessText = $(this).attr('data-less');
        $(this).closest('.realestate-single-description-content').find('.realestate-single-description').toggleClass('active');
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).find('span').text(lessText);
        } else {
            $(this).find('span').text(showText);
        }
    })


    $(document).ready(function () {
        var sticky_header = $('.realestate-single-target-tabs-sticky');
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
    $('.comment-button .button').on('click', function () {
        var buttonText = $(this).text();
        $(this).closest('.realestate-comment').find('#comment-text').val(buttonText);
    });

    if ($('.realestate-day-selector').length > 0) {
        $('.realestate-day-selector').slick({
            dots: false,
            infinite: false,
            speed: 600,
            slidesToShow: 4,
            arrows: true,
            variableWidth: true,
            slidesToScroll: 1,
            appendArrows: $('.solo-dates-arrows'),
            prevArrow: '<i class="fa-solid fa-angle-left"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        });
    }

    if ($("#element1").length > 0) {
        let jchart1;
        $(function () {
            jchart1 = $("#element1").jChart({
                data: [
                    {
                        value: 250,
                        color: {
                            normal: '#F79009',
                            active: '#F79009',
                        },
                        draw: true, //false
                        push: true, //false
                    },
                    {
                        value: 250,
                        color: {
                            normal: '#6366F1',
                            active: '#6366F1',
                        },
                        draw: true, //false
                        push: true, //false
                    },
                    {
                        value: 250,
                        color: {
                            normal: '#06AED4',
                            active: '#06AED4',
                        },
                        order: 1
                    },
                    {
                        value: 250,
                        color: {
                            normal: '#D0D406',
                            active: '#D0D406',
                        }
                    }
                ],
                appearance: {
                    type: 'donut',
                    subType: 'path',
                    radius: 125 / (2 * Math.PI),
                    baseColor: '#fff0',
                    gap: 0,
                    baseStrokeWidth: 15,
                    // animated: false

                    title: {
                        showSummary: false,
                        summarySegment: 2
                    }
                },
                callbacks: {
                    onSegmentMouseover: function (did, segment) {
                        // console.log(did);
                        // console.log(segment);
                    }
                }
            });

        });
    }
    if ($('.realestate-post-slider').length > 0) {
        $('.realestate-post-slider').slick({
            arrows: false,
            dots: false,
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
    }
    function checkWidth() {
        if ($(window).width() > 990) {
            if ($('.single-realestate-sidebar-top').length > 0) {
                var $sidebar = $('.single-realestate-sidebar-top');
                var $mainContainer = $('.realestate-main-content-contaner');
                var $window = $(window);
                var offset = $sidebar.offset();
                var sidebarWidth = $sidebar.outerWidth();

                $window.scroll(function () {
                    var sidebarHeight = $sidebar.outerHeight();
                    var scrollTop = $window.scrollTop();
                    var mainContainerBottom = $mainContainer.offset().top + $mainContainer.outerHeight();

                    // Check if the sidebar should be sticky
                    if (scrollTop > offset.top) {
                        $sidebar.addClass('sticky');
                        $sidebar.css('width', sidebarWidth + 'px');
                    } else {
                        $sidebar.removeClass('sticky');
                        $sidebar.css('width', '');
                    }

                    // Check if the sidebar is overlapping with the end of the main container
                    if (scrollTop + sidebarHeight > mainContainerBottom) {
                        $sidebar.addClass('footers-section');
                    } else {
                        $sidebar.removeClass('footers-section');
                    }
                });
            }
        } else {
            // Remove the scroll event and reset sidebar styles when screen width is 990px or less
            $(window).off('scroll');
            $('.single-realestate-sidebar-top').removeClass('sticky footers-section').css('width', '');
        }
    }

    checkWidth();
    $(window).resize(checkWidth);

    var parks_gallery = jQuery('.parks-gallery-slider');

    function movePrevButton() {
        var slickDots = $('.parks-gallery-slider  .slick-dots');
        slickDots.each(function () {
            var $this = $(this);
            var slickPrev = $this.closest('.parks-gallery-slider').find('.slick-prev');
            var slickNext = $this.closest('.parks-gallery-slider').find('.slick-next');
            if (slickNext.length) {
                $this.append(slickNext);
            }
            if (slickPrev.length) {
                $this.prepend(slickPrev);
            }
        });
    }
    if (parks_gallery.length > 0) {
        parks_gallery.slick({
            arrows: true,
            dots: true,
            infinite: false,
            speed: 600,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
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
})(jQuery);