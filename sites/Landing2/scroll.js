$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  
  // effect - No1
  if(windowScrollTop>60){
    $('.banner h2').css('display','none');
    $('.banner .info').css('display','block');
  }else{
    $('.banner h2').css('display','block');
    $('.banner .info').css('display','none');
  }
  
  // main-block-3
  var AnimationMB3 = function(){
    $('.phone-img').each(
       function(){ 
         $(this).delay(100).animate(
           {top: 0,},1000);}
        );
  };


  // main-block-4
  var AnimationMB4 = function(){
    $('.main-block-4-text').each(
       function(){ 
         $(this).delay(500).animate(
           {margin: '0 0 0 0',},1000);}
        );
  };

  // main-block-5
  var AnimationMB5 = function(){         
    $('.main-block-5-content:eq(0)').delay(500).animate({margin: '0 2% 60px 0'},'slow', function(){
    });
    $('.main-block-5-content:eq(1)').delay(700).animate({margin: '0 2% 60px 0'},'slow', function(){
    });
    $('.main-block-5-content:eq(2)').delay(1100).animate({margin: '0 2% 60px 0'},'slow', function(){
    });
  };

 // main-block-6
  var AnimationMB6 = function(){
    $('.main-block-6-text.flex-block').css('justify-content','space-between');      
    $('.price:eq(0)').delay(300).animate({margin: '40px 0 0 0'},'slow', function(){
    });
    $('.price:eq(1)').delay(400).animate({margin: '40px 0 0 0'},'slow', function(){
    });
    $('.price:eq(2)').delay(500).animate({margin: '40px 0 0 0'},'slow', function(){
    });
    $('.price:eq(3)').delay(600).animate({margin: '40px 0 0 0'},'slow', function(){
    });
  };

  // main-block-7
  var AnimationMB7 = function(){
    $('.img-author').each(
       function(){ 
         $(this).delay(200).animate(
           {margin: '0 0 0 0',opacity: 1},1000);}
        );
  };


  if(windowWidth>990){
    if(windowScrollTop>400){
        AnimationMB3();
    }
    if(windowScrollTop>760){
        AnimationMB4();
    }
    if(windowScrollTop>1110){
        AnimationMB5();
    }
     if(windowScrollTop>1800){
        AnimationMB6();
    }
     if(windowScrollTop>2750){
        AnimationMB7();
    }
  }else if(windowWidth>600){
    if(windowScrollTop>400){
        AnimationMB3();
    }
    if(windowScrollTop>860){
        AnimationMB4();
    }
    if(windowScrollTop>1410){
        AnimationMB5();
    }
     if(windowScrollTop>3500){
        AnimationMB7();
    }
  }
  else{}
});