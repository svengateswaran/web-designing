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
		 "left":($(document).width())/2-300,
		 "opacity":0
		 });
	
	var width=$(document).width();
	var height=$(document).height();
	
  function event_show(){
	  
    $('#event1').animate({left:50,opacity:1},3000);
  
   $('#event2').animate({left:50,opacity:1},3000);
  $('#event3').animate({left:50,opacity:1},3000);
	 $('#event4').animate({left:50,opacity:1},3000);
		    $('#event5').animate({right:50,opacity:1},3000);
  
   $('#event6').animate({right:50,opacity:1},3000);
  $('#event7').animate({right:50,opacity:1},3000);
	 $('#event8').animate({right:50,opacity:1},3000);
		 
		  $('#eventd').delay(2500).css("display","inline").animate({opacity:1},3000);
	  
  }
    $('#event1').animate({left:width/4.5,opacity:1},3000);
  
   $('#event2').animate({left:width/2.7,opacity:1},3000);
  $('#event3').animate({left:width/4.5,opacity:1},3000);
	 $('#event4').animate({left:width/2.7,opacity:1},3000);
		    $('#event5').animate({right:width/2.7,opacity:1},3000);
  
   $('#event6').animate({right:width/4.5,opacity:1},3000);
  $('#event7').animate({right:width/2.7,opacity:1},3000);
	 $('#event8').animate({right:width/4.5,opacity:1},3000);
	 
	 
	 $('#event1').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes1').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes1').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		 
		  $('#event2').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes2').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes2').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		  $('#event3').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes3').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes3').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		  $('#event4').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes4').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes4').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		  $('#event5').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes5').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes5').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		  $('#event6').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes6').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes6').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		 
		  $('#event7').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes7').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes7').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes1').css({'opacity':0,'display':'none'});
		 $('#eventdes8').css({'opacity':0,'display':'none'});
			   
		 }
		 });
		 
		  $('#event8').click(function(){
		
		 if(flag==0)
		{event_show(); $('#eventdes8').css("display","inline").animate({opacity:1},1000);
		flag=1;}
		 else
		 {
		
		   $('#eventdes8').css("display","inline").animate({opacity:1},1000);
		 $('#eventdes2').css({'opacity':0,'display':'none'});
		 $('#eventdes3').css({'opacity':0,'display':'none'});
		 $('#eventdes4').css({'opacity':0,'display':'none'});
		 $('#eventdes5').css({'opacity':0,'display':'none'});
		 $('#eventdes6').css({'opacity':0,'display':'none'});
		 $('#eventdes7').css({'opacity':0,'display':'none'});
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
	