$(window).load(function(){
	
	$('#loade').css("opacity","1");
	 $('.container').animate({backgroundColor: "#fff"}, 5000);
	 $('#rev').css({
		 "top":($(document).height())/2-70,
		 "left":($(document).width())/2-221,
		 "opacity":1
		 });
		

/*	 function execute() {
		  $('.3u').css('display','none');
		   $('.2u').css('display','none');
  $('.1u').css('display','inline').delay(3000)
  .queue( function(next){ 
    $(this).css('display','none'); 
    next(); 
  });
  $('.2u').css('display','none').delay(3000)
  .queue( function(next){ 
    $(this).css('display','inline');
    next(); 
  });
   $('.3u').css('display','none').delay(6000)
  .queue( function(next){ 
  	 $('.2u').css('display','none');
    $(this).css('display','inline');

    next(); 
  }); 
  execute();
	 }
 execute();*/
    $('.twitter-bird').css({"left":($(document).width())/2+301,"top":($(document).height())/2-50});
	 $('.fb-like').css({"top":($(document).height())/2-200});
		
		$('#logo').css({opacity:1,"top":($(document).height())/2-100,
		 "right":($(document).width())/2+260});		
      $('#cloud').pan({fps: 30, speed: 0.7, dir: 'left', depth: 10});
        $('#cloud3').pan({fps: 30, speed: 0.5, dir: 'left', depth: 50});
               
	 var width=$(document).width();
	var height=$(document).height();
	var wc=width/2;
	wc=wc-30;
	 $('#grassc').css("left",wc+450);
	 $('#grassg').css("left",wc+300);
	 $('#grassr').css("left",wc+130);
	 $('#grassw').css("left",wc-20);
	 $('#grasss').css("left",wc-170);
	  $('#grassa').css("left",wc-320);
	   $('#grass').css("left",wc-470);
	   
	   wc=wc-15;
	    $('#contact').css("left",wc+450);
	 $('#about').css("left",wc+300);
	 $('#gallery').css("left",wc+130);
	 $('#sponsors').css("left",wc-20);
	 $('#register').css("left",wc-170);
	  $('#workshop').css("left",wc-320);
	   $('#event').css("left",wc-470);
	   wc=wc+45;
  
 
	
		
		 $('.twitter-bird').hover(function(){
			 
			 $('#tweet').css({'left':$('.twitter-bird').position().left+65,
		  'top':$('.twitter-bird').position().top-35}).animate({opacity:1},500);
			 
		 },function(){
			  $('#tweet').animate({opacity:0},500);
			 
		 });
		
		
		
		
		
		
		
		
		
		});
	