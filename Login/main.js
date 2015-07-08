function User (name, age, loc) {
	this.name = name;
	this.age = age;
	this.loc = loc;

	this.showInfo = function() {
		console.log("You name is " + this.name + ". You're " + this.age + " years old." +  "And from " + this.loc);
	}
}


/* function getCreds() {
	var username = document.getElementsByName('username'),
		password = document.getElementsByName('password');

	$('#button').click(function(){
		console.log(username.val());
	});
} */

