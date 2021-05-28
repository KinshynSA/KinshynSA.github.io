/* Javscript Document  */
jQuery.noConflict();
 
	jQuery(document).ready(function(){
	
		
		jQuery(".mainmenu2 ul li:last-child").css({"border-right":"none"});
		jQuery(".mainmenu2 ul li:last-child ul").css({left:"auto", right:20});
		
		//онлайн консультация
		jQuery(window).scroll(function () {
			if(jQuery(window).scrollTop()>460){
				jQuery('.bokovoe').css('top', jQuery(window).scrollTop()-460+'px');
			}
		}); 
		
		//выпадаюче меню
		jQuery(".mainmenu ul li,.mainmenu2 ul li").hover(function(){
		jQuery(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300);
		},function(){
		jQuery(this).find('ul:first').css({visibility: "hidden"});
		});
		
		jQuery('.bokovoe .menu2').mouseover(function()
		{
			jQuery(this).stop().animate({left: '0px'},250);
		}).mouseout(function()
		{
			jQuery(this).stop().animate({left: '-198px'},250);
		}); 
		
		jQuery('.subCategoryContainer:last').addClass('last');
		
		jQuery(window).load(function () {
		  var zzz = jQuery('.formBody #Position').parent();
		  jQuery(zzz).jqTransform();
		  jQuery('.subCategoryContainer div.groupPrimary .catItemIntroText img').each(function() {
			  var parentimg = jQuery(this).closest('.groupPrimary').find('.catItemHeader');
			  jQuery(this).clone().prependTo(parentimg).wrap('<div />');
		  });
		});
		
		jQuery('.zaregestrirovatsa').click(function() {
			jQuery('body').addClass('reg_form');
		});
		
		
		
		
		
		
		
		
		
	// формы
	var next = '';
	jQuery('.formBody input[type=text]').each(function() {
		if(jQuery(this).attr('value') == '') {
			next = jQuery(this).closest('li').find('.formCaption2 span').text();
			jQuery(this).attr('value',next);
		}
	});
	
	jQuery('.formBody input[type=text]').focus(function(){
		next = jQuery(this).closest('li').find('.formCaption2 span').text();
		if((next) && (jQuery(this).attr('value') == next)) {
			jQuery(this).attr('value','');
		}
	}).focusout(function() {
		if(jQuery(this).attr('value') == ''){
			next = jQuery(this).closest('li').find('.formCaption2 span').text();
			if (next) {
				jQuery(this).attr('value',next);
			}
		}
	});	
		
		
		
		
		
		
		
	});