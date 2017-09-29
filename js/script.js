$(document).ready(function() {
	// $.ajax({
	//   url: 'https://randomuser.me/api/?results=12',
	//   dataType: 'json',
	//   success: function(data) {
	//     console.log(data);
	//   }
	// });

	var url = 'https://randomuser.me/api/?results=12';
	function displayEmployees(data) {
		var employeeHTML = '<ul>';
	    $.each(data.results, function(i, info) {
	    	employeeHTML += '<div class="col">';
	    	employeeHTML += '<img src="' + info.picture.large + '" class="image">';
	    	employeeHTML += '<p class="name">' + info.name.first + info.name.last + '</p>';
	    	employeeHTML += '<p class="email">' + info.email + '</p>';
	    	employeeHTML += '<p class="city">' + info.location.city + '</p></div>';
	    });
	    employeeHTML += '</ul>'
	    $('#employee-info').html(employeeHTML);
	}
	$.getJSON(url, displayEmployees);
});