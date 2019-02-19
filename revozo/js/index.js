$(window).load(function(){
	
	$("#loading").animate({'opacity': 0}, 500).remove();
$("body").css("background","#009DEC");
$('#loade').css("opacity","1");	
	 $('.container').animate({backgroundColor: "#fff"}, 5000);
	 $('#rev').css({
		 "top":100,
		 "left":100,
		 "opacity":0
		 });
		 $('#light').delay(500).animate({"opacity":1},100).animate({"opacity":0},100,function(){
			 
			 setInterval(makeRain, 500);  $('#light').delay(2000).animate({"opacity":1},100).animate({"opacity":0},100);
		 });
		 
		 
		 	 $('.fb-like').css({"top":($(document).height())/2-200});
		 var width=$(document).width();
	var height=$(document).height();
	var wc=width/2;
	
	$('#light').css("left",wc-350);
	$('#cloud').css("left",wc-500);
	$('.rain').css("left",wc-470);
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
	   
	     var drop = $('.drop').detach();
  function create(){
    var ld=Math.random()*($(document).width()-800)-20;
	var str =Math.floor(Math.random()*2);
    var clone = drop
      .clone()
      .appendTo('.rain')
      .css({
		  'left':$('#cloud').position().left+ld+100,
		  'top':$('#cloud').position().top+150})
	
      .animate(
                {'top': $(document).height()-20,
                'left':$('#cloud').position().left+ld-100},
                 
                Math.random(2000)+2000
               ,function(){
                 $(this).fadeOut(200,function(){$(this).remove();$('.state').text($('.container .drop').length+' Drops');}); 
               });
  }
  
  function makeRain(){
    for(var i=0; i<30; i++){
      setTimeout(create,Math.random()*500);
    }
  }
  
  
 
  
  
  
  
  $('#grass').delay(3500).animate({height:38,opacity:1},1500,function(){
	  $('#grassa').animate({height:38,opacity:1},1500,function(){
	$('#grasss').animate({height:38,opacity:1},1500,function(){
		$('#grassw').animate({height:38,opacity:1},1500,function(){
		$('#grassr').animate({height:38,opacity:1},1500,function(){
			$('#grassg').animate({height:38,opacity:1},1500,function(){  
	  $('#grassc').animate({height:38,opacity:1},1500,function(){
  });
    });  });  });  });  });  });
  $('.rain').delay(12000).animate({opacity: 0}, 500);
/*		 $('#phone').css('top',$(document).height()).delay(2500).animate({'top':$(document).height()-400,opacity:1}, 3000);
 $('#ipad').css('top',$(document).height()).delay(3500).animate({'top':$(document).height()-600,opacity:1}, 3000);
 $('#v').css('top',$(document).height()).delay(4500).animate({'top':$(document).height()-800,opacity:1}, 3000);
  $('#o').css('top',$(document).height()).delay(5500).animate({'top':$(document).height()-1000,opacity:1}, 3000);
 $('#z').css('top',$(document).height()).delay(6500).animate({'top':$(document).height()-1200,opacity:1}, 3000);
  $('#o2').css('top',$(document).height()).delay(7500).animate({'top':$(document).height()-1400,opacity:1}, 3000);*/
	$('#sun').delay(12000).animate({opacity:1,left:300,top:70},3000,function(){
		    $('.twitter-bird').css("opacity",'1').animate({"left":($(document).width())/2+301,"top":($(document).height())/2-70},4000,function(){
				
				
			  $('#fb').animate({left:250,top:270,opacity:1},3000);
				
				});
		
		$('#logo').animate({opacity:1,"top":($(document).height())/2-120,
		 "right":($(document).width())/2+260},4000);		
		$('#rev').animate({opacity:1, "top":($(document).height())/2-90,
		 "left":($(document).width())/2-221},4000,function(){      
		 
		 
		$('#event').animate({height:200},2000);
		$('#workshop').animate({height:170},2000);
	$('#register').animate({height:200},2000);
	$('#sponsors').animate({height:180},2000);
	$('#gallery').animate({height:210},2000);
	$('#about').animate({height:170},2000);
	$('#contact').animate({height:200},2000,function(){
		
		
		$('.social').animate({opacity:1},2000);
		$('#updates').animate({opacity:0.8},2000,function(){
			
			
			$('#sun').animate({opacity:0,left:500},2000,function(){
			$('#it').animate({opacity:1},2000);
			$('#logoa').animate({opacity:1,right:30},2000);
				$('#logok').animate({opacity:1,left:30},2000,function(){
					$('#date').animate({opacity:1},2000);
					$('.fb-like').animate({opacity:1},2000);
					
					});
			});
			
			});
		
		
		
		
		
	});
	
		});});
$('#cloud').animate({left:500}, 12000).animate({opacity: 0,left:100}, 2000, function() {
  $('#cloud1').animate({opacity: 1,top:40},8000,function(){});
			
				$('#cloud3').animate({opacity: 1},10000);
			  $('#cloud1').pan({fps: 30, speed: 0.7, dir: 'left', depth: 10});
      $('#cloud3').pan({fps: 30, speed: 0.5, dir: 'left', depth: 50});
    
				
    });
$('#ground').animate({opacity:1},14000);
$('.container').animate({opacity:0},14000,function(){(this).remove();
	$('.rain').remove();}); 

		
		
		 $('.twitter-bird').hover(function(){
			 
			 $('#tweet').css({'left':$('.twitter-bird').position().left+65,
		  'top':$('.twitter-bird').position().top-35}).animate({opacity:1},500);
			 
		 },function(){
			  $('#tweet').animate({opacity:0},500);
			 
		 });
		
		
		
		
		
		
		
		
		
		});
	