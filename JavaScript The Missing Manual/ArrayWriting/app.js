(function() {

	document.title = "Array Writing!";
	var nameEl = document.getElementById("name_list");
	var appendName = '';
	var nameVal = document.getElementById("name_val").value;
	var submit = document.getElementById('submit');

	var names = ["Devin Chance", "Roman Reigns", "Cole Sprouse", "Dean Ambrose", "Seth Rollins"];

	function writeNames(arr) {
		var i;

		for (i = 0; i < arr.length; i++) {
			appendName += "<li>" + arr[i] + "</li>";
		}

		nameEl.innerHTML = appendName;	
	}


	submit.addEventListener('click', function() {
		names.push(nameVal);
	}, true);

	writeNames(names);

})();