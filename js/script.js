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
	    	userName = info.login.username;
	    	email = info.email;
	    	city = info.location.city;
	    	phone = info.phone;
	    	fullAdd = info.location.street + ', ' + info.location.state;
	    	bday = info.dob;
	    	//html for employee details
	    	employeeHTML += '<li><div class="contents">';
	    	employeeHTML += '<img src="' + info.picture.medium + '" class="image">';
	    	employeeHTML += '<img src="' + imgL + '" class="LargeImage">';
	    	employeeHTML += '<div class="inner-content"><p class="name"><strong>' + fullName + '</strong></p>';
	    	employeeHTML += '<p class="email">' + email + '</p>';
	    	employeeHTML += '<p class="username">' + userName + '</p>';
	    	employeeHTML += '<p class="city">' + city + '</p>';
	    	employeeHTML += '<p class="phone">' + phone + '</p>';
	    	employeeHTML += '<p class="fullAdd">' + fullAdd + '</p>';
	    	employeeHTML += '<p class="bday">' + bday + '</p></div></div></li>';
	    });
	    employeeHTML += '</ul>';
	    //display html on page
	    $('#employee-info').html(employeeHTML);

	    //hide elements I don't want displayed
	    $('.LargeImage').hide();
	    $('.username').hide();
	    $('.phone').hide();
	    $('.fullAdd').hide();
	    $('.bday').hide();


	    //add click event handler for modal box
    	var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
    	$('li').click(function() {
    		
    		modal.style.display = "block";

    		//get variable elements
    		var largeImg = '<img src="' + $(this).find($('.LargeImage')).prop('src') + '" class="largeImg">';
    		var modName = '<p class="modName"><strong>' + $(this).find($('.name')).text() + '</strong></p>';
    		var modEmail = '<p class="modEmail">' + $(this).find($('.email')).text() + '</p>';
    		var modCity = '<p class="modCity">' + $(this).find($('.city')).text() + '</p>';
    		var modPhone = '<p class="modPhone">' + $(this).find($('.phone')).text() + '</p>';
    		var modfullAdd = '<p class="modfullAdd">' + $(this).find($('.fullAdd')).text() + '</p>';

    		//create bday substring
    		var subBday = $(this).find($('.bday')).text().substr(0, 10);
    		var modBday = '<p class="modBday">Birthday: ' + subBday + '</p>';

    		//add modal HTML
    		var modalHTML = '<div class="modHTML">';
    		modalHTML += largeImg;
    		modalHTML += modName;
    		modalHTML += modEmail;
    		modalHTML += modCity;
    		modalHTML += '<hr>';
    		modalHTML += modPhone;
    		modalHTML += modfullAdd;
    		modalHTML += modBday;
    		modalHTML += '</div>';

    		$('span').after(modalHTML);
    		
    		$.each(data.results, function(i, info) {
    			//create html that is displayed
	    		
    		});
    		span.onclick = function() {
			    modal.style.display = "none";
			    $('.modHTML').remove();
			}
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			        $('.modHTML').remove();
			    }
			}
    	});
	}
	$.getJSON(url, displayEmployees);
	
});