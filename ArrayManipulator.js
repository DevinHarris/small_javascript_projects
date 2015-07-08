var arr = ["Devin Hardy", "Seth Rollins", "Cole Sprouse"];


Array.prototype.mutilate = function(start, end) {
	var newArr = [];

	if (end > this.length || start > this.length) {
		throw new Error("Invalid opperation.");
	} else {

		arr2 = this.slice(start, end);
		newArr.push(arr2);
	}

	return newArr;

};

/* function mutilate(arr, start, end) {
	var newArr = [];

	if (arguments[0]) {
		if (end > arr.length || start > arr.length) {
			throw new Error("Invalid opperation.");
		} else {
			var i;
			for (i = 0; i < arr.length; i++) {

			}

			arr2 = arr.splice(start, end);
			newArr.push(arr2);
		}

		return newArr;
	} else {
		throw new Error("You must enter an Array, it must be the first parameter");
	}


} */

var bigNames = ["Devin Chance", "Justin Beiber", "One Direction", "5SOS"];

bigNames.map(function(name) {
	return name.toLowerCase();
});

var mixed = [1, "Devin", 2, "Justin", 510342421, "543", 100];

mixed.filter(function(element) {
	if (typeof element !== 'number') {
		return element;
	}
});