// github user finder example

function getGithubInfo(username) {
	var response = new XMLHttpRequest();
	// console.log(username);
	response.open("GET", "https://api.github.com/users/" + username, true);
	// console.log(response);
	// response.send();
	// console.log(response);
	response.onreadystatechange=function() {
		if (response.readyState==4 && response.status==200) {
			return response;
		}
	}
}


//IGNORE THIS FOR NOW
	// 	function(data) {
	// 	response = data;
	// 	showUser(data);
	// });
	// return response
// }

function showUser(user) {
	$("#profile h2").append(user.login + " is Github user #" + user.id);
	$("#profile .avatar").append("<img src='" + user.avatar_url + "' />");
}

$(document).ready(function() {
	$(document).on('keypress', '#username', function(e) {
		if (e.which === 13) {
			var person = getGithubInfo($('#username').val());
			console.log(person);
			showUser(JSON.parse(person.responseText));
		}
	});
});