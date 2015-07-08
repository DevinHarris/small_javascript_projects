function deleteArr(arr, id) {
	var i = 0, newArr = [];

	if (id > arr.length) {
		throw new Error("There isn't enough space in array");
	}

	for (i = 0; i < arr.length; i++) {
		id = id - 1;
		delete arr[id];
		newArr.push(arr[i]);
	}

	return newArr;
}

