	
$(document).ready(function(){
	var curPos;
		
	$('.aCase_col').addClass('col-xs-12 col-sm-6 col-md-4');
	
	//topbar-sidebar: Toggle
	/*
	$('#menu-toggle').click(function(e) {
		e.preventDefault();
		$('#wrapper').toggleClass('toggled');
					
		if(!$("#wrapper").hasClass('toggled')){								
			$('#html, body').css({
				'overflow': 'auto',
				'height': 'auto'					
			});				
			
			$('#overlay').remove();
			
			$('.glyphicon-menu-hamburger').css('color', '#FFFFFF');
		}else{		
			
			curPos = $('body').scrollTop();	
			
			$('<div></div>').prependTo('.content').attr('id', 'overlay');
						
			$('html, body').css({
				'overflow': 'hidden',
				'height': '100%'					
			});
						
			$('.glyphicon-menu-hamburger').css('color', '#FF5B49');
		}
	});	*/
	
	// Start: To close sidebar
	/*
	$("#sidebar-wrapper").swipeleft(function() {  
		$('#wrapper').toggleClass('toggled');
		
		$('#html, body').css({
				'overflow': 'auto',
				'height': 'auto'					
		});				
		
		$('#overlay').remove();

		$('body').scrollTop(curPos);
		
		$('.glyphicon-menu-hamburger').css('color', '#FFFFFF');
	});
	*/
	/*
	$(".content").click(function() {  
		if($("#wrapper").hasClass('toggled')){
			$('#wrapper').toggleClass('toggled');
			
			$('#html, body').css({
					'overflow': 'auto',
					'height': 'auto'					
			});				
			
			$('#overlay').remove();
			
			$('body').scrollTop(curPos);	
						
			$('.glyphicon-menu-hamburger').css('color', '#FFFFFF');
		}
	});	
	// End: To close sidebar	
	*/
	
	// Start: To Detail page	
	/*
	$(".aCase_col").click(function(){
		curPos = $('body').scrollTop();			
		$("#cases_row").fadeToggle(function(){
			$("#menu-toggle").hide();
			$('body').scrollTop(0);		
			$(".aCase_details").fadeIn(function(){
				$("#back").show();
			});					
		});			
	
		return ;			
	});

	$("#back").click(function(){
		$("#back").hide();
		$(".aCase_details").fadeOut(function(){
			$("#cases_row").fadeToggle(function(){
				$('body').scrollTop(curPos);					
				$("#menu-toggle").show();
			});
		});					

		return ;			
	});
	
	$("#back_DT").click(function(){			
		$(".aCase_details").fadeOut(function(){
			$("#cases_row").fadeToggle(function(){});			
			$('body').scrollTop(curPos);
		});			

		return ;			
	});
	//End: To Detail page
	*/
			
	$(".aCase_btnList").click(function(){
		if($(this).next("div").is(":visible")) {
			$(this).next("div").slideUp();
			$(this).find('span').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
			$(this).css('background-color','#FFFFFF');
			$(this).css('color','#383846');
			//$(this).next("div").css('background-color','#FFFFFF');
		}else{
			$(this).next("div").slideDown(500);
			$(this).find('span').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			$(this).css('background-color','#383846');
			$(this).css('opacity','0.90');
			$(this).css('color','#ffffff');
			$(this).next("div").css('background-color','#383846');			
		}
	});
	
	//Carousel swipe function
	/* commented out because it's better not to use this on mobile*/
	
	$(".carousel").swiperight(function() {
		$(this).carousel('prev');
	}); 
	$(".carousel").swipeleft(function() {  
		$(this).carousel('next');  
	});  
			
	//$.mobile.loading().hide();
	
	// Datetime Picker //
	$(function () {
		var d = new Date();
		var month = ((d.getMonth() + 1) < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
		var day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
		var year = d.getFullYear();
		
		var tmp_minDate = month.toString() + '-' + day.toString() + '-' + year.toString(); 
		
		if(month < 12){
			var tmp_maxDate = (d.getMonth() + 2).toString()  + '-' + day.toString() + '-' + year.toString();			
		}else {
			var tmp_maxDate = '01'  + '-' + day.toString() + '-' + (d.getFullYear() + 1).toString();			
		}		

		$('#datetimepicker12').datetimepicker({
			inline: true,
			sideBySide: true,						
			format: 'DD-MM-YYYY HH:mm',
			useCurrent: true,
			stepping: 30,
			//minDate: tmp_minDate,
			//maxDate: tmp_maxDate
		});		
	});
	// /Datetime Picker //
});
