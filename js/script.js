$(document).ready(function() {
	//url to retrieve 12 users' data
	var url = 'https://randomuser.me/api/?results=12';
	//function to format display preferences of JSON data retrieved
	function displayEmployees(data) {
		//all needed elements
		var imgL;
		var fullName;
		var email;
		var city;
		var phone;
		var fullAdd;
		var bday;
		//html to be displayed
		var employeeHTML = '<ul>';
	    $.each(data.results, function(i, info) {
	    	//add content to variable
	    	imgL = info.picture.large;
	    	fullName = info.name.first + ' ' + info.name.last;
	    	email = info.email;
	    	city = info.location.city;
	    	phone = info.phone;
	    	fullAdd = info.location.street + ', ' + info.location.state;
	    	bday = info.dob;
	    	//html for employee details
	    	employeeHTML += '<li><div class="contents">';
	    	employeeHTML += '<img src="' + info.picture.medium + '" class="image">';
	    	employeeHTML += '<div class="inner-content"><p class="name"><strong>' + fullName + '</strong></p>';
	    	employeeHTML += '<p class="email">' + email + '</p>';
	    	employeeHTML += '<p class="city">' + city + '</p></div></div></li>';
	    });
	    employeeHTML += '</ul>';
	    //display html on page
	    $('#employee-info').html(employeeHTML);

	    //add click event handler for modal box
    	var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
    	$('li').click(function() {
    		
    		modal.style.display = "block";
    		var modalHTML = '<img src="' + imgL + '" class="modalPic">';
    		$('span').after(modalHTML);
    		
    		$.each(data.results, function(i, info) {
    			//create html that is displayed
	    		
    		});
    		span.onclick = function() {
			    modal.style.display = "none";
			    $('.modalPic').remove();
			}
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			        $('.modalPic').remove();
			    }
			}
    	});
	}
	$.getJSON(url, displayEmployees);
	
});