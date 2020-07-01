$(document).ready(function(){

	$('nav.menu-mobile h2').click(function(){
		var menuItens = $('nav.menu-mobile ul');
		var width = $(window).width();
		if (width <= 768){
			if (menuItens.is(':hidden') == true){
				$('nav.menu-mobile i').removeClass('fa-bars').addClass('fa-times');
				$('body').css('overflow', 'hidden');
				$(menuItens).css('overflow', 'auto');
				$('section.inicio header').css('background-color', '#222');
			}else{
				$('nav.menu-mobile i').removeClass('fa-times').addClass('fa-bars');
				$('body').css('overflow', 'auto');
				$('section.inicio header').css('background', 'none');
			}
		}

		menuItens.slideToggle();

	});

	$(window).resize(function(){
		var menuItens = $('nav.menu-mobile ul');
		var width = $(window).width();
		if (width > 768){
			if (menuItens.is(':hidden') == true){
				$('body').css('overflow', 'auto');
				$('section.inicio header').css('background', 'none');
			}
		}else{
			if (menuItens.is(':hidden') != true){
				$('body').css('overflow', 'hidden');
				$('section.inicio header').css('background-color', '#222');
			}
			
		}
	});

});