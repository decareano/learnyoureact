var allUserData = [];
function logStuff (userData) {
	if (typeof userData === "string")
	{
	    console.log(userData);
	}
	else if (typeof userData === "object")
	{
	     for (var item in userData) {
	         console.log(item + ": " + userData[item]);
	     }
	}
}
var generalLastName = "clinton";

function getInput (options, callback) {
	if (typeof callback === "function") {
		callback(generalLastName, options)
	} else {
	
		console.log("this is a function, not a string")
    } 
	allUserData.push (options);
	
}

getInput ({name:"Rich", speciality:"JavaScript", address:"101 Main"}, logStuff);