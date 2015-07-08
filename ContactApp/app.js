var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: []
    },
    
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(206) 555-5555",
        address: []
    }
};

var submit = document.getElementsByTagName('button');
var personName = document.getElementsByName('name').innerText;

function list(friends) {
    for (name in friends) {
        console.log(name);
    }
}

submit.addEventListener("click", function() {
  console.log(search(personName));
}, true);

function search(name) {
    for (person in friends) {
        if (friends[person].firstName === name) {
            console.log(friends[person]);
            return friends[person];
        }
    }
}