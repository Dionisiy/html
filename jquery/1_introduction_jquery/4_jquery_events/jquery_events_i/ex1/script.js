$(document).ready(function(){
	 $('button').click(function(){
		var input =$('input[name=message]').val();	
	 $('#messages').append('<p>' + input +'</p>');
		
	});
});