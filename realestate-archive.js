(function($) {
    'use strict';
    var loop_style1_grid = $('.loop-style1-grid-slider');

    function initializeSlick() {
        if (loop_style1_grid.length > 0) {
            loop_style1_grid.slick({
                dots: true,
                infinite: false,
                arrows: false,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    }

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


    $(document).on('click', '.listing-switcher', function() {
        $('.realestate-archive-loader').show();
        var screenWidth = $(window).width();
        $('.listing-switcher').removeClass('realestate-active-style');
        $(this).addClass('realestate-active-style');
        if ($(this).hasClass('grid-view')) {
            loop_style1_grid.slick('unslick');
            setTimeout(function() {
                initializeSlick();
            }, 200);
            $('.realestate-search-result-output').removeClass('realestate-hide');
            $('.realestate-search-result-output').removeClass('realestate-list');
            $('.realestate-archive-content-map').hide();
            $('.realestate-search-result-output').addClass('realestate-grid');
            $('.realestate-archive-content-maps').removeClass('active');
            if (screenWidth < 980) {
                $('.realestate-archive-content-maps').hide();
            }
        } else if ($(this).hasClass('list-view')) {
            loop_style1_grid.slick('unslick');
            setTimeout(function() {
                initializeSlick();
            }, 200);
            $('.realestate-search-result-output').removeClass('realestate-hide');
            $('.realestate-search-result-output').removeClass('realestate-grid');
            $('.realestate-archive-content-map').hide();
            $('.realestate-archive-content-maps').removeClass('active');
            if (screenWidth < 980) {
                $('.realestate-archive-content-maps').hide();
            }
            $('.realestate-search-result-output').addClass('realestate-list');
        } else if ($(this).hasClass('realestate-archive-map-toggle')) {
            $('.realestate-search-result-output').removeClass('realestate-grid');
            $('.realestate-search-result-output').removeClass('realestate-list');
            $('.realestate-search-result-output').addClass('realestate-hide');
            $('.realestate-archive-content-map').show();
            $('.realestate-archive-content-maps').addClass('active');
            if (screenWidth < 980) { 
                $('.realestate-archive-content-maps').show();
            }
        }
        setTimeout(function() {
            $('.realestate-archive-loader').hide();
        }, 2000)
    })

    $(document).on('click', '.realestate-archive-toggle-Listing-style.archive6', function() {
        $('.realestate-search-result-output').removeClass('realestate-list');
    })
    $(document).on('click', ' .realestate-mobile-filters', function(e) {
        e.preventDefault()
        $('.realestate-search-filters-container , .realestate-close-filters ,.realestate-archive-container-filters-inner .archive-filters').addClass('active');
    })
    $(document).on('click', '.listing-view-layout li', function(e) {
        e.preventDefault()
        $('.listing-view-layout li').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('grid-two')) {
            $('.realestate-archive-content').addClass('two');
            $('.realestate-archive-content').removeClass('three');
        } else {
            $('.realestate-archive-content').removeClass('two');
            $('.realestate-archive-content').addClass('three');
        }
    })

    $(document).on('click', '.realestate-grid-switcher-lists', function(e) {
        e.preventDefault()
        $('.realestate-grid-switcher').toggleClass('active');
        $('.realestate-archive-content').toggleClass('full-width');
    })

    $(document).on('click', '.close-map-buton', function(e) {
        e.preventDefault() 
        $(this).toggleClass('active');
        $('.realestate-archive-content').toggleClass('full-width');
        if($(this).hasClass('active')){
            $(this).find('span').text($(this).attr('data-close-map'));
        }else{
            $(this).find('span').text($(this).attr('data-open-map'));
        }
      
    })

    $(document).on('click', '.realestate-close-filters , .realestate-archive-filter-more', function(e) {
        e.preventDefault();
        $('.realestate-close-filters').removeClass('active');
        $('.realestate-search-filters-container ,.realestate-archive-container-filters-inner .archive-filters').removeClass('active');
    })

    $(document).on('change', '#Only-with-photos', function() {
        $('.realestate-archive-loader').show();
        if ($(this).prop('checked')) {
            $('.realestate-archive-loop').hide();
            $('.realestate-archive-loop.photos').show();
        } else {
            $('.realestate-archive-loop').show();
            loop_style1_grid.slick('unslick');
            setTimeout(function() {
                initializeSlick();
            }, 200);
        }
        setTimeout(function() {
            $('.realestate-archive-loader').hide();
        }, 2000)
    })

    // price range filter  
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 1500,
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
