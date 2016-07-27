var johnDoe = {};

johnDoe.firstName = "John";
johnDoe.lastName = "Doe";

johnDoe.greet = function() {
	console.log("my name is " + this.firstName + " " + this.lastName);

};

johnDoe.greet();
