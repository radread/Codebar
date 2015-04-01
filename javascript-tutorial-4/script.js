// github user finder example

function getGithubInfo(username) {
	var response = new XMLHttpRequest();
	console.log(username);
	response.onreadystatechange = function() {
		if (response.readyState == 4 && response.status == 200) {
			showUser(JSON.parse(response.responseText));
			console.log(response);
		}
		if (response.readyState == 4 && response.status !== 200) {
			noUser(username);
		}
	}

	response.open("GET", "https://api.github.com/users/" + username, true);
	response.send();
	// console.log(response);
	// response.send();
	// console.log(response);
	// response.onreadystatechange = function() {
	// 	if (response.readyState == 4 && response.status == 200) {
	// 		showUser(JSON.parse(response.responseText));
	// 		console.log(response);
	// 	}
	// }
}

function showUser(user) {
	$("#profile h2").append(user.login + " is Github user #" + user.id);
	$("#profile .avatar").append("<img src='" + user.avatar_url + "' />");
}

function noUser(user) {
	$('#profile h2').append("No such user: " + user);
}

$(document).ready(function() {
	$(document).on('keypress', '#username', function(e) {
		if (e.which === 13) {
			getGithubInfo($('#username').val());
			// console.log(person);
			// showUser(JSON.parse(person.responseText));
		}
	});
});