$('#login').click(function(){
	var string = $('#username').val();
	$.get('php/reverse.php', {input: string}, function(data){
		$('#feedback').text(data);
	});
});