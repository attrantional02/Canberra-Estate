(function($) {
    'use strict';


    $(document).on('click', '.realestate-search-filters-main-list .realestate-show-sub-filters span', function() {
        if ($(this).closest('.realestate-show-sub-filters').hasClass('active')) {} else {
            $(this).closest('.realestate-search-filters-main-list').find('.realestate-show-sub-filters ').removeClass('active');
            $(this).closest('.realestate-search-filters-main-list').find('.realestate-search-filters-sub-list').slideUp();
            $(this).next('.realestate-search-filters-sub-list').slideDown();
            $(this).closest('.realestate-show-sub-filters').addClass('active');
        }
    })


    $(document).on('click', '.realestate-filters-view-more', function() {
            var showText = $(this).attr('data-show');
            var lessText = $(this).attr('data-less');
            $(this).closest('.realestate-search-filters-main-list').find('.realestate-hide').slideToggle();
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $(this).text(lessText);
            } else {
                $(this).text(showText);
            }
        })
        /* HTML: <div class="loader"></div> */


        $(document).ready(function() {
            if ($('.realestate-loop-slider').length > 0) {
                var $slider = $('.realestate-loop-slider').slick({
                    dots: false,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    speed: 1000,
                    touchThreshold: 0,
                     autoplaySpeed:  2000,
            //    cssEase: 'linear', 
                    variableWidth: true, 
                });
        
                $slider.on('mouseenter', function() {
                    $slider.slick('slickPause');
                });
        
                $slider.on('mouseleave', function() {
                    $slider.slick('slickPlay');
                });
            }
        });


    $(document).on('click', '.realestate-mobile-filters', function(e) {
        e.preventDefault()
        $('.realestate-search-filters-container , .realestate-close-filters ,.realestate-archive-container-filters-inner .archive-filters').addClass('active');
    })
    $(document).on('click', '.map-pin-items', function(e) {
        e.preventDefault()
        $('.map-pin-items').removeClass('active');
        $(this).addClass('active');

    })

    $(document).on('click', '.open-filters', function(e) {
        e.preventDefault()
        $('.realestate-archive-content').toggleClass('map-full');
    })

    $(document).on('click', '.realestate-close-filters , .realestate-archive-filter-more', function(e) {
        e.preventDefault();
        $('.realestate-close-filters').removeClass('active');
        $('.realestate-search-filters-container ,.realestate-archive-container-filters-inner .archive-filters').removeClass('active');
    })



    // price range filter  
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 900,
            values: [100, 700],
            slide: function(event, ui) {
                $("#amount-start").text("$" + ui.values[0]);
                $("#amount-end").text("$" + ui.values[1]);
            }
        });
        $("#amount-start").text("$" + $("#slider-range").slider("values", 0));
        $("#amount-end").text(" $" + $("#slider-range").slider("values", 1));
    });

})(jQuery);