let windowWidth = $(window).width()

$(function() {
    //появление/скрытие sidebar
    $('.main__toogler').on('click', function(){
        $('.sidebar__content').toggleClass('sidebar__content--active');
        $('.sidebar__colapse').toggleClass('sidebar__colapse--active');
        $('.myboards').toggleClass('myboards--hide');
    })
    $('.sidebar__open').hover(function(){
        $('.main__hint').toggleClass('main__hint--active')  
    })

    //показать/скрыть опции модулей
    $('.module__toggler').on('click', function(){
        $(this).closest('.module').find('.module__options').addClass('module__options--show')  
    })

    //скрывать опции модулей при клике за их пределами
	$(document).mouseup(function (e){
		var div = $(".module__options");
		if (!div.is(e.target)) {
			$('.module__options').removeClass('module__options--show');
		}
	});
})