$('#twitter-users').on('click', 'a', function() {
	
	$this = $(this);
	console.log($this);
	var userName = $this.attr('id');
	$('#tweets').html('<img src="ajax-loader.gif">');
	//alert(userName);
	$.ajax({
		url: 'twitter-JSON.php',
		data: {
			userName: userName
			//Can you explain what the data part is
		},

		//confused for both of the things on the bottom
		success: function(response) {
			$('#tweets').html(response);
		},
		error: function(err1, err2, err3) {
			console.log(err1, err2, err3);
		}


	});
	$('#tweets').on('click', 'li', function() {
		$(this).addClass('read');
	});


});

