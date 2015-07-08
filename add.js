function add(a, b) {
	if (arguments.length == 2) {
		return a + b;
	} else {
		return function(b) {
			return a + b;
		};
	}
}