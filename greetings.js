//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var people = ["Mohsin", "Babbar", "Salma", "Danial"];
// Greetings
people.forEach(function (person) {
    var message = "Hello ".concat(person, ", I hope you have a great day!");
    console.log(message);
});
