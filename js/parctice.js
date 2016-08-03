$(document).ready(function(){

/*	
	var username_default = "Enter username...";
	
	$('input[type="text"]').attr('value',username_default).focus(function(){
		if($(this).val() == username_default){
			$(this).attr('value','');
		}
	});
	$('input[type="text"]').blur(function(){
		if($(this).val() == ''){
			$(this).attr('value', username_default);
		}
	});
*/

	// change input backgroud color when select
	$('input[type="text"]').focusin(function(){
		$(this).css('background-color', '#acfa58');
	});
	$('input[type="text"]').blur(function(){
		$(this).css('background-color', 'white');
	});

	// change font size 
	function change_size(element, size){
		var current_size = parseInt(element.css('font-size'));
		if(size == 'smaller'){
			current_size -= 2;
		}else if(size == 'bigger'){
			current_size += 2;
		}
		element.css('font-size',current_size+'px');
	}
	$('#smaller').click(function(){
		change_size($('p'), 'smaller');
	});
	$('#bigger').click(function(){
		change_size($('p'), 'bigger');
	});
	
	// upload file 
	$('#submit').attr('disabled','disabled');
	$('#file').change(function(){
		$(this).next().removeAttr('disabled');
	}).next().attr('disabled','disabled');
	
	// submit user info
	$('#login_form').submit(function(event){
		event.preventDefault();
		var userinfo = $('#username').val();
		$('#login_feedback').html('your username is'+ userinfo);
	});
	
	// bold when hover a link or para, bind mouseenter and mouseleave action 
	// to function and toggle class
	$('a').bind('mouseenter mouseleave', function(){
		$(this).toggleClass('bold');
	});
	
	// comment box character counting remaining, every time a keyup event happened 
	// in textarea will refresh the remining character var and append to webpage
	var maxComment_lenth = 155;
	$('#textarea_feedback').html(maxComment_lenth + ' words remining.');
	$('textarea').keyup(function(){
		var remining = maxComment_lenth - $('textarea').val().length;
		$('#textarea_feedback').html(remining + ' words remining.');
	});
	
	// hide/show a DIV
	$('#hideshow').bind('click',function(){
		if($('#hideshow').val() == 'Show'){
			$('#hideshow').attr('value','Hide');
		}else{
			$('#hideshow').attr('value','Show');
		}
		$('#textarea_feedback').toggle();
	});
	
	// hover over description
	$('.hover').mousemove(function(e){
		var hovertext = $(this).attr('hovertext');
		$('#hoverdiv').text(hovertext).show();
		$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+10);
	}).mouseout(function(){
		$('#hoverdiv').hide();
	});
	
	// combine each value from text box
	$('#combineb').click(function(){
		var combine_text = '';
		var failed = false;
		// check both text box is filled or not
		$('.combine').each(function(){
			if($(this).val() == ''){
				failed = true;
		}
		});
		// if both box filled then combine their value and print to div
		// else, pop up a alert.
		if(failed == false){
			$('.combine').each(function(){	
				combine_text += ' '+$(this).val();			
			});
			$('#combine_feedback').text(combine_text);
		}else{
			alert('Please enter all information!');
		}		
	});
	
	// slide down effect
	$('#top_message').slideDown(1500);
	
	// slide up effect
	$('#hide_message').click(function(){
		$('#top_message').slideUp(1500);
	});
	
	// Gallery Fading effact
	$('.fadeto').css('opacity','0.4');
	$('.fadeto').mouseover(function(){
		$(this).fadeTo(100, 1);
		$('.fadeto').not(this).fadeTo(100,0.4);
	});
	$('.fadeto').mouseout(function(){
		$('.fadeto').css('opacity','0.4');
	});
	
	// enable check box after scroll to the bottom
	$('#agree').attr('disabled','disabled');
	$('#terms').scroll(function(){
		var textarea_height = $(this).prop("scrollHeight");
		var scroll_height = textarea_height -$(this).innerHeight();
		var scroll_top = $(this).scrollTop();
		
		if(scroll_top == scroll_height){
			$('#agree').removeAttr('disabled');
		}
	});
	
});