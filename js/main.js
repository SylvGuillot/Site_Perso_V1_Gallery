$(document).ready(function(){
    $('li a').on('click', function(e){
            e.preventDefault(); 
	        var target = $(this).attr('href');
	        $('html, body')
            .stop()
            .animate({scrollTop: $(target).offset().top}, 1000 );
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#menu-toggle").toggleClass("toggledbouton");
    });    
        
    $("#menu-toggle.toggledbouton").click(function(e) {
        e.preventDefault();
        $("#wrapper").removeClass("toggled");
        $("#menu-toggle").toggleClass("toggledbouton2");
    });   
        
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#icon_menu").toggleClass("toggled");
        $("#main_icon1").toggleClass("toggledicone");
        $("#main_icon2").toggleClass("toggledicone");
        $("#main_icon3").toggleClass("toggledicone");
    });
        
                
    $("#icon_menu.toggled").click(function(e) {
        $("#icon_menu").removeClass("toggled");
        $("#main_icon1").toggleClass("normalicone");
        $("#main_icon2").toggleClass("normalicone");
        $("#main_icon3").toggleClass("normalicone");
    });
        
        

    
	$('.animated').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).addClass('onView');
            
            
                $('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
    var pct = '';
    if(percentage == 0){
      pct = Math.floor(this.countNum) + '%';
    }else{
      pct = Math.floor(this.countNum+1) + '%';
    }
    progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});
            
		}
	});
            
});