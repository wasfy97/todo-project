function getInput(question) {
    var input = prompt(question);
    if (input === "") {
      input = "invalid";
    }
    return input;
  }
  
  function welcomeMessage(name, gender) {
    var title = "";
  
    if (gender === "male") {
      title = "Mr. ";
    } else if (gender === "female") {
      title = "Ms. ";
    }
  
    if (title === "") {
      alert("Welcome, " + name );
    } else {
      alert("Welcome, " + title + name );
    }
  }


var name = getInput ("please enter your name ");
var gender = getInput ("please enter your gender(male or female)");
var age = parseInt  (getInput("Please enter your age"));

if (age <= 0) {
    alert("Invalid age. Age must be a positive number.");
  } else {
    var skipWelcome = confirm("Do you want to skip the welcoming message?");
    
    if (!skipWelcome) {
      welcomeMessage(name, gender);
    }
}
var answers = [];
answers.push(name);
answers.push(gender);
answers.push(age);
answers.push(skipWelcome);

var likesCooking = confirm("Do you like cooking?");
answers.push(likesCooking);

var hasPets = confirm("Do you have any pets?");
answers.push(hasPets);

var likesSports = confirm("Do you like Sports?");
answers.push(likesSports);

console.log("User's answers:");
for (var i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}