var clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function(firstName, lastName) {
        this.fullName = firstName + " " + lastName;

    }
}
function getUserInput(firstName, lastName, callback) {
    callback(firstName, lastName);
}
getUserInput("barack", "obama", clientData.setUserName);
console.log(clientData.fullName);
//console.log(window.fullName);