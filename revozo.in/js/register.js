$(window).load(function(){

	
		$('#loade').css("opacity","1");
	var flag=0;
	 $('.container').animate({backgroundColor: "#fff"}, 5000);
	 $('#rev').css({
		 "top":($(document).height())/2-70,
		 "left":($(document).width())/2-221,
		 "opacity":1
		 });
	
 	 $('#eventd').css({
		 "top":($(document).height())/2-270,
		 "left":($(document).width())/2-350,
		 "opacity":0
		 });
	 $('#event1').css({
		 "top":($(document).height())/2-120,
		 "opacity":0
		 });
	
	 $('#event2').css({
		 "top":($(document).height())/2-120,
		 "opacity":0
		 });
	
		var centerl= ($(document).width())/2;
		var centert= ($(document).height())/2+100;
		 
		 
  function event_show(){
	
		   $('#event1').animate({left:100},2000);
  
    $('#event2').animate({right:100},2000,function(){
		  $('#eventd').css("display","inline").animate({opacity:1},3000);
		
	});
	
		
	  
  }
  
    $('#event1').animate({left:centerl-270,opacity:1},3000);
  
    $('#event2').animate({right:centerl-270,opacity:1},3000);
	

	 
	 $('#event1').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes1').css("display","inline").animate({opacity:1},4000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes1').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
	
		 
		 }
		 });
		 
		  $('#event2').click(function(){
		
		 if(flag==0)
		 {
		event_show(); $('#eventdes2').css("display","inline").animate({opacity:1},4000);flag=1;
		 }
		 else
		 {
		 
		   $('#eventdes2').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		
		 
		 }
		 
		 });
		 
		 
		 
		 
		 
		 $('.twitter-bird').hover(function(){
			 
			 $('#tweet').css({'left':$('.twitter-bird').position().left+65,
		  'top':$('.twitter-bird').position().top-35}).animate({opacity:1},500);
			 
		 },function(){
			  $('#tweet').animate({opacity:0},500);
			 
		 });
		
		
		
		
		
		
		
		
		
		});
	