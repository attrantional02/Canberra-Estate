(function($) {
    'use strict';


    setTimeout(function() {
        $('.realestate-listing-submission-content-form').each(function() {
            var totalSteps = $(this).find('.realestate-listing-submission-form').length;
            var activeIndex = $(this).find('.realestate-listing-submission-form.active').attr('data-countings');
            var progressPercentage = Math.round((activeIndex / totalSteps) * 100);

            $(this).find('.realestate-listing-submission-bar').text(progressPercentage + '%')
            $(this).find('.realestate-listing-submission-bar').css('width', progressPercentage + '%')
        })

    }, 100);



    $(document).on('click', '.realestate-listing-submission-footer .realestate-subission-next', function(e) {
        e.preventDefault();
        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active').next('.realestate-listing-submission-form').addClass('active').prev('.realestate-listing-submission-form.active').removeClass('active');
        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-footer .realestate-subission-back').addClass('active');


        var totalSteps = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form').length;
        var activeIndex = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active').attr('data-countings');
        var progressPercentage = Math.round((activeIndex / totalSteps) * 100);

        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-bar').text(progressPercentage + '%')
        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-bar').css('width', progressPercentage + '%')

        var $activeSection = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active')
        if ($activeSection.is(':last-child')) {
            $(this).addClass('realestate-hide');
            $('.submit-list-tabs-button').removeClass('realestate-hide');
        }
    })

    $(document).on('click', '.realestate-listing-submission-footer .realestate-subission-back', function(e) {
        e.preventDefault();
        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active').prev('.realestate-listing-submission-form').addClass('active').next('.realestate-listing-submission-form.active').removeClass('active');

        var totalSteps = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form').length;
        var activeIndex = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active').attr('data-countings');
        var progressPercentage = Math.round((activeIndex / totalSteps) * 100);

        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-bar').text(progressPercentage + '%')
        $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-bar').css('width', progressPercentage + '%')


        var $activeSection = $(this).closest('.realestate-listing-submission-content-form').find('.realestate-listing-submission-form.active')
        if ($activeSection.is(':first-child')) {
            $(this).removeClass('active');
        }
        $('.realestate-listing-submission-footer .realestate-subission-next').removeClass('realestate-hide');
        $('.submit-list-tabs-button').addClass('realestate-hide');
    })

    $(document).on('change', '#property-maintenance', function(e) {
        e.preventDefault();
        if ($(this).prop('checked')) {
            $(this).closest('.realestate-listing-submission-content-form').find('#property-maintenance-field').slideDown();
        } else {
            $(this).closest('.realestate-listing-submission-content-form').find('#property-maintenance-field').slideUp();
        }
    })

    $(document).on('change', '#fileInput', function(event) {
        const files = event.target.files;
        const $preview = $('#preview');
        var title = $(this).attr('data-featureImage');
        $('.realestate-gallery-title').remove();
        $('.realestate-gallery-preview-item').removeClass('active');
        $preview.prepend('<p class="realestate-gallery-title">' + title + '</p>');
        const supportedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

        $.each(files, function(i, file) {
            const $div = $('<div>').addClass('realestate-gallery-preview-item');
            if (supportedImageTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const $img = $('<img>').attr('src', e.target.result);
                    const $button = $('<button>').html('<i class="fa-solid fa-circle-xmark"></i>').on('click', function() {
                        $div.remove();
                        updateFirstImage();
                    });

                    $div.append($img).append($button).append('<div class="realestate-check-feature-image"><i class="fa-solid fa-circle-check"></i><div>');
                    $preview.append($div);
 
                    if (i === 0) {
                        $('.realestate-item.loop-style1 .real-listings-post-thumbnail img').attr('src', e.target.result);
                        $div.addClass('active');
                    }
                };
                reader.readAsDataURL(file);
            } else {
                const $placeholder = $('<div>').addClass('realestate-gallery-placeholder').text('File');

                const $button = $('<button>').html('<i class="fa-solid fa-circle-xmark"></i>').on('click', function() {
                    $div.remove();
                    updateFirstImage();
                });

                $div.append($placeholder).append($button);
                $preview.append($div);
            }
        });
    });

    $(document).on('click', '.realestate-gallery-preview-item img', function() {
        const imgSrc = $(this).attr('src');
        $('.realestate-gallery-preview-item').removeClass('active');
        $(this).closest('.realestate-gallery-preview-item').addClass('active');
        $('.realestate-item.loop-style1 .real-listings-post-thumbnail img').attr('src', imgSrc);
    });

    function updateFirstImage() {
        const $preview = $('#preview');
        const $firstImage = $preview.find('.realestate-gallery-preview-item img').first();
        const placeholder = $('.realestate-item.loop-style1 .real-listings-post-thumbnail img').data('placeholder');

        if ($firstImage.length > 0) {
            const firstImageUrl = $firstImage.attr('src');
            $('.realestate-item.loop-style1 .real-listings-post-thumbnail img').attr('src', firstImageUrl);

            $firstImage.closest('.realestate-gallery-preview-item').addClass('active');
        } else {
            $('.realestate-item.loop-style1 .real-listings-post-thumbnail img').attr('src', placeholder);
        }
    }




    // live preview 

    $(document).on('keyup', '#listing-price', function() {
        let listingPrice = $(this).val();
        if (listingPrice === '' || listingPrice === null) {
            $('.realestate-item.loop-style1 .real-listings-post-content .post-price h2 span').text('0'); 
        } else {
            $('.realestate-item.loop-style1 .real-listings-post-content .post-price h2 span').text(listingPrice); 
        }
    });
    $(document).on('keyup', '#property-beds', function() {
        $('.realestate-item.loop-style1 .real-listings-post-content .post-details ul li.bed strong').text($(this).val());
    })
    $(document).on('keyup', '#property-baths', function() {
        $('.realestate-item.loop-style1 .real-listings-post-content .post-details ul li.bath strong').text($(this).val());
    })
    $(document).on('keyup', '#floor-area', function() {
        $('.realestate-item.loop-style1 .real-listings-post-content .post-details ul li.sqft strong').text($(this).val());
    })
    $(document).on('keyup', '#property-address', function() {
        $('.realestate-item.loop-style1 .real-listings-post-content .post-location span').text($(this).val());
    })
    $(document).on('change', '#property-transaction-type', function() {
        $('.realestate-item.loop-style1 .real-listings-post-content .realestate-lisitng-for span').text($(this).val());
        $('.real-listings-post-thumbnail .post-for span').text($(this).val());
    })
    $(document).on('keyup', '#price-cut', function() {  
        let price = $(this).val(); 
        if (price === '' || price === null) {
            $('.realestate-item.loop-style1 .position-grid-data .post-for-price span').text('0'); 
        } else {
            $('.realestate-item.loop-style1 .position-grid-data .post-for-price span').text(price); 
        }
    });
    



    $(document).on('click', '.realestate-listing-submission-footer .realestate-subission-submit', function(e) {
        e.preventDefault();
        $(this).closest('.realestate-listing-submission-footer').remove();
        $('.realestate-listing-submission-content-form').remove();
        $('.realestate-after-submit').removeClass('realestate-hide');
    })


    $(document).on('change', '.submit-list-tabs-button #privacy', function(e) {
        e.preventDefault();
        if ($(this).prop('checked')) {
            $(this).closest('.realestate-listing-submission-content-form').find('.realestate-subission-submit').removeClass('disabled');
        } else {
            $(this).closest('.realestate-listing-submission-content-form').find('.realestate-subission-submit').addClass('disabled');
        }
    })

})(jQuery);