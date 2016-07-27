var clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function(firstName, lastName) {
        this.fullName = firstName + " " + lastName;

    }
}
function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}
getUserInput("barack", "obama", clientData.setUserName, clientData);
console.log(clientData.fullName);
//console.log(window.fullName);