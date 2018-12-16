$(document).ready(function(){


//Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			'top': '0px'
		}, 2000 + (index * 500)); //La animacion va a tardar 2 segundos en empezar (2000)
									// El index lo que quiere decir es que es como
									//un arreglo que empieza en la posicion 0.
	});

	//Efecto Header (solo si la pantalla es mayor a 800px)

	if($(window).width() > 800 ){
		$('header .textos').css({
			opacity:0,
			marginTop:0
		})

		$('header .textos').animate({
			opacity:1,
			marginTop:'-52px'
		}, 2000)
	}

	//Elazar los enlaces con la pagina.

	var acercade = $('#acercade').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 341.70001220703125
		}, 1000);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 1000);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 1000);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 1000);
	});



});