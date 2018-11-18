/* Add here all your JS customizations */
$(window).load(function(){
	// Это мешает форме в контактах.
    //$('.contacts button[type="submit"]').attr('disabled', 'disabled');

	// показ модалки через 3 секунды
    // setTimeout(function(){
    //     $('.btn__special-sale').click();
	// }, 3000)
	
	//показ модалки через 3 секунды, если не наведено на блок с бронированием 
	var g = false;
	$( "#_bn_widget_" )
	.mouseover(function() {
	  g = true;
	//   $( this ).find( "div" ).text('Модальное окно не появится');
	});
	
	
	setTimeout(function(){
	  if(!g){
		 $('.btn__special-sale').click();
	  }
	  
	}, 3000)
});

;$(document).ready(function() {

  /*функция показа модального окна*/
    function showPopup(icon, popup) {
        $(icon).on('click', function (e) {
            e.preventDefault();
            $(popup).addClass('is-visible');
            $('.mfp-bg').addClass('is-visible');
            $('html').css({
                'overflow':'hidden',
                'margin-right':'17px'
            });
            // $('html').addClass('body-popup');
        });
    }

    /*функция закрытия модального окна*/
    $(".popup-close").click(function (e) {
        e.preventDefault();
        $(this).parents('.mfp-wrap').removeClass('is-visible');
        $('.mfp-bg').removeClass('is-visible');
        $('html').css({
            'overflow':'auto',
            'margin-right':'0'
        });
    });

	showPopup(".btn__special-sale", '.popup__special-sale');


	

	/*$(".contacts .c-personal_contact-consent input[type='checkbox']").on('change', function(){
		if($(".contacts .c-personal_contact-consent input[type='checkbox']").prop("checked")){
			$('.contacts .c-personal_contact-consent button[type="submit"]').removeAttr('disabled');
			console.log('ок');
		} else {
		  $('.contacts .c-personal_contact-consent button[type="submit"]').attr('disabled', 'disabled');
		}
	});*/

	$(".contacts .c-personal_consent input[type='checkbox']").on('change', function(){
		if($(".contacts .c-personal_consent input[type='checkbox']").prop("checked")){
			$('.contacts button[type="submit"]').removeAttr('disabled');
			console.log('ок');
		} else {
			$('.contacts button[type="submit"]').attr('disabled', 'disabled');
		}
	});

	$('body').on('change','.popup input[type="checkbox"]', function(){
        if($(".popup input[type='checkbox']").prop("checked")){
			$('.popup button[type="submit"]').removeClass('disabled');
		} else {
			$('.popup button[type="submit"]').addClass('disabled');
		}
    });

	/*$(".popup input[type='checkbox']").on('change', function(){
		console.log('ок');
		if($(".popup input[type='checkbox']").prop("checked")){
			$('.popup button[type="submit"]').removeClass('disabled');
		} else {
			$('.popup button[type="submit"]').addClass('disabled');
		}
	});*/
});
