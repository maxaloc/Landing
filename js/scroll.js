$( document ).ready(function() {

	$(".loader").fadeOut("1000");

	$("a").click(function(){
    	$('html, body').animate({
    	    scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
	});

});