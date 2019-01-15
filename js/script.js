$(function(){
	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});
});

$('#elastislide').elastislide();

$(window).load(function(){
	var carouselCaptionWidth = $('#carousel-sidebar .item.active img').width();
	$('#carousel-sidebar img').each(function(){
		$(this).attr('widht', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
	$('.sidebar .banner').css('max-width', carouselCaptionWidth + 'px');
});
