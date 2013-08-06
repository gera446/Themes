$(function(){
	$('.flexslider').flexslider();
	
	$('.portfolio-1, .portfolio-2, .portfolio-3').isotope({
	  // options
	  itemSelector : '.item',
	  layoutMode : 'fitRows'
	});
});