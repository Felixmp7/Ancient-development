$(document).ready(function(){
	$(window).scroll(function(){
		var tamañoDeVentana = $(window).width();

		if(tamañoDeVentana > 800){
			var scroll = $(window).scrollTop(); //Con scroll top accedemos a la posicion
											// del scroll

			$('header .textos').css({
				'transform':'translate(0px,'+ scroll /2 + '%)'
			});

			$('.acercade article').css({
				'transform':'translate(0px, -' + scroll /2.3 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var tamañoDeVentana = $(window).scrollTop();

		if(tamañoDeVentana < 800){
			$('.acercade article').css({
				'transform':'translate(0px, 0px)'
			});
		}
	});
});