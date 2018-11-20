$(function(){


    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 245,
        itemMargin: 4,
        controlNav: false,
        directionNav:true,
        slideshowSpeed: 9000
    });


    // $('.imgslider').flexslider({
    //     animation: "slide",
    //     slideshow: true
    // });



    $('.slideshow').slick({
        infinite: true,
        speed: 300,
        dots: false,
        arrows: false,
        draggable: false,
        autoplay: true
    });

    //
    // $.fn.sliceHeight = function( options ){
    //     function _slice(el){
    //         el.each(function() {
    //             $(this).css('line-height', '');
    //             $(this).css('height', '');
    //         });
    //         if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
    //             var elw = (el.first().hasClass('item') ? el.first().outerWidth() : el.first().parents('.item').outerWidth());
    //             var elsw = el.first().parents('.items').outerWidth();
    //             if(!elsw){
    //                 elsw = el.first().parents('.row').outerWidth();
    //             }
    //             if(elsw && elw){
    //                 options.slice = Math.floor(elsw / elw);
    //             }
    //         }
    //         if(options.slice){
    //             for(var i = 0; i < el.length; i += options.slice){
    //                 $(el.slice(i, i + options.slice)).equalizeHeights(options.outer);
    //             }
    //         }
    //         if(options.lineheight){
    //             var lineheightAdd = parseInt(options.lineheight);
    //             if(isNaN(lineheightAdd)){
    //                 lineheightAdd = 0;
    //             }
    //             el.each(function() {
    //                 $(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
    //             });
    //         }
    //     }
    //
    //     var options = $.extend({
    //         slice: null,
    //         outer: false,
    //         lineheight: false,
    //         autoslicecount: true
    //     }, options);
    //
    //     var el = $(this);
    //     _slice(el);
    //
    //     // BX.addCustomEvent('onWindowResize', function(eventdata) {
    //     // 	ignoreResize.push(true);
    //     // 	_slice(el);
    //     // 	ignoreResize.pop();
    //     // });
    // }

    // CheckFlexSlider = function(){
    //     $('.flexslider:not(.thmb)').each(function(){
    //         var slider = $(this);
    //         slider.resize();
    //         var counts = slider.data('flexslider').vars.counts;
    //         if(typeof(counts) != 'undefined'){
    //             var cnt = getGridSize(counts);
    //             var to0 = (cnt != slider.data('flexslider').vars.minItems || cnt != slider.data('flexslider').vars.maxItems || cnt != slider.data('flexslider').vars.move);
    //             if(to0){
    //                 slider.data('flexslider').vars.minItems = cnt;
    //                 slider.data('flexslider').vars.maxItems = cnt;
    //                 slider.data('flexslider').vars.move = cnt;
    //                 slider.flexslider(0);
    //                 slider.resize();
    //                 slider.resize(); // twise!
    //             }
    //         }
    //     });
    // }

    // InitFlexSlider = function() {
    //     $('.flexslider:not(.thmb):not(.flexslider-init)').each(function(){
    //         var slider = $(this);
    //         var options;
    //         var defaults = {
    //             animationLoop: false,
    //             controlNav: false,
    //             directionNav: true,
    //             animation: "slide"
    //         }
    //         var config = $.extend({}, defaults, options, slider.data('plugin-options'));
    //         if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
    //             config.maxItems =  getGridSize(config.counts);
    //             config.minItems = getGridSize(config.counts);
    //             config.move = getGridSize(config.counts);
    //             config.itemWidth = 200;
    //         }
    //
    //         config.after = config.start = function(slider){
    //             var eventdata = {slider: slider};
    //             BX.onCustomEvent('onSlide', [eventdata]);
    //         }
    //
    //         config.end = function(slider){
    //             var eventdata = {slider: slider};
    //             BX.onCustomEvent('onSlideEnd', [eventdata]);
    //         }
    //
    //         slider.flexslider(config).addClass('flexslider-init');
    //         if(config.controlNav)
    //             slider.addClass('flexslider-control-nav');
    //         if(config.directionNav)
    //             slider.addClass('flexslider-direction-nav');
    //     });
    // }

    // InitFlexSlider();

});
