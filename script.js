$(document).ready(function() {
	$('.flip').mouseenter(function() {
		$(this).fadeOut('slow');
		var original = this.src;
		this.src = $(this).attr('othersrc');
		$(this).attr('othersrc', original);
		$(this).fadeIn('slow');
	});
	$('.flip').mouseleave(function() {
		$(this).fadeOut('slow');
		var original = $(this).attr('othersrc');
		$(this).attr('othersrc', this.src);
		this.src = original;
		$(this).fadeIn('slow');	
	});
});