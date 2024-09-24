(function($) {
    'use strict';


    var loop_style1_grid = $('.loop-style1-grid-slider'),
        tabs_init_slider = $('.tab-style1 .realestate-property-nav button');



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
    initializeSlick();
    tabs_init_slider.on('click', function() {
        loop_style1_grid.slick('unslick');
        setTimeout(function() {
            initializeSlick();
        }, 200);
    });




    $(document).on( 'mouseenter ' , '.loop-style1 .realestate-post-quick-actions' , function(){
        $(this).closest('.realestate-post-quick-actions').addClass('active');
    })
    $(document).on( 'mouseleave ' , '.loop-style1 .realestate-post-quick-actions' , function(){
        $(this).closest('.realestate-post-quick-actions').removeClass('active');
    })



})(jQuery);