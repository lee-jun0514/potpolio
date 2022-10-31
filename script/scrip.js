window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
 
var page = 1;
 
var lastPage = $(".content").length;
 
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});




(function( $ ) {
   "use strict";
   $(function() {
       function animated_contents() {
           $(".zt-skill-bar > div ").each(function (i) {
               var $this  = $(this),
                   skills = $this.data('width');

               $this.css({'width' : skills + '%'});

           });
       }
       
       if(jQuery().appear) {
           $('.zt-skill-bar').appear().on('appear', function() {
               animated_contents();
           });
       } else {
           animated_contents();
       }
   });
}(jQuery));









