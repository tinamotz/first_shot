$(document).ready(function() {
	$('#flip').mouseenter(function() {
		$(this).fadeOut('slow');
		this.src = "images/*file*.jpg";
		$(this).fadeIn('slow');
	});
});