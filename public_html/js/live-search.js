$(document).ready(function() {

	var SortBy = $('[name=sort]:checked').val();





	$('#customer-name').keyup(function(){

		// If there is nothing in the search bar
		if($(this).val() == '') {
			return;
		}

		// Prepare AJAX
		$.ajax({
			type: 'get',
			url: 'api/live-search.php?query='+$(this).val(),
			data: {
				sort:SortBy
			},

			success:function(dataFromServer){
				
				$('#results').html('');
				for(var i = 0; i < dataFromServer.length; i++){
					
				var html =	'<li>FirstName: '+dataFromServer[i][0]+'</li>'+
							'<li>LastName: '+dataFromServer[i][1]+'</li>'+
							'<li>Email: '+dataFromServer[i][2]+'</li>'+
							'<li>Phone: '+dataFromServer[i][3]+'</li>'
					$('#results').append('</ul>'+html+'</ul>');
				}

			},
			error:function(){
				console.log("Cannot Connect to Server");
			}

		});	
		

	}); 


});