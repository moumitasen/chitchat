// $(document).ready(function() {
	
// // Support for AJAX loaded modal window.
// // Focuses on first input textbox after it loads the window.
// $('[data-toggle="modal"]').click(function(e) {
// 	e.preventDefault();
// 	var url = $(this).attr('href');
// 	if (url.indexOf('#') == 0) {
// 		$(url).modal('open');
// 	} else {
// 		$.get(url, function(data) {
// 			$('<div class="modal hide fade">' + data + '</div>').modal();
// 		}).success(function() { $('input:text:visible:first').focus(); });
// 	}
// });
	
// });

$(document).ready(function(){
	    $('.carousel').carousel({
	      interval: 8000
	    });
	  });






$(document).ready(function() {
    $(".fancybox").fancybox();

    $(".fancybox")
    
    .fancybox({
        type: 'iframe',
        autoSize : false,
        beforeLoad : function() {         
            this.width  = parseInt(this.element.data('fancybox-width'));  
            this.height = parseInt(this.element.data('fancybox-height'));
        }
    });
  });




var z7x4m1;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'moumita', 
'formHash':'z7x4m1', 
'autoResize':true,
'height':'560',
'async':true,
'header':'show'};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { z7x4m1 = new WufooForm();z7x4m1.initialize(options);z7x4m1.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');



